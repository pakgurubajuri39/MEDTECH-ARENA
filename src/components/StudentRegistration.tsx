import React, { useState } from 'react';
import { User, School, MapPin, Phone, ArrowRight, ArrowLeft, CheckCircle, AlertCircle, ShieldAlert } from 'lucide-react';
import { StudentProfile, AppSettings } from '../types';

interface StudentRegistrationProps {
  settings: AppSettings;
  onProceed: (profile: StudentProfile) => void;
  onBack: () => void;
}

export const StudentRegistration: React.FC<StudentRegistrationProps> = ({
  settings,
  onProceed,
  onBack
}) => {
  const [profile, setProfile] = useState<StudentProfile>({
    fullName: '',
    schoolOrigin: '',
    homeAddress: '',
    studentPhone: '',
    parentPhone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!profile.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    } else if (profile.fullName.trim().length < 3) {
      newErrors.fullName = 'Nama terlalu pendek (minimal 3 karakter).';
    }

    if (!profile.schoolOrigin.trim()) {
      newErrors.schoolOrigin = 'Asal sekolah SMP wajib diisi.';
    }

    if (!profile.homeAddress.trim()) {
      newErrors.homeAddress = 'Alamat rumah wajib diisi untuk pendataan wilayah.';
    }

    const phoneRegex = /^[0-9+\-\s()]{9,18}$/;
    if (!profile.studentPhone.trim()) {
      newErrors.studentPhone = 'Nomor HP/WhatsApp siswa wajib diisi.';
    } else if (!phoneRegex.test(profile.studentPhone.trim())) {
      newErrors.studentPhone = 'Format nomor HP tidak valid (minimal 10 digit angka).';
    }

    if (!profile.parentPhone.trim()) {
      newErrors.parentPhone = 'Nomor HP/WhatsApp orang tua wajib diisi.';
    } else if (!phoneRegex.test(profile.parentPhone.trim())) {
      newErrors.parentPhone = 'Format nomor HP orang tua tidak valid (minimal 10 digit angka).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onProceed(profile);
    }
  };

  const handleChange = (field: keyof StudentProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: keyof StudentProfile) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validate();
  };

  if (!settings.isExamActive) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 bg-white rounded-3xl border border-slate-200 shadow-md text-center space-y-4">
        <ShieldAlert className="w-16 h-16 text-amber-500 mx-auto" />
        <h2 className="text-2xl font-bold text-slate-800">Pendaftaran Ujian Belum Dibuka</h2>
        <p className="text-sm text-slate-600">
          Saat ini sesi Try Out TKA SMP sedang dinonaktifkan oleh administrator SMA Genesis Medicare. Silakan kembali lagi nanti atau hubungi panitia.
        </p>
        <button
          onClick={onBack}
          className="mt-4 px-6 py-2.5 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 text-sm"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              MEDTECH ARENA &bull; Formulir Peserta
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Paket Ujian: <strong className="text-white">Tipe {settings.activePacketType}</strong>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 tracking-tight">
            Registrasi Peserta MEDTECH ARENA
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            Try Out TKA Jenjang SMP diselenggarakan oleh {settings.schoolName || 'SMA Genesis Medicare'}. Mohon isi data diri dengan akurat.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Nama Lengkap Siswa <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Contoh: Muhammad Farhan Pratama"
                value={profile.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  errors.fullName
                    ? 'border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Asal Sekolah */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Asal Sekolah SMP / MTs <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <School className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Contoh: SMPN 1 Depok, SMPIT Darul Quran, dll."
                value={profile.schoolOrigin}
                onChange={(e) => handleChange('schoolOrigin', e.target.value)}
                onBlur={() => handleBlur('schoolOrigin')}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  errors.schoolOrigin
                    ? 'border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200'
                }`}
              />
            </div>
            {errors.schoolOrigin && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.schoolOrigin}
              </p>
            )}
          </div>

          {/* Alamat Rumah */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Alamat Rumah Lengkap <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <textarea
                rows={2}
                placeholder="Nama jalan, RT/RW, Kelurahan, Kecamatan, Kota"
                value={profile.homeAddress}
                onChange={(e) => handleChange('homeAddress', e.target.value)}
                onBlur={() => handleBlur('homeAddress')}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  errors.homeAddress
                    ? 'border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200'
                }`}
              />
            </div>
            {errors.homeAddress && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.homeAddress}
              </p>
            )}
          </div>

          {/* Grid: No HP Siswa & No HP Ortu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                No. HP / WhatsApp Siswa <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="0812xxxxxxxx"
                  value={profile.studentPhone}
                  onChange={(e) => handleChange('studentPhone', e.target.value)}
                  onBlur={() => handleBlur('studentPhone')}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    errors.studentPhone
                      ? 'border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-200'
                      : 'border-slate-300 bg-white text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200'
                  }`}
                />
              </div>
              {errors.studentPhone && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.studentPhone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                No. HP / WhatsApp Orang Tua <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="0813xxxxxxxx"
                  value={profile.parentPhone}
                  onChange={(e) => handleChange('parentPhone', e.target.value)}
                  onBlur={() => handleBlur('parentPhone')}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    errors.parentPhone
                      ? 'border-rose-400 bg-rose-50/40 text-slate-900 focus:ring-2 focus:ring-rose-200'
                      : 'border-slate-300 bg-white text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200'
                  }`}
                />
              </div>
              {errors.parentPhone && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.parentPhone}
                </p>
              )}
            </div>
          </div>

          {/* Privacy note */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>
              Data pendaftaran Anda aman dan digunakan semata-mata untuk verifikasi peserta, rekapitulasi nilai, serta penyampaian beasiswa SMA Genesis Medicare.
            </span>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-3 rounded-xl font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>

            <button
              type="submit"
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
            >
              <span>Lanjut ke Petunjuk Tes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
