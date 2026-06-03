import OpenAI from "openai";
import { NextResponse } from "next/server";
import { getFrameworkPrompt } from "../../../lib/promptRouter";
import { buildPlanningCyclePrompt } from "../../../lib/planningCycle";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { notes, ageGroup, tone, docType } = await req.json();

    if (!notes || notes.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter more educator notes." },
        { status: 400 }
      );
    }

    const frameworkPrompt = getFrameworkPrompt(docType);
    const planningCyclePrompt = buildPlanningCyclePrompt();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an Australian early childhood education assistant. Help ECTs and educators write professional documentation aligned with EYLF 2.0. Keep wording warm, professional, practical and strength-based. Do not include company names, centre names, internal program names, or source document names.",
        },
        {
          role: "user",
          content: `
Age Group: ${ageGroup}
Documentation Type: ${docType}
Writing Tone: ${tone}

Framework to follow:
${frameworkPrompt}

Planning cycle guidance:
${planningCyclePrompt}

Educator notes:
${notes}

Create a complete ${docType} using Australian ECEC language.

Requirements:
- Use the selected documentation type structure.
- Link learning to relevant EYLF 2.0 outcomes.
- Include analysis of learning where appropriate.
- Include intentional teaching or follow-up planning.
- Include family-friendly wording where appropriate.
- Avoid inventing child names, diagnoses, sensitive family details or medical information.
`,
        },
      ],
    });

    return NextResponse.json({
      result: response.choices[0]?.message?.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate documentation." },
      { status: 500 }
    );
  }
}
