export const documentationTemplates = {
  "Daily Journal": {
    purpose: "A warm group update for families summarising the day, key experiences, learning, wellbeing and next steps.",
    structure: [
      "Opening overview of the day",
      "Key learning experiences",
      "Learning and development links",
      "Family-friendly closing note",
    ],
    guidance:
      "Use inclusive group language, keep it parent-friendly, and avoid over-assessing individual children unless notes specifically request it.",
  },
  "Individual Observation": {
    purpose: "A focused observation of one child's learning, interests, skills, dispositions and possible extensions.",
    structure: [
      "What was observed",
      "Analysis of learning",
      "EYLF 2.0 links",
      "Follow-up experience",
    ],
    guidance:
      "Write in a professional educator voice. Link behaviour to learning, not labels or judgements.",
  },
  "Incident Report": {
    purpose: "A factual, neutral and professional summary of an incident, educator response and follow-up support.",
    structure: [
      "Objective description of what happened",
      "Immediate educator response",
      "Child wellbeing check",
      "Family communication and follow-up",
    ],
    guidance:
      "Use factual, non-blaming language. Do not diagnose, blame children, or include unnecessary personal details.",
  },
  "Transition Report according to developmental milestone": {
    purpose: "A transition-focused developmental summary using milestone areas and EYLF language.",
    structure: [
      "Identity and wellbeing",
      "Social and emotional development",
      "Communication and language",
      "Physical development",
      "Cognitive learning dispositions",
      "Recommended transition supports",
    ],
    guidance:
      "Use strength-based language and describe readiness, emerging skills and support strategies.",
  },
  "Weekly Program": {
    purpose: "A weekly planning document that connects children's interests, intentional teaching, EYLF links and future experiences.",
    structure: [
      "Children's current interests",
      "Planned experiences",
      "Intentional teaching strategies",
      "EYLF 2.0 links",
      "Reflection and extension ideas",
    ],
    guidance:
      "Make the plan practical for educators, flexible for child-led learning, and connected to observation notes.",
  },
} as const;

export const eylfOutcomeGuide = {
  outcome1: "Children have a strong sense of identity: belonging, confidence, emotional security, autonomy and relationships.",
  outcome2: "Children are connected with and contribute to their world: community, respect, fairness, sustainability and social responsibility.",
  outcome3: "Children have a strong sense of wellbeing: physical health, emotional regulation, safety, resilience and self-help skills.",
  outcome4: "Children are confident and involved learners: curiosity, creativity, persistence, problem-solving, inquiry and resourcefulness.",
  outcome5: "Children are effective communicators: verbal/non-verbal language, literacy, numeracy, symbols, expression and digital communication.",
};

export const developmentalMilestones = {
  "Babies": [
    "Building secure attachments with familiar educators",
    "Exploring through senses, movement and repetition",
    "Developing early communication through sounds, gestures and facial expressions",
    "Practising rolling, crawling, reaching, grasping and early walking",
  ],
  "Toddlers": [
    "Increasing independence and self-help skills",
    "Developing early language and social communication",
    "Practising turn-taking, parallel play and emotional regulation",
    "Strengthening gross motor, fine motor and sensory exploration",
  ],
  "Pre-Kindy": [
    "Engaging in imaginative and cooperative play",
    "Expressing needs, ideas and emotions with growing confidence",
    "Developing early problem-solving, persistence and independence",
    "Building early literacy, numeracy and group participation skills",
  ],
  "Kindy": [
    "Strengthening school readiness, independence and responsibility",
    "Participating in collaborative projects and group learning",
    "Using language to negotiate, explain, predict and reflect",
    "Developing early literacy, numeracy, inquiry and self-regulation skills",
  ],
};

export const professionalWordingBank = {
  strengthsBased: [
    "demonstrated growing confidence",
    "showed curiosity and engagement",
    "was supported to extend their thinking",
    "engaged meaningfully with peers and educators",
    "continued to develop independence and resilience",
  ],
  parentFriendly: [
    "It was lovely to see the children exploring with curiosity today.",
    "This experience supported children's confidence, communication and problem-solving skills.",
    "We will continue to extend this interest through future play-based learning experiences.",
  ],
  incidentNeutral: [
    "Educators responded immediately and provided comfort and support.",
    "The situation was managed calmly and safely.",
    "Families were informed in line with service procedures.",
  ],
};

export function getKnowledgeForPrompt(docType: string, ageGroup: string) {
  const template = documentationTemplates[docType as keyof typeof documentationTemplates];
  const milestones = developmentalMilestones[ageGroup as keyof typeof developmentalMilestones] || [];

  return {
    template,
    milestones,
    eylfOutcomeGuide,
    professionalWordingBank,
  };
}
