export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  pipeline?: { icon: string; label: string }[];
  highlight: string;
  tags: string[];
  type: 'iot-simulator' | 'graphics-2d';
  fullDetails: {
    problemStatement: string;
    hardwareComponents?: string[];
    softwareStack: string[];
    keyOutcomes: string[];
    telemetryMetrics?: { label: string; unit: string; initial: number }[];
  };
}

export interface Certificate {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl?: string;
  summary: string;
  skillsVerified: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  statusLabel: string;
  degree: string;
  institution: string;
  score?: string;
  year?: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export type ViewScreen = 'all' | 'home' | 'about' | 'skills' | 'projects' | 'certifications' | 'leadership' | 'education' | 'contact';
