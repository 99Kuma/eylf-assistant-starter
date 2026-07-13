# Codex Next Tasks

## Task 1: Structured Section Output
Refactor the generation flow so the API returns structured sections instead of one plain text block.

### Requirements
- Create `lib/documentationTemplates.ts`.
- Move all template objects from `promptRouter.ts` into `documentationTemplates.ts`.
- Each template should include:
  - `type`
  - `audience`
  - `style`
  - `avoid`
  - `sections`
- Each section should include:
  - `title`
  - `instruction`

### API Response Shape
```ts
{
  result: {
    docType: string,
    sections: Array<{
      title: string,
      content: string
    }>
  }
}
```

## Task 2: Section Renderer UI
Create `components/GeneratedDocument.tsx`.

### Requirements
- Render each generated section in a separate card.
- Add copy button for each section.
- Add copy-all button.
- Preserve headings exactly.

## Task 3: Update ObservationDemo
Update `components/ObservationDemo.tsx` to handle structured JSON output.

### Requirements
- Show loading state.
- Render `GeneratedDocument` if structured result exists.
- Keep fallback for plain text errors.

## Task 4: Stronger Template Differentiation
Make documentation types visually and structurally different.

### Examples
- Daily Journal should feel warm and family-facing.
- Learning Story should be narrative and reflective.
- Transition Statement should be practical for receiving educators.
- Summative Assessment should be formal and progress-over-time focused.
- Incident Report should be factual and neutral.

## Task 5: Developmental Progression Library
Create first version of progression library.

### Files
- `lib/progressionLibrary.ts`
- `lib/communicationProgressions.ts`
- `lib/literacyProgressions.ts`

### Age Groups
- Babies / 0-2
- Toddlers / 2-3
- Pre-Kindy / 3-5
- Kindy / 3-5

## Task 6: UI Input Prompts by Documentation Type
Change the placeholder/help text depending on documentation type.

### Examples
- Transition Statement should ask for strengths, routines, communication, goals and transition supports.
- Weekly Program should ask for interests, learning intent, resources and planned experiences.
- Incident Report should ask for factual incident details and educator response.
