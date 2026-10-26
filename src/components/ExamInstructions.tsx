import React, { useState } from 'react';
import { Clock, BookOpen, AlertTriangle, CheckSquare, ArrowRight, ArrowLeft, ShieldCheck, User } from 'lucide-react';
import { StudentProfile, AppSettings } from '../types';

interface ExamInstructionsProps {
  profile: StudentProfile;
  settings: AppSettings;
  onStartCbt: () => void;
  onBackToRegister: () => void;
}

export const ExamInstructions: React.FC<ExamInstructionsProps> = ({
  profile,
  settings,
  onStartCbt,
  onBackToRegister
}) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden space-y-6">
        {/* Banner Top */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>MEDTECH ARENA &bull; Petunjuk Pengerjaan Ujian</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            MEDTECH ARENA: TKA SMP
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            SMA Genesis Medicare &bull; Sistem CBT Pusmendik / Pushadap Kemendikbudristek
          </p>
        </div>

        <div className="px-6 sm:px-8 pb-8 space-y-6">
          {/* Candidate Card Summary */}
          <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-base">{profile.fullName}</div>
                <div className="text-xs text-slate-600 font-medium">{profile.schoolOrigin}</div>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-cyan-800 border border-cyan-300 shadow-2xs">
                Paket Soal: Tipe {settings.activePacketType}
              </span>
            </div>
          </div>

          {/* Test Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-xl font-extrabold text-slate-900">60 Soal</div>
              <div className="text-xs text-slate-500 font-medium">30 B. Indo + 30 Matematika</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xl font-extrabold text-slate-900">75 Menit / Sesi</div>
              <div className="text-xs text-slate-500 font-medium">Sesi 1 (75m) + Jeda (2m) + Sesi 2 (75m)</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xl font-extrabold text-slate-900">Skor Terpisah</div>
              <div className="text-xs text-slate-500 font-medium">Nilai B. Indo & Nilai MTK Masing-masing</div>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Tata Tertib & Panduan Penggunaan Sistem CBT
            </h4>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2.5 leading-relaxed">
              <p className="flex items-start gap-2">
                <strong className="text-cyan-700 font-bold">1.</strong>
                <span>
                  <strong>Pengerjaan Sesi 1 (Bahasa Indonesia):</strong> Soal nomor 1 s.d. 30 adalah mata pelajaran Bahasa Indonesia dengan durasi waktu <strong>75 menit</strong>.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <strong className="text-cyan-700 font-bold">2.</strong>
                <span>
                  <strong>Soal Matematika Terkunci:</strong> Soal nomor 31 s.d. 60 (Matematika) terkunci dan <em>hanya akan terbuka</em> setelah Anda menyelesaikan dan mengumpulkan Sesi 1 Bahasa Indonesia.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <strong className="text-cyan-700 font-bold">3.</strong>
                <span>
                  <strong>Jeda Istirahat 2 Menit:</strong> Setelah mengakhiri Sesi 1, sistem menyediakan jeda istirahat relaksasi selama <strong>2 menit</strong> sebelum memulai Sesi 2 Matematika (Anda juga dapat mengklik lanjut kapan saja).
                </span>
              </p>
              <p className="flex items-start gap-2">
                <strong className="text-cyan-700 font-bold">4.</strong>
                <span>
                  <strong>Pengerjaan Sesi 2 (Matematika):</strong> Soal nomor 31 s.d. 60 memiliki durasi waktu terpisah tersendiri selama <strong>75 menit</strong>.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <strong className="text-cyan-700 font-bold">5.</strong>
                <span>
                  <strong>Hasil & Skor Terpisah:</strong> Skor akhir dihitung dan diterbitkan secara mandiri untuk masing-masing mata pelajaran (Nilai Bahasa Indonesia & Nilai Matematika).
                </span>
              </p>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3">
            <input
              type="checkbox"
              id="agree-rules"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="agree-rules" className="text-xs text-amber-900 font-medium cursor-pointer leading-normal select-none">
              Saya telah membaca seluruh petunjuk pengerjaan dengan seksama, menyetujui tata tertib, dan menyatakan siap memulai ujian CBT secara jujur dan mandiri.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              onClick={onBackToRegister}
              className="px-5 py-3 rounded-xl font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ubah Identitas</span>
            </button>

            <button
              onClick={onStartCbt}
              disabled={!agreed}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all cursor-pointer min-h-[44px] ${
                agreed
                  ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-emerald-600/30 hover:scale-102'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Mulai Ujian Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
