
import { Speaker, ScheduleItem, CaseStudyStep } from './types';

export const SPEAKERS: Speaker[] = [
  {
    name: "Mr. Simba Mubvuma",
    role: "Chair",
    title: "Growth Point 9 Founder • CXO DAY1 AI",
    description: "Former CEO Lexware Inc. Leading the bootcamp and facilitating key technical sessions on legal automation."
  },
  {
    name: "Mr. Simba Makahamadze",
    role: "Guest of Honour",
    title: "Founder & CEO AfricanLaw",
    description: "Chairman Zimbabwean Business Council UAE • Senator for Zimbabwe, WBAF/G20. Delivering the keynote on AI innovation."
  },
  {
    name: "Miss Lauren Mkahanana",
    role: "Co-Chair",
    title: "Deed Secure Associate",
    description: "Bachelor of Procedural Laws Candidate, UZ. Leading interactive case studies."
  },
  {
    name: "Mr. Edgar Nyanhanda",
    role: "Co-Chair",
    title: "Unbind AI Associate",
    description: "Bachelor of Procedural Laws Candidate, UZ. Specializing in AI workflow integration."
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: "10:00 AM – 10:15 AM",
    title: "Opening Remarks & Welcome",
    facilitator: "Mr. Simba Mubvuma",
    details: ["Bootcamp objectives", "Introductions"],
    type: "session"
  },
  {
    time: "10:15 AM – 10:30 AM",
    title: "Guest of Honour Address",
    facilitator: "Mr. Simba Makahamadze",
    details: ["AI innovation with the Law", "Future opportunities"],
    type: "session"
  },
  {
    time: "10:30 AM – 11:30 AM",
    title: "Session 1: Auto-Generating Engagement Letters",
    facilitator: "Mr. Simba Mubvuma",
    details: ["Full demonstration", "Best practices & templates", "Q&A"],
    type: "session"
  },
  {
    time: "11:30 AM – 12:15 PM",
    title: "Session 2: Making Client Files & PDFs Searchable",
    facilitator: "Mr. Simba Mubvuma",
    details: ["OCR tools and AI search features", "Practical walkthrough", "Q&A"],
    type: "session"
  },
  {
    time: "12:15 PM – 1:00 PM",
    title: "Lunch Break",
    details: [],
    type: "break"
  },
  {
    time: "1:00 PM – 2:00 PM",
    title: "Session 3: Tracking Tasks & Deadlines Automatically",
    facilitator: "Mr. Simba Mubvuma",
    details: ["Automating workflows", "Integrations with AI tools", "Q&A"],
    type: "session"
  },
  {
    time: "2:00 PM – 2:40 PM",
    title: "Interactive Case Study",
    facilitator: "Miss Lauren Mkahanana & Mr. Edgar Nyanhanda",
    details: ["Applying all three AI skills in one workflow", "Participant interaction & guided problem-solving"],
    type: "activity"
  },
  {
    time: "2:40 PM – 2:55 PM",
    title: "Discussion & Reflections",
    details: ["Participant insights", "Co-Chair highlights", "Deed Secure, Unbind AI"],
    type: "activity"
  },
  {
    time: "2:55 PM – 3:00 PM",
    title: "Closing Remarks",
    facilitator: "Mr. Simba Mubvuma",
    details: ["Summary & expectations for next sessions"],
    type: "session"
  }
];

export const CASE_STUDY_STEPS: CaseStudyStep[] = [
  {
    id: 1,
    part: "PART 1: Ingestion",
    title: "Searchable Files & OCR",
    scenario: "Client uploads a PDF bundle: a barely readable scanned deed, two email chains, and a WhatsApp export.",
    aiLayer: {
      task: "Optical Character Recognition (OCR)",
      action: "Convert static images to searchable text.",
      details: [
        "Process scanned deed to fix readability.",
        "Extract key entities: Client Name, Address, Deed Number.",
        "Make entire client file text-searchable."
      ]
    },
    humanRole: "Verify extracted deed number against the original scan. Confirm property details.",
    tools: ["Read AI", "Adobe Acrobat AI"]
  },
  {
    id: 2,
    part: "PART 1: Summary",
    title: "Summarizing Comms",
    scenario: "Lawyer needs to understand the history between the diaspora client and the buyer without reading 50+ emails.",
    aiLayer: {
      task: "Contextual Summarization",
      action: "Analyze unstructured conversation data.",
      details: [
        "Summarize buyer-seller email chains: 'What is agreed?'",
        "Identify potential red flags or timeline conflicts.",
        "Transcribe remote meeting notes (if audio exists)."
      ]
    },
    humanRole: "Review summary for nuance. Decide on legal strategy based on 'red flags'.",
    tools: ["Otter AI", "LLMs (Large Language Models)"]
  },
  {
    id: 3,
    part: "PART 1: Engagement",
    title: "Engagement Letter",
    scenario: "Formalize the relationship with the client using the firm's standard terms.",
    aiLayer: {
      task: "Template Automation",
      action: "Auto-fill firm-approved templates.",
      details: [
        "Populate Parties, Scope (Deed Verification, Sale Agreement), and Fees.",
        "Insert Compliance Clauses automatically.",
        "Generate a polished PDF for signature."
      ]
    },
    humanRole: "Confirm fee structure is appropriate. Review scope of work for accuracy.",
    tools: ["Document Automation Tool", "Firm Templates"]
  },
  {
    id: 4,
    part: "PART 2: Drafting",
    title: "The Sale Agreement",
    scenario: "Draft a clean sale agreement based on Zimbabwean property law requirements.",
    aiLayer: {
      task: "Generative Drafting",
      action: "Drafting & Clause Analysis.",
      details: [
        "Generate first draft using firm precedents + specifics (Buyer, Seller, Property).",
        "Analyze corpus (emails/WhatsApp) to ensure agreed terms are included.",
        "Flag missing clauses (e.g., Default, Dispute Resolution)."
      ]
    },
    humanRole: "Review line-by-line for accuracy, legality, and ethics. The lawyer retains full control.",
    tools: ["Open AI", "Legal Specific LLM"]
  },
  {
    id: 5,
    part: "PART 3: Workflow",
    title: "Task & Deadline Automation",
    scenario: "Client demands weekly updates. The transaction has multiple moving parts (Verification -> Signing -> Transfer).",
    aiLayer: {
      task: "Workflow Orchestration",
      action: "Translate text timelines to structured tasks.",
      details: [
        "Extract dates from agreement.",
        "Auto-generate reminders for Lawyer (Verification) and Client (Signing).",
        "Populate a shared progress dashboard."
      ]
    },
    humanRole: "Manage the relationship. Handle exceptions (e.g., if verification fails).",
    tools: ["Task Dashboard", "Calendar Integration"]
  },
  {
    id: 6,
    part: "PART 4: Ethics",
    title: "Data Security & Ethics",
    scenario: "Closing reflection on the boundary between AI efficiency and professional responsibility.",
    aiLayer: {
      task: "Policy Check",
      action: "N/A - This is a governance step.",
      details: [
        "Question: Which tasks *must* remain human?",
        "Question: How is client confidentiality protected?",
        "Result: AI amplifies skills, it does not replace the lawyer."
      ]
    },
    humanRole: "Ensure strict adherence to data privacy. maintain the ethical 'red lines'.",
    tools: ["Firm AI Policy", "Human Judgment"]
  }
];
