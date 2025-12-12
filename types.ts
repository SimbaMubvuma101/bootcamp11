
export interface Speaker {
  name: string;
  role: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  facilitator?: string;
  details: string[];
  type: 'session' | 'break' | 'activity';
}

export interface CaseStudyStep {
  id: number;
  part: string;
  title: string;
  scenario: string;
  aiLayer: {
    task: string;
    action: string;
    details: string[];
  };
  humanRole: string;
  tools: string[];
}
