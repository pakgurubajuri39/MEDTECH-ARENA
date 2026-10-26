import { ExamSubmission } from '../types';

export const initialMockSubmissions: ExamSubmission[] = [
  {
    id: "sub-101",
    studentName: "Muhammad Farhan Pratama",
    schoolOrigin: "SMPN 1 Depok",
    homeAddress: "Jl. Margonda Raya No. 142, Beji, Depok",
    studentPhone: "081289123456",
    parentPhone: "081377889900",
    packetType: "A",
    totalScore: 88,
    indonesianScore: 90,
    mathScore: 87,
    totalCorrect: 53,
    totalWrong: 7,
    totalBlank: 0,
    answers: {},
    subTopicAnalysis: {
      "Menemukan Informasi (Tekstual)": { correct: 6, total: 6, percentage: 100, subject: 'indonesian' },
      "Memahami & Menyusun Informasi (Inferensial)": { correct: 8, total: 8, percentage: 100, subject: 'indonesian' },
      "Mengevaluasi & Merefleksi": { correct: 5, total: 6, percentage: 83, subject: 'indonesian' },
      "Mengapresiasi Teks Fiksi": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Struktur & Kebahasaan": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Bilangan: Operasi & Aritmetika Sosial": { correct: 7, total: 7, percentage: 100, subject: 'math' },
      "Aljabar: SPLDV & Barisan": { correct: 7, total: 8, percentage: 88, subject: 'math' },
      "Geometri & Pythagoras": { correct: 6, total: 8, percentage: 75, subject: 'math' },
      "Data & Peluang": { correct: 6, total: 7, percentage: 86, subject: 'math' }
    },
    recommendations: [
      "Fokus Perbaikan [Geometri & Pythagoras] (Penguasaan 75%): Mantapkan hafalan tripel Pythagoras dan rumus luas permukaan bangun ruang gabungan."
    ],
    startedAt: "2026-10-24T08:00:00Z",
    completedAt: "2026-10-24T09:12:30Z",
    createdAt: "2026-10-24 09:12"
  },
  {
    id: "sub-102",
    studentName: "Aisyah Nur Salsabila",
    schoolOrigin: "SMPN 2 Depok",
    homeAddress: "Jl. Boulevard Grand Depok City Blok E No. 12",
    studentPhone: "082199887766",
    parentPhone: "081122334455",
    packetType: "A",
    totalScore: 92,
    indonesianScore: 97,
    mathScore: 87,
    totalCorrect: 55,
    totalWrong: 5,
    totalBlank: 0,
    answers: {},
    subTopicAnalysis: {
      "Menemukan Informasi (Tekstual)": { correct: 6, total: 6, percentage: 100, subject: 'indonesian' },
      "Memahami & Menyusun Informasi (Inferensial)": { correct: 8, total: 8, percentage: 100, subject: 'indonesian' },
      "Mengevaluasi & Merefleksi": { correct: 6, total: 6, percentage: 100, subject: 'indonesian' },
      "Mengapresiasi Teks Fiksi": { correct: 5, total: 5, percentage: 100, subject: 'indonesian' },
      "Struktur & Kebahasaan": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Bilangan: Operasi & Aritmetika Sosial": { correct: 7, total: 7, percentage: 100, subject: 'math' },
      "Aljabar: SPLDV & Barisan": { correct: 7, total: 8, percentage: 88, subject: 'math' },
      "Geometri & Pythagoras": { correct: 6, total: 8, percentage: 75, subject: 'math' },
      "Data & Peluang": { correct: 6, total: 7, percentage: 86, subject: 'math' }
    },
    recommendations: [
      "Potensi beasiswa kedokteran sangat tinggi! Kuatkan pemahaman bangun ruang kerucut dan bola untuk meraih skor sempurna."
    ],
    startedAt: "2026-10-24T08:15:00Z",
    completedAt: "2026-10-24T09:25:00Z",
    createdAt: "2026-10-24 09:25"
  },
  {
    id: "sub-103",
    studentName: "Rizky Dwi Ananda",
    schoolOrigin: "SMPIT Darul Quran",
    homeAddress: "Jl. Raya Bogor KM 31, Cisalak, Sukmajaya",
    studentPhone: "085712345678",
    parentPhone: "085699881122",
    packetType: "A",
    totalScore: 73,
    indonesianScore: 80,
    mathScore: 67,
    totalCorrect: 44,
    totalWrong: 16,
    totalBlank: 0,
    answers: {},
    subTopicAnalysis: {
      "Menemukan Informasi (Tekstual)": { correct: 5, total: 6, percentage: 83, subject: 'indonesian' },
      "Memahami & Menyusun Informasi (Inferensial)": { correct: 6, total: 8, percentage: 75, subject: 'indonesian' },
      "Mengevaluasi & Merefleksi": { correct: 5, total: 6, percentage: 83, subject: 'indonesian' },
      "Mengapresiasi Teks Fiksi": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Struktur & Kebahasaan": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Bilangan: Operasi & Aritmetika Sosial": { correct: 5, total: 7, percentage: 71, subject: 'math' },
      "Aljabar: SPLDV & Barisan": { correct: 5, total: 8, percentage: 62, subject: 'math' },
      "Geometri & Pythagoras": { correct: 4, total: 8, percentage: 50, subject: 'math' },
      "Data & Peluang": { correct: 6, total: 7, percentage: 86, subject: 'math' }
    },
    recommendations: [
      "Fokus Perbaikan [Geometri & Pythagoras] (Penguasaan 50%): Latih perhitungan luas permukaan dan volume limas serta prisma.",
      "Fokus Perbaikan [Aljabar: SPLDV & Barisan] (Penguasaan 62%): Ulangi latihan metode eliminasi SPLDV pada soal cerita kontekstual."
    ],
    startedAt: "2026-10-24T09:00:00Z",
    completedAt: "2026-10-24T10:14:10Z",
    createdAt: "2026-10-24 10:14"
  },
  {
    id: "sub-104",
    studentName: "Kayla Putri Ramadhani",
    schoolOrigin: "SMP Pribadi Depok",
    homeAddress: "Jl. Akses UI No. 89, Kelapa Dua, Depok",
    studentPhone: "087811223344",
    parentPhone: "087755667788",
    packetType: "A",
    totalScore: 83,
    indonesianScore: 87,
    mathScore: 80,
    totalCorrect: 50,
    totalWrong: 10,
    totalBlank: 0,
    answers: {},
    subTopicAnalysis: {
      "Menemukan Informasi (Tekstual)": { correct: 6, total: 6, percentage: 100, subject: 'indonesian' },
      "Memahami & Menyusun Informasi (Inferensial)": { correct: 7, total: 8, percentage: 88, subject: 'indonesian' },
      "Mengevaluasi & Merefleksi": { correct: 5, total: 6, percentage: 83, subject: 'indonesian' },
      "Mengapresiasi Teks Fiksi": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Struktur & Kebahasaan": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Bilangan: Operasi & Aritmetika Sosial": { correct: 6, total: 7, percentage: 86, subject: 'math' },
      "Aljabar: SPLDV & Barisan": { correct: 6, total: 8, percentage: 75, subject: 'math' },
      "Geometri & Pythagoras": { correct: 6, total: 8, percentage: 75, subject: 'math' },
      "Data & Peluang": { correct: 6, total: 7, percentage: 86, subject: 'math' }
    },
    recommendations: [
      "Kemampuan analisis teks literasi dan aljabar sangat baik. Rekomendasi beasiswa Sains Medis terbuka lebar!"
    ],
    startedAt: "2026-10-24T10:00:00Z",
    completedAt: "2026-10-24T11:10:45Z",
    createdAt: "2026-10-24 11:10"
  },
  {
    id: "sub-105",
    studentName: "Bintang Satria Wicaksana",
    schoolOrigin: "SMPN 3 Depok",
    homeAddress: "Jl. Kemakmuran No. 45, Sukmajaya, Depok",
    studentPhone: "081344556677",
    parentPhone: "081299001122",
    packetType: "A",
    totalScore: 65,
    indonesianScore: 73,
    mathScore: 57,
    totalCorrect: 39,
    totalWrong: 21,
    totalBlank: 0,
    answers: {},
    subTopicAnalysis: {
      "Menemukan Informasi (Tekstual)": { correct: 5, total: 6, percentage: 83, subject: 'indonesian' },
      "Memahami & Menyusun Informasi (Inferensial)": { correct: 5, total: 8, percentage: 62, subject: 'indonesian' },
      "Mengevaluasi & Merefleksi": { correct: 4, total: 6, percentage: 67, subject: 'indonesian' },
      "Mengapresiasi Teks Fiksi": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Struktur & Kebahasaan": { correct: 4, total: 5, percentage: 80, subject: 'indonesian' },
      "Bilangan: Operasi & Aritmetika Sosial": { correct: 5, total: 7, percentage: 71, subject: 'math' },
      "Aljabar: SPLDV & Barisan": { correct: 4, total: 8, percentage: 50, subject: 'math' },
      "Geometri & Pythagoras": { correct: 4, total: 8, percentage: 50, subject: 'math' },
      "Data & Peluang": { correct: 4, total: 7, percentage: 57, subject: 'math' }
    },
    recommendations: [
      "Fokus Perbaikan [Aljabar: SPLDV & Barisan] (Penguasaan 50%): Pelajari konsep variabel persamaan linier dan substitusi nilai.",
      "Fokus Perbaikan [Geometri & Pythagoras] (Penguasaan 50%): Kuasai rumus keliling dan luas bangun datar gabungan."
    ],
    startedAt: "2026-10-24T13:00:00Z",
    completedAt: "2026-10-24T14:14:00Z",
    createdAt: "2026-10-24 14:14"
  }
];
