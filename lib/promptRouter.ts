export function getFrameworkPrompt(docType:string){
switch(docType){
case 'Transition Statement':
return `Structure: Strengths, Current Goals, Care Routines, Communication, Physical Development, Relationships, Transition Supports, Recommendations.`;
case 'Summative Assessment':
return `Structure: Child as Learner, Identity, Relationships, Communication, Physical Development, Literacy, Mathematics, Future Goals, EYLF Summary.`;
case 'Learning Story':
return `Structure: Observe, Child Voice, Assess, EYLF Links, Respond, Reflect.`;
case 'Weekly Program':
return `Structure: Children's Interests, Intentional Teaching, Planned Experiences, EYLF Links, Reflection and Extension.`;
case 'Incident Report':
return `Structure: Objective Description, Educator Response, Wellbeing Check, Family Communication, Follow-up.`;
default:
return `Structure: Observation, Analysis of Learning, EYLF Links, Follow-up Experience, Parent Summary.`;
}
}
