# Codex Handoff: ECEC Documentation & Assessment Platform

## Repository
`99Kuma/eylf-assistant-starter`

## Current Product Direction
Build an AI ECEC Documentation & Assessment Platform for Australian educators and ECTs.

This is not only an observation generator. The product should support documentation, assessment and planning workflows aligned with EYLF-style early childhood practice.

## Current Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- OpenAI API

## Current Working Features
- Local Next.js app runs with `npm run dev`
- OpenAI API route exists at `app/api/generate-observation/route.ts`
- Main UI component exists at `components/ObservationDemo.tsx`
- Documentation type selector exists
- Section-by-section template engine exists in `lib/promptRouter.ts`
- Planning cycle framework exists in `lib/planningCycle.ts`
- Initial framework files exist for:
  - Transition Statement
  - Learning Story
  - Summative Assessment

## Current Documentation Types
- Daily Journal
- Individual Observation
- Learning Story
- Weekly Program
- Transition Statement
- Summative Assessment
- Incident Report

## Important Product Rule
Generated content must not include company names, centre names, internal program names, or source document names.

## Current Architecture
User selects:
- Age Group
- Writing Tone
- Documentation Type
- Educator Notes

Then API calls:
- `getFrameworkPrompt(docType)` from `lib/promptRouter.ts`
- `buildPlanningCyclePrompt()` from `lib/planningCycle.ts`
- OpenAI model generates documentation

## Main Issue To Improve Next
Outputs still need stronger differentiation between document types. The current solution has moved toward a section-by-section template engine, but the next Codex task should make this stricter.

## Recommended Next Engineering Direction
Move from plain prompt text to a structured section generation pipeline:

1. Get template object by documentation type.
2. Generate each section separately or enforce strict headings.
3. Return structured JSON from API.
4. Render each section as a separate UI block.
5. Add copy buttons per section.

## Suggested Next Files
- `lib/documentationTemplates.ts`
- `lib/sectionGenerator.ts`
- `lib/progressionLibrary.ts`
- `lib/communicationProgressions.ts`
- `lib/literacyProgressions.ts`
- `components/GeneratedDocument.tsx`

## Next Sprint Goal
Convert output from one plain text block to structured sections.

Example API output:

```ts
{
  docType: "Learning Story",
  sections: [
    { title: "Observe / Notice", content: "..." },
    { title: "Assess: What Is The Learning?", content: "..." },
    { title: "Respond", content: "..." }
  ]
}
```

## Local Development
```bash
cd ~/eylf-assistant-starter
npm install
npm run dev
```
