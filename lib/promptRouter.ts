export function getFrameworkPrompt(docType: string) {
  switch (docType) {
    case "Daily Journal":
      return `
Use a DAILY JOURNAL format.
Write for families as a warm group update.
Sections:
1. Warm opening summary
2. Main experiences today
3. Learning highlights
4. EYLF connections
5. Tomorrow or future extension
Avoid individual assessment language.
`;

    case "Individual Observation":
      return `
Use an INDIVIDUAL OBSERVATION format.
Write about one child's observed learning.
Sections:
1. Observation
2. Analysis of learning
3. EYLF links
4. Developmental connection
5. Follow-up experience
6. Parent summary
Avoid writing it like a daily journal.
`;

    case "Learning Story":
      return `
Use a LEARNING STORY format.
Write as a rich narrative with deeper reflection.
Sections:
1. Title
2. Observe / Notice
3. Child voice
4. Assess: what is the learning?
5. EYLF links
6. Respond: intentional next steps
7. Reflect: educator reflection
Make it more detailed than an observation.
`;

    case "Weekly Program":
      return `
Use a WEEKLY PROGRAM format.
Write as a planning document, not a completed observation.
Sections:
1. Children's current interests
2. Weekly learning intent
3. Planned experiences
4. Intentional teaching strategies
5. Resources and environment
6. EYLF links
7. Reflection prompts
`;

    case "Transition Statement":
    case "Transition Report according to developmental milestone":
      return `
Use a TRANSITION STATEMENT format.
Write for receiving educators to support continuity of care and learning.
Sections:
1. Child overview
2. Strengths and interests
3. Care routines and wellbeing
4. Current learning goals
5. Communication and language
6. Social and emotional development
7. Physical development
8. Transition supports
Avoid daily journal language.
`;

    case "Summative Assessment":
      return `
Use a SUMMATIVE ASSESSMENT format.
Write as a formal overview of progress over time.
Sections:
1. Child as a learner
2. Identity and wellbeing
3. Curiosity and engagement
4. Communication and early literacy
5. Social relationships
6. Approaches to learning
7. Physical development
8. EYLF outcomes summary
9. Future goals
Avoid writing it as a single activity observation.
`;

    case "Incident Report":
      return `
Use an INCIDENT REPORT format.
Write factually and neutrally.
Sections:
1. Objective description
2. Educator response
3. Wellbeing support
4. Family communication
5. Follow-up plan
Avoid blame, judgement or assumptions.
`;

    default:
      return `
Use a GENERAL DOCUMENTATION format.
Sections:
1. Documentation
2. Analysis of learning
3. EYLF links
4. Follow-up experience
5. Parent summary
`;
  }
}
