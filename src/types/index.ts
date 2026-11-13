export type SubjectType = 'indonesian' | 'math';

export type PacketType = 'A' | 'B' | 'C';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  number: number;
  subject: SubjectType;
  subTopic: string;
  passage?: string;
  stimulusNote?: string;
  questionText: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  recommendationHint: string;
}

export interface StudentProfile {
  fullName: string;
  schoolOrigin: string;
  homeAddress: string;
  studentPhone: string;
  parentPhone: string;
}

export interface SubTopicStat {
  subject: SubjectType;
  subTopic: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface ExamSubmission {
  id: string;
  studentName: string;
  schoolOrigin: string;
  homeAddress: string;
  studentPhone: string;
  parentPhone: string;
  packetType: PacketType;
  totalScore: number;
  indonesianScore: number;
  mathScore: number;
  totalCorrect: number;
  totalWrong: number;
  totalBlank: number;
  answers: Record<number, string>;
  subTopicAnalysis: Record<string, { correct: number; total: number; percentage: number; subject: SubjectType }>;
  recommendations: string[];
  startedAt: string;
  completedAt: string;
  createdAt?: string;
  completionStatus?: 'completed' | 'terminated_violation';
  violationCount?: number;
  terminationReason?: string;
}

export type ActiveSessionStatus =
  | 'instructions'
  | 'active'
  | 'locked'
  | 'unlocked'
  | 'completed'
  | 'terminated';

export interface ActiveSession {
  id: string;
  studentPhone: string;
  studentName: string;
  schoolOrigin: string;
  homeAddress?: string;
  parentPhone?: string;
  packetType: PacketType;
  answers: Record<number, string>;
  flagged: Record<number, boolean>;
  sessionStage?: string;
  currentIndex?: number;
  answeredCount?: number;
  violationCount?: number;
  status?: ActiveSessionStatus;
  lockReason?: string;
  lockedAt?: string;
  lockDeadlineAt?: string;
  lastViolationAt?: string;
  unlockedAt?: string;
  unlockedBy?: string;
  session1Remaining?: number;
  breakRemaining?: number;
  session2Remaining?: number;
  completedSubmissionId?: string;
  registeredAt?: string;
  updatedAt?: string;
}

export interface AppSettings {
  schoolName: string;
  schoolAddress: string;
  schoolPhone: string;
  schoolEmail: string;
  isExamActive: boolean;
  examAccessMode?: 'manual' | 'scheduled';
  examOpenAt?: string;
  examCloseAt?: string;
  showScoreToStudents: boolean;
  scoreReleaseMode?: 'immediate' | 'scheduled' | 'hidden';
  scoreReleaseAt?: string;
  activePacketType: PacketType;
  durationMinutes: number;
  updatedAt?: string;
}

export interface AdminAccount {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin';
  createdAt: string;
}
