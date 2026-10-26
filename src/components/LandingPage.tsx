import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Cpu, 
  Sparkles, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Clock, 
  HelpCircle,
  Building2,
  Users
} from 'lucide-react';
import { AppSettings } from '../types';

interface LandingPageProps {
  settings: AppSettings;
  onStartExam: () => void;
  onOpenAdmin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ settings, onStartExam, onOpenAdmin }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>MEDTECH ARENA &bull; TRY OUT TKA SMP RESMI</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Tantang Potensimu di <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-transparent">MEDTECH ARENA</span> <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Menuju SMA Kedokteran &amp; Teknologi Modern
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Selamat datang di <strong>MEDTECH ARENA</strong>, simulasi Try Out Tes Kemampuan Akademik (TKA) Jenjang SMP resmi persembahan{' '}
            <strong className="text-white">{settings.schoolName || 'SMA Genesis Medicare'}</strong>. 
            Taklukkan 60 soal HOTS berbasis sistem CBT standar Pusmendik Kemendikbudristek dan raih beasiswa pendidikan impianmu!
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartExam}
              disabled={!settings.isExamActive}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl transition-all cursor-pointer ${
                settings.isExamActive
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>{settings.isExamActive ? 'Mulai Try Out Sekarang' : 'Ujian Sedang Non-Aktif'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#tentang-sekolah"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-base bg-slate-800/90 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Pelajari Profil Sekolah</span>
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 text-left">
            <div className="bg-slate-800/60 border border-slate-700/80 p-4 rounded-2xl">
              <div className="text-cyan-400 font-bold text-2xl sm:text-3xl">60 Soal</div>
              <div className="text-xs text-slate-400 font-medium mt-1">30 Bahasa Indonesia + 30 Matematika</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-4 rounded-2xl">
              <div className="text-amber-400 font-bold text-2xl sm:text-3xl">75 Menit / Sesi</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Sesi 1 (75m) + Jeda (2m) + Sesi 2 (75m)</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-4 rounded-2xl">
              <div className="text-emerald-400 font-bold text-2xl sm:text-3xl">CBT Pusmendik</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Tampilan Asli & Grid Soal</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-4 rounded-2xl">
              <div className="text-sky-400 font-bold text-2xl sm:text-3xl">Analisis Lengkap</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Rekomendasi Belajar Personal</div>
            </div>
          </div>
        </div>
      </section>

      {/* About SMA Genesis Medicare Section */}
      <section id="tentang-sekolah" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-cyan-600 font-bold text-sm tracking-widest uppercase">
            Mengenal SMA Genesis Medicare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pelopor Pendidikan Berbasis Kesehatan & Teknologi Modern
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Terletak strategis di Kota Depok, SMA Genesis Medicare didirikan dengan visi melahirkan generasi saintis, dokter, apoteker, dan inovator teknologi yang berkarakter dan berdaya saing global.
          </p>
        </div>

        {/* 3 Main Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors mb-6 shadow-sm">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Medical Science Pathway
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Program kurikulum khusus pengenalan dasar-dasar ilmu kedokteran, anatomi tubuh, farmasi herbal, serta bimbingan intensif persiapan tembus SNBP dan SNBT Fakultas Kedokteran (FK) perguruan tinggi negeri favorit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6 shadow-sm">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Health & Bio-Informatics
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Menggabungkan kecerdasan buatan, sains data medis, dan pemrograman komputer agar siswa mampu menciptakan inovasi aplikasi telemedisin, pengolahan citra rontgen, dan robotika kesehatan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-6 shadow-sm">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Character & Leadership
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pembinaan adab, nilai kepemimpinan, kerelawanan PMR aktif, serta membentuk kepribadian yang empati, jujur, santun, dan bertanggung jawab penuh kepada masyarakat.
            </p>
          </div>
        </div>

        {/* School Facilities & Advantages */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Fasilitas Kampus Modern
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Lingkungan Belajar Representatif & Interaktif
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                SMA Genesis Medicare dilengkapi dengan sarana laboratorium berstandar industri dan ruang kelas berbasis multimedia yang mendukung eksplorasi sains maksimal bagi seluruh siswa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Laboratorium Medis & Farmasi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Laboratorium Komputer & AI</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Perpustakaan Digital Terpadu</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Klinik & Ruang Praktik UKS</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Musala Sekolah yang Nyaman</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Area Olahraga & Ekstrakurikuler</span>
                </div>
              </div>
            </div>

            {/* Quick Action Card inside */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xl">
                  🎁
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Program Beasiswa Siswa Baru</h4>
                  <p className="text-xs text-slate-300">PPDB Tahun Ajaran 2026/2027</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hasil Try Out TKA SMP ini dapat digunakan sebagai salah satu dokumen portofolio pendaftaran untuk meraih beasiswa potongan uang pangkal hingga 100% di SMA Genesis Medicare.
              </p>
              <div className="pt-2">
                <button
                  onClick={onStartExam}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg cursor-pointer transition-all text-center"
                >
                  Ikuti Try Out & Rebut Beasiswa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBT Rules Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Alur & Format Ujian TKA SMP</h3>
              <p className="text-xs text-slate-500">Standar Sistem CBT Pushadap Kemendikbudristek</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">
                Langkah 1
              </span>
              <h4 className="font-bold text-slate-900 text-base">Registrasi Lengkap</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Isi identitas diri, asal sekolah, alamat rumah, nomor HP/WA siswa dan orang tua. Data ini digunakan untuk penerbitan sertifikat dan rekapitulasi nilai.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700">
                Langkah 2
              </span>
              <h4 className="font-bold text-slate-900 text-base">Pengerjaan 2 Sesi Berurutan</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ujian berlangsung dalam 2 sesi: Sesi 1 (Bahasa Indonesia No. 1–30) kemudian berlanjut ke Sesi 2 (Matematika No. 31–60). Total durasi 75 menit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700">
                Langkah 3
              </span>
              <h4 className="font-bold text-slate-900 text-base">Penyimpanan & Analisis Real-Time</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seluruh data jawaban tersimpan otomatis ke Firebase Firestore. Dapatkan analisis penguasaan sub-materi dan rekomendasi belajar personal.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={onStartExam}
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 cursor-pointer transition-all"
            >
              Mulai Pendaftaran Peserta Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
