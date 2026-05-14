import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const notes = body?.notes || "";

  // TODO: Replace demo response with OpenAI API call.
  // Keep child privacy in mind: avoid storing full names, faces, health details, or sensitive family information.

  return NextResponse.json({
    observation: `Based on the educator notes: "${notes}", the child demonstrated curiosity, engagement, and developing communication skills through play.`,
    eylfLinks: [
      "Outcome 1: Children have a strong sense of identity",
      "Outcome 4: Children are confident and involved learners",
      "Outcome 5: Children are effective communicators"
    ],
    followUp: "Extend the experience with open-ended materials and intentional educator questioning.",
    parentSummary: "Your child showed wonderful curiosity and engagement during today's play experience."
  });
}
