"use client";

import { useState } from "react";

const documentationTypes = [
  "Daily Journal",
  "Individual Observation",
  "Incident Report",
  "Transition Report according to developmental milestone",
  "Weekly Program",
];

export default function ObservationDemo() {
  const [notes, setNotes] = useState("");
  const [ageGroup, setAgeGroup] = useState("Toddlers");
  const [tone, setTone] = useState("Professional");
  const [docType, setDocType] = useState("Daily Journal");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateObservation() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/generate-observation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes,
          ageGroup,
          tone,
          docType,
        }),
      });

      const data = await res.json();
      setResult(data.result || data.error || "Something went wrong.");
    } catch (error) {
      setResult("Failed to generate documentation. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyResult() {
    await navigator.clipboard.writeText(result);
    alert("Copied!");
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="text-2xl font-bold">ECEC Documentation Assistant</h2>

      <p className="mt-2 text-sm text-slate-600">
        Privacy reminder: avoid entering children&apos;s full names, addresses,
        medical details or sensitive family information.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm font-medium">Age Group</label>
          <select
            className="mt-2 w-full rounded-xl border p-3"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option>Babies</option>
            <option>Toddlers</option>
            <option>Kindy</option>
            <option>Pre-Kindy</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Writing Tone</label>
          <select
            className="mt-2 w-full rounded-xl border p-3"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Professional</option>
            <option>Warm</option>
            <option>Concise</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Documentation Type</label>
          <select
            className="mt-2 w-full rounded-xl border p-3"
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
          >
            {documentationTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        className="mt-5 min-h-40 w-full rounded-xl border p-4"
        placeholder="Example: Children explored colourful sand today, scooping, pouring and talking with friends..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        className="mt-5 rounded-xl bg-black px-5 py-3 text-white disabled:opacity-50"
        onClick={generateObservation}
        disabled={loading}
      >
        {loading ? "Generating..." : `Generate ${docType}`}
      </button>

      {result && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Generated Documentation</h3>
            <button className="rounded-lg border px-3 py-1 text-sm" onClick={copyResult}>
              Copy
            </button>
          </div>

          <div className="mt-3 whitespace-pre-wrap rounded-2xl bg-orange-50 p-5 text-sm leading-7">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
