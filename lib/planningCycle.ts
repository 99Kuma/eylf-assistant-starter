export const planningCycle = {
  notice: {
    label: "NOTICE: Observe and Assess",
    purpose:
      "Observe, listen and collect information about children's interests, conversations, play, routines, emerging skills and development.",
    prompts: [
      "What happened?",
      "What did the child or group say, do or demonstrate?",
      "What interests, strengths or emerging skills are visible?",
      "Does this connect to a learning goal or developmental area?",
    ],
  },
  assess: {
    label: "ASSESS: What is the learning?",
    purpose:
      "Interpret the learning by connecting evidence to EYLF outcomes, developmental progressions, learning areas and educator knowledge.",
    prompts: [
      "What learning is occurring here?",
      "Which EYLF outcomes are most relevant?",
      "Which learning area or developmental skill is being strengthened?",
      "What does this show about the child's current stage?",
    ],
  },
  respond: {
    label: "RESPOND: Plan and Implement",
    purpose:
      "Plan intentional teaching strategies, resources, environments and experiences that extend the learning.",
    prompts: [
      "What is the next intentional teaching step?",
      "What will the educator say, do or provide?",
      "How can the environment or materials extend this interest?",
      "How can this be inclusive and play-based?",
    ],
  },
  reflect: {
    label: "REFLECT: Evaluate Practice",
    purpose:
      "Evaluate the effectiveness of the experience, teaching decisions and future planning opportunities.",
    prompts: [
      "What worked well?",
      "What could be adjusted?",
      "What does this tell us about the child or group?",
      "How will this inform future planning?",
    ],
  },
};

export function buildPlanningCyclePrompt() {
  return `Use the planning cycle: NOTICE evidence, ASSESS the learning, RESPOND with intentional teaching, and REFLECT on future planning.`;
}
