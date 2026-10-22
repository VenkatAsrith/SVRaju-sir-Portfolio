export type VerificationStatus = 'Verified' | 'Official Institutional Record' | 'Pending Supporting Document';

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  source: string;
  verifiedDate: string;
}

export interface CareerMilestone {
  id: string;
  year: string;
  period?: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'academic-role' | 'leadership';
  verification: VerificationStatus;
}

export interface AwardItem {
  id: string;
  title: string;
  awardingBody: string;
  year: string;
  level: 'National' | 'State' | 'Institutional' | 'Professional' | 'Research';
  description: string;
  significance: string;
  verification: VerificationStatus;
  certificateAvailable: boolean;
  certificateUrl?: string;
  certificateNote?: string;
}

export interface PatentItem {
  id: string;
  title: string;
  inventors: string[];
  patentOffice: string;
  status: 'Published' | 'Granted' | 'Filed';
  applicationNumber?: string;
  year: string;
  category: 'Biometrics' | 'Cloud & IoT' | 'Educational Technology' | 'Data Mining';
  summary: string;
  sourceUrl?: string;
  verification: VerificationStatus;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: 'Book' | 'Book Chapter' | 'Journal' | 'Conference';
  isbnOrIssn?: string;
  doi?: string;
  url?: string;
  category: 'OBE & Education' | 'AI & ML' | 'Computer Vision & Biometrics' | 'Algorithms & Data' | 'Cloud & Systems';
  featured?: boolean;
  abstract?: string;
}

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  impactSummary: string;
  publicationCount: number;
}

export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  scope: string;
  achievements: string[];
}

export interface EducationalResource {
  id: string;
  title: string;
  type: 'Book' | 'Research Monograph' | 'Video Lecture' | 'Curriculum Guide' | 'Accreditation Framework';
  format: string;
  year: string;
  description: string;
  publisher: string;
  accessUrl: string;
  verified: boolean;
}
