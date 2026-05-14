"use client";

import { useState } from "react";

const demoOutput = {
  observation:
    "Today, the child engaged confidently in sensory play with colourful sand. They explored texture using their hands and tools, showing curiosity, concentration, and emerging fine motor control.",
  eylf:
    "EYLF 2.0 Outcome 4: Children are confident and involved learners. Outcome 5: Children are effective communicators.",
  followUp:
    "Provide a small-world sensory tray with natural materials, scoops, and containers to extend problem-solving, language, and collaborative play.",
  parentSummary:
    "Your child enjoyed exploring colourful sand today, using their senses and hands to investigate texture, movement, and patterns."
};

export default function ObservationDemo() {
  const [notes, setNotes] = useState("Child played with colourful sand, scooping, pouring and talking with friends.");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="text-xl font-bold">Observation Assistant</h2>
      <p className="mt-2 text-sm text-slate-600">
        Start with rough notes. The AI turns them into professional documentation.
      </p>

      <label className="mt-5 block text-sm font-medium">Educator notes</label>
      <textarea
        className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:ring-2 focus:ring-orange-300"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        className="mt-4 w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white"
        onClick={() => setGenerated(true)}
      >
        Generate demo observation
      </button>

      {generated && (
        <div className="mt-6 space-y-4">
          <Result title="Observation" text={demoOutput.observation} />
          <Result title="EYLF Links" text={demoOutput.eylf} />
          <Result title="Follow-up Experience" text={demoOutput.followUp} />
          <Result title="Parent Summary" text={demoOutput.parentSummary} />
        </div>
      )}
    </div>
  );
}

function Result({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-orange-50 p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}
