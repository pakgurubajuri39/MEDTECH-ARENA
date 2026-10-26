import { PacketType, Question, SubjectType } from '../types';
import { questionsPacketA } from './questionsA';
import { questionsPacketB } from './questionsB';
import { questionsPacketC } from './questionsC';

export function getQuestionsByPacket(packet: PacketType): Question[] {
  switch (packet) {
    case 'B':
      return questionsPacketB;
    case 'C':
      return questionsPacketC;
    case 'A':
    default:
      return questionsPacketA;
  }
}

export interface EvaluationResult {
  totalCorrect: number;
  totalWrong: number;
  totalBlank: number;
  totalScore: number;
  indonesianScore: number;
  mathScore: number;
  indonesianCorrect: number;
  mathCorrect: number;
  subTopicAnalysis: Record<string, { correct: number; total: number; percentage: number; subject: SubjectType }>;
  recommendations: string[];
}

export function evaluateExam(packet: PacketType, answers: Record<number, string>): EvaluationResult {
  const questions = getQuestionsByPacket(packet);

  let totalCorrect = 0;
  let totalWrong = 0;
  let totalBlank = 0;
  let indonesianCorrect = 0;
  let mathCorrect = 0;

  const subTopicAnalysis: Record<string, { correct: number; total: number; percentage: number; subject: SubjectType }> = {};
  const missedRecommendations: { topic: string; hint: string }[] = [];

  questions.forEach((q) => {
    if (!subTopicAnalysis[q.subTopic]) {
      subTopicAnalysis[q.subTopic] = {
        correct: 0,
        total: 0,
        percentage: 0,
        subject: q.subject
      };
    }
    subTopicAnalysis[q.subTopic].total += 1;

    const studentAnswer = answers[q.id];
    if (!studentAnswer) {
      totalBlank += 1;
      missedRecommendations.push({ topic: q.subTopic, hint: q.recommendationHint });
    } else if (studentAnswer === q.correctAnswer) {
      totalCorrect += 1;
      subTopicAnalysis[q.subTopic].correct += 1;
      if (q.subject === 'indonesian') {
        indonesianCorrect += 1;
      } else {
        mathCorrect += 1;
      }
    } else {
      totalWrong += 1;
      missedRecommendations.push({ topic: q.subTopic, hint: q.recommendationHint });
    }
  });

  // Calculate percentages
  Object.keys(subTopicAnalysis).forEach((topic) => {
    const item = subTopicAnalysis[topic];
    item.percentage = Math.round((item.correct / item.total) * 100);
  });

  const totalScore = Math.round((totalCorrect / questions.length) * 100);
  const indonesianScore = Math.round((indonesianCorrect / 30) * 100);
  const mathScore = Math.round((mathCorrect / 30) * 100);

  // Derive unique recommendations focused on weakest subtopics
  const uniqueRecs: string[] = [];
  const lowMasteryTopics = Object.entries(subTopicAnalysis)
    .filter(([_, data]) => data.percentage < 70)
    .sort((a, b) => a[1].percentage - b[1].percentage);

  if (lowMasteryTopics.length > 0) {
    lowMasteryTopics.slice(0, 4).forEach(([topic, data]) => {
      const hintObj = missedRecommendations.find(r => r.topic === topic);
      const hint = hintObj ? hintObj.hint : `Perbanyak latihan soal pada materi ${topic}.`;
      uniqueRecs.push(`Fokus Perbaikan [${topic}] (Penguasaan ${data.percentage}%): ${hint}`);
    });
  } else {
    uniqueRecs.push("Pemahaman akademik sangat istimewa di semua sub-materi! Pertahankan konsistensi belajar dan ikuti program kelas akselerasi olimpiade/kedokteran SMA Genesis Medicare.");
  }

  return {
    totalCorrect,
    totalWrong,
    totalBlank,
    totalScore,
    indonesianScore,
    mathScore,
    indonesianCorrect,
    mathCorrect,
    subTopicAnalysis,
    recommendations: uniqueRecs
  };
}
