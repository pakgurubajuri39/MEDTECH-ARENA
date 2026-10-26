import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Globe, Award, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';
import { AppSettings } from '../types';

interface FooterProps {
  settings: AppSettings;
  onStartExam: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onStartExam, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {settings.schoolName || 'SMA Genesis Medicare'}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sekolah Menengah Atas pelopor keunggulan bidang Ilmu Kedokteran (Medical Science), Farmasi, dan Teknologi Digital berlandaskan karakter akhlak mulia dan kepemimpinan global.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-900/40 text-cyan-300 border border-cyan-700/50">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                Terakreditasi Baik
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/40 text-emerald-300 border border-emerald-700/50">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Medical Pathway
              </span>
            </div>
          </div>

          {/* Col 2: Program Unggulan */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Program Unggulan
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Medical Science & Health Informatics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Kelas Intensif Masuk FK & PTN Top Indonesia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Laboratorium Medis, Farmasi & Komputer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Beasiswa Prestasi Akademik & Tahfidz</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Pengembangan Karakter & Kepemimpinan</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak & Alamat Sekolah */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Kontak & Lokasi Kampus
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>{settings.schoolAddress || 'Jl. Gas Alam No. 56, Curug, Kec. Cimanggis, Kota Depok, Jawa Barat 16453'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{settings.schoolPhone || '0812-8888-2511 / (021) 8774-1234'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{settings.schoolEmail || 'smagmdepok@gmail.com'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a 
                  href="https://genesismedicareschool.sch.id/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400 transition-colors underline"
                >
                  genesismedicareschool.sch.id
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Aksi Cepat & PPDB */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-850 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-cyan-400" />
              MEDTECH ARENA &bull; TKA SMP
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Daftarkan diri Anda untuk menguji kesiapan tes akademik masuk SMA unggulan dan peroleh sertifikat hasil analisis materi gratis!
            </p>
            <button
              onClick={onStartExam}
              className="w-full py-2.5 px-4 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md transition-all cursor-pointer"
            >
              Mulai Ujian Sekarang
            </button>
            <button
              onClick={onOpenAdmin}
              className="w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 hover:underline transition-colors block"
            >
              Masuk Dashboard Admin Sekolah
            </button>
          </div>
        </div>

        {/* Bottom copyright line with exact requested credit */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            &copy; {new Date().getFullYear()} {settings.schoolName || 'SMA Genesis Medicare'}. All rights reserved.
          </p>
          <p className="font-semibold text-cyan-400 tracking-wide text-center sm:text-right">
            @copyright by. Pak Guru Luky
          </p>
        </div>
      </div>
    </footer>
  );
};
