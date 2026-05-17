import OpenAI from "openai";
import { NextResponse } from "next/server";

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

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an Australian early childhood education assistant. Help ECTs and educators write professional documentation aligned with EYLF 2.0. Keep wording warm, professional and practical.",
        },
        {
          role: "user",
          content: `
Age Group: ${ageGroup}
Documentation Type: ${docType}
Writing Tone: ${tone}

Create professional EYLF documentation from these educator notes:

${notes}

Return:
1. Observation or documentation
2. EYLF links
3. Analysis of learning
4. Follow-up experience
5. Parent summary
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
      { error: "Failed to generate observation." },
      { status: 500 }
    );
  }
}
