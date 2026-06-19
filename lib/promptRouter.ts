export type SectionTemplate = {
  title: string;
  instruction: string;
};

export type DocumentationTemplate = {
  type: string;
  audience: string;
  style: string;
  avoid: string;
  sections: SectionTemplate[];
};

const templates: Record<string, DocumentationTemplate> = {
  "Daily Journal": {
    type: "Daily Journal",
    audience: "Families",
    style: "Warm, family-friendly and group-focused.",
    avoid: "Do not write like an individual assessment or incident report.",
    sections: [
      { title: "Warm Opening Summary", instruction: "Write a short welcoming overview of the day." },
      { title: "Main Experiences Today", instruction: "Describe the key play, routines and group experiences." },
      { title: "Learning Highlights", instruction: "Explain what children practised or explored in parent-friendly language." },
      { title: "EYLF Connections", instruction: "List relevant EYLF outcomes with brief explanations." },
      { title: "What We May Explore Next", instruction: "Suggest a short future extension." },
    ],
  },
  "Individual Observation": {
    type: "Individual Observation",
    audience: "Educators and families",
    style: "Professional, evidence-based and strength-based.",
    avoid: "Do not write as a group daily update.",
    sections: [
      { title: "Observation", instruction: "Describe what the child did, said or demonstrated." },
      { title: "Analysis of Learning", instruction: "Explain the skills, interests and learning dispositions shown." },
      { title: "EYLF Links", instruction: "Connect the learning to relevant EYLF outcomes." },
      { title: "Developmental Connection", instruction: "Use age-appropriate developmental language." },
      { title: "Follow-up Experience", instruction: "Suggest one practical intentional extension." },
      { title: "Parent Summary", instruction: "Write a short family-friendly version." },
    ],
  },
  "Learning Story": {
    type: "Learning Story",
    audience: "Educators and families",
    style: "Narrative, reflective, detailed and warm.",
    avoid: "Do not make it brief like a snapshot observation.",
    sections: [
      { title: "Title", instruction: "Create a meaningful title." },
      { title: "Observe / Notice", instruction: "Write a rich narrative of what happened, including actions and context." },
      { title: "Child Voice", instruction: "Include what the child expressed or communicated. If not recorded, state that child voice was not recorded." },
      { title: "Assess: What Is The Learning?", instruction: "Explain deeper learning, thinking, concepts and dispositions." },
      { title: "EYLF Links", instruction: "Connect the story to relevant EYLF outcomes." },
      { title: "Respond: Intentional Next Steps", instruction: "Suggest intentional teaching strategies and next experiences." },
      { title: "Reflect: Educator Reflection", instruction: "Reflect on what this tells educators about future planning." },
    ],
  },
  "Weekly Program": {
    type: "Weekly Program",
    audience: "Educators",
    style: "Planning-focused, practical and organised.",
    avoid: "Do not write as if the experiences already happened.",
    sections: [
      { title: "Children's Current Interests", instruction: "Summarise the interests or needs shown in the notes." },
      { title: "Weekly Learning Intent", instruction: "Write one clear learning intention for the week." },
      { title: "Planned Experiences", instruction: "Provide four to six practical planned experiences." },
      { title: "Intentional Teaching Strategies", instruction: "List educator actions, questions and scaffolding." },
      { title: "Resources and Environment", instruction: "List setup ideas, resources and environment changes." },
      { title: "EYLF Links", instruction: "List relevant EYLF outcomes." },
      { title: "Reflection Prompts", instruction: "Provide questions educators can use at the end of the week." },
    ],
  },
  "Transition Statement": {
    type: "Transition Statement",
    audience: "Receiving educators",
    style: "Professional, concise, practical and strength-based.",
    avoid: "Do not write as a daily journal. Do not invent medical or family details.",
    sections: [
      { title: "Child Overview", instruction: "Summarise strengths, personality, interests and current confidence." },
      { title: "Strengths and Interests", instruction: "Describe what the child enjoys and engages with." },
      { title: "Care Routines and Wellbeing", instruction: "Include routines only if provided in the notes." },
      { title: "Current Learning Goals", instruction: "Summarise relevant goals and progress." },
      { title: "Communication and Language", instruction: "Describe communication, understanding and expression." },
      { title: "Social and Emotional Development", instruction: "Describe relationships, belonging and regulation." },
      { title: "Physical Development", instruction: "Describe gross motor, fine motor, sensory or self-help development." },
      { title: "Transition Supports", instruction: "Provide practical strategies for the next room." },
    ],
  },
  "Transition Report according to developmental milestone": {
    type: "Transition Statement",
    audience: "Receiving educators",
    style: "Professional, concise, practical and strength-based.",
    avoid: "Do not write as a daily journal. Do not invent medical or family details.",
    sections: [
      { title: "Child Overview", instruction: "Summarise strengths, personality, interests and current confidence." },
      { title: "Strengths and Interests", instruction: "Describe what the child enjoys and engages with." },
      { title: "Care Routines and Wellbeing", instruction: "Include routines only if provided in the notes." },
      { title: "Current Learning Goals", instruction: "Summarise relevant goals and progress." },
      { title: "Communication and Language", instruction: "Describe communication, understanding and expression." },
      { title: "Social and Emotional Development", instruction: "Describe relationships, belonging and regulation." },
      { title: "Physical Development", instruction: "Describe gross motor, fine motor, sensory or self-help development." },
      { title: "Transition Supports", instruction: "Provide practical strategies for the next room." },
    ],
  },
  "Summative Assessment": {
    type: "Summative Assessment",
    audience: "Educators, educational leaders and families",
    style: "Formal, reflective, progress-focused and strength-based.",
    avoid: "Do not write as a single activity observation.",
    sections: [
      { title: "Child as a Learner", instruction: "Summarise identity, confidence, interests and learning dispositions." },
      { title: "Identity and Wellbeing", instruction: "Discuss belonging, confidence and emotional wellbeing." },
      { title: "Curiosity and Engagement", instruction: "Discuss participation, curiosity and motivation." },
      { title: "Communication and Early Literacy", instruction: "Discuss language, stories, songs, mark making or literacy." },
      { title: "Social Relationships", instruction: "Discuss relationships with peers and educators." },
      { title: "Approaches to Learning", instruction: "Discuss persistence, problem-solving and independence." },
      { title: "Physical Development", instruction: "Discuss motor, coordination, sensory or self-help skills." },
      { title: "EYLF Outcomes Summary", instruction: "List relevant EYLF outcomes." },
      { title: "Future Goals", instruction: "Suggest two or three future learning goals." },
    ],
  },
  "Incident Report": {
    type: "Incident Report",
    audience: "Educators and families",
    style: "Factual, neutral, concise and non-judgemental.",
    avoid: "Do not blame, diagnose, speculate or use emotional language.",
    sections: [
      { title: "Objective Description", instruction: "State what happened using factual language only." },
      { title: "Educator Response", instruction: "Describe what educators did to support safety and wellbeing." },
      { title: "Wellbeing Support", instruction: "Describe comfort, monitoring or first aid only if provided." },
      { title: "Family Communication", instruction: "Write professional family communication wording." },
      { title: "Follow-up Plan", instruction: "Suggest supervision, environment or teaching strategies." },
    ],
  },
};

export function getDocumentationTemplate(docType: string) {
  return templates[docType] || templates["Individual Observation"];
}

export function getFrameworkPrompt(docType: string) {
  const template = getDocumentationTemplate(docType);
  return `
DOCUMENTATION TYPE: ${template.type}
AUDIENCE: ${template.audience}
STYLE: ${template.style}
AVOID: ${template.avoid}

Generate the output section by section using EXACTLY these headings in this order:
${template.sections.map((section, index) => `${index + 1}. ${section.title}: ${section.instruction}`).join("\n")}

Do not merge sections. Do not replace the headings. If notes do not include information for a section, write a brief appropriate statement instead of inventing details.
`;
}
