import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  RotateCcw, 
  Printer, 
  Phone, 
  BookOpen, 
  Sparkles,
  TrendingUp,
  School,
  FileText,
  User,
  GraduationCap
} from 'lucide-react';
import { ExamSubmission, AppSettings } from '../types';

interface StudentResultProps {
  submission: ExamSubmission;
  settings: AppSettings;
  onBackToHome: () => void;
}

export const StudentResult: React.FC<StudentResultProps> = ({
  submission,
  settings,
  onBackToHome
}) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* 1. HERO CONGRATULATORY CARD */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEDTECH ARENA &bull; Try Out Selesai &amp; Data Tersimpan di Server</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Selamat, {submission.studentName}!
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Anda telah menuntaskan seluruh tantangan <strong>MEDTECH ARENA</strong> (Try Out TKA SMP) bersama{' '}
              <strong className="text-white">{settings.schoolName || 'SMA Genesis Medicare'}</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
              <span>Asal Sekolah: <strong className="text-white">{submission.schoolOrigin}</strong></span>
              <span>&bull;</span>
              <span>Paket Soal: <strong className="text-white">Tipe {submission.packetType}</strong></span>
              <span>&bull;</span>
              <span>Waktu Selesai: <strong className="text-white">{new Date(submission.completedAt).toLocaleTimeString('id-ID')} WIB</strong></span>
            </div>
          </div>

          <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex flex-col items-center justify-center text-center shadow-lg shrink-0">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            <span className="text-[10px] text-cyan-200 font-bold uppercase mt-1">Terverifikasi</span>
          </div>
        </div>
      </div>

      {/* 2. NILAI MASING-MASING MAPEL (TIDAK DIGABUNGKAN - KHUSUS NILAI UNTUK SISWA) */}
      {settings.showScoreToStudents ? (
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">Perolehan Nilai Ujian Anda</h3>
            <p className="text-xs text-slate-500">Nilai hasil pengerjaan masing-masing mata pelajaran (skala 0 - 100)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card Nilai Bahasa Indonesia */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">Mata Pelajaran 1</span>
                    <h4 className="text-lg font-extrabold text-slate-900">Bahasa Indonesia</h4>
                    <p className="text-xs text-slate-500">30 Soal Literasi & Teks</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-900">Skor Mata Pelajaran</div>
                  <div className="text-xs text-slate-500">Berdasarkan 30 soal dikerjakan</div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-blue-800">{submission.indonesianScore}</div>
                  <div className="text-[10px] font-bold text-slate-400">/ 100</div>
                </div>
              </div>

              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${submission.indonesianScore}%` }}
                ></div>
              </div>
            </div>

            {/* Card Nilai Matematika */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4 hover:border-cyan-300 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600">Mata Pelajaran 2</span>
                    <h4 className="text-lg font-extrabold text-slate-900">Matematika</h4>
                    <p className="text-xs text-slate-500">30 Soal Numerasi & HOTS</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50/80 p-5 rounded-2xl border border-cyan-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-cyan-900">Skor Mata Pelajaran</div>
                  <div className="text-xs text-slate-500">Berdasarkan 30 soal dikerjakan</div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-cyan-800">{submission.mathScore}</div>
                  <div className="text-[10px] font-bold text-slate-400">/ 100</div>
                </div>
              </div>

              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${submission.mathScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>
              ℹ️ Lembar sertifikat dan analisis komprehensif penguasaan sub-materi telah tersimpan di sistem panitia seleksi SMA Genesis Medicare.
            </span>
          </div>
        </div>
      ) : (
        /* Jika disembunyikan oleh Admin */
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-center space-y-5">
          <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto shadow-sm">
            <FileText className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl font-bold text-slate-900">
              Hasil Try Out Sedang Direkapitulasi
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sesuai kebijakan panitia seleksi SMA Genesis Medicare, hasil nilai dan peringkat lengkap akan diumumkan secara serentak melalui nomor WhatsApp siswa &amp; orang tua yang telah didaftarkan.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 max-w-md mx-auto text-xs text-cyan-900">
            Pastikan nomor WhatsApp Anda ({submission.studentPhone}) tetap aktif untuk menerima lembar hasil tes dan penawaran beasiswa.
          </div>
        </div>
      )}

      {/* 3. KONSULTASI PPDB & BEASISWA */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            Jalur Beasiswa Siswa Berprestasi
          </span>
          <h4 className="text-xl font-bold">Tertarik Bergabung dengan SMA Genesis Medicare?</h4>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Gunakan hasil perolehan nilai Try Out ini untuk mengajukan beasiswa potongan uang pangkal dan bergabung di kelas unggulan Medical Science &amp; Health Informatics.
          </p>
        </div>

        <a
          href={`https://wa.me/6281288882511?text=Halo%20Panitia%20SMA%20Genesis%20Medicare,%20saya%20${encodeURIComponent(submission.studentName)}%20dari%20${encodeURIComponent(submission.schoolOrigin)}%20telah%20menyelesaikan%20Try%20Out%20TKA%20SMP%20(Nilai%20BI:%20${submission.indonesianScore},%20Nilai%20MTK:%20${submission.mathScore})%20dan%20ingin%20berkonsultasi%20mengenai%20PPDB%20serta%20beasiswa.`}
          target="_blank"
          rel="noreferrer"
          className="w-full md:w-auto justify-center px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg flex items-center gap-2 shrink-0 transition-all cursor-pointer min-h-[44px]"
        >
          <Phone className="w-4 h-4" />
          <span>Hubungi Panitia PPDB (WhatsApp)</span>
        </a>
      </div>

      {/* 4. ACTIONS */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4">
        <button
          onClick={onBackToHome}
          className="px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        {settings.showScoreToStudents && (
          <button
            onClick={handlePrint}
            className="px-6 py-3 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Kartu Nilai Siswa</span>
          </button>
        )}
      </div>
    </div>
  );
};
