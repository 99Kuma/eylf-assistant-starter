# Codex Development Tasks

## Task 1: Connect real AI generation
Build `/app/api/generate-observation/route.ts` with OpenAI API support.

Requirements:
- Input: rough educator notes, child age group, room type, tone
- Output: observation, EYLF 2.0 links, analysis of learning, follow-up experience, parent summary
- Add privacy warning: do not enter full child names or sensitive personal details
- Handle errors cleanly

## Task 2: Add educator workflow
- Add fields for age group: babies, toddlers, pre-kindy, kindergarten
- Add activity type dropdown
- Add tone: professional, warm, concise
- Add copy buttons for each output section

## Task 3: Add subscription model
- Free users: 10 generations/month
- Pro users: unlimited or high monthly limit
- Add account dashboard

## Task 4: Add saved templates
- Observation
- Daily journal
- Incident communication wording
- Reflection
- QIP note
