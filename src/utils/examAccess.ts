import { AppSettings } from '../types';

export function toDatetimeLocal(isoOrDateStr?: string): string {
  if (!isoOrDateStr) return '';
  const d = new Date(isoOrDateStr);
  if (isNaN(d.getTime())) return '';
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatIndonesianDateTime(isoOrDateStr?: string): string {
  if (!isoOrDateStr) return '-';
  const d = new Date(isoOrDateStr);
  if (isNaN(d.getTime())) return '-';
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) + ' WIB';
}

export interface ExamAccessStatus {
  isOpen: boolean;
  statusLabel: string;
  badgeText: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
  detailMessage: string;
}

/**
 * Memeriksa apakah ujian Try Out saat ini dapat diakses oleh siswa:
 * 1. Mode Manual: berdasarkan isExamActive (diaktifkan langsung atau ditutup langsung)
 * 2. Mode Terjadwal (Scheduled): otomatis aktif jika waktu sekarang berada di antara examOpenAt dan examCloseAt
 */
export function getExamAccessStatus(settings: AppSettings, now = new Date()): ExamAccessStatus {
  const mode = settings.examAccessMode || 'manual';

  if (mode === 'manual') {
    if (settings.isExamActive) {
      return {
        isOpen: true,
        statusLabel: 'Aktif (Manual)',
        badgeText: 'Try Out Terbuka',
        badgeColor: 'emerald',
        detailMessage: 'Ujian diaktifkan secara langsung oleh panitia.'
      };
    }
    return {
      isOpen: false,
      statusLabel: 'Ditutup (Manual)',
      badgeText: 'Try Out Ditutup',
      badgeColor: 'rose',
      detailMessage: 'Ujian dinonaktifkan oleh panitia SMA Genesis Medicare.'
    };
  }

  // Mode Terjadwal
  const nowMs = now.getTime();
  const openMs = settings.examOpenAt ? new Date(settings.examOpenAt).getTime() : 0;
  const closeMs = settings.examCloseAt ? new Date(settings.examCloseAt).getTime() : 0;

  // Kasus 1: Belum memasuki waktu buka
  if (openMs && nowMs < openMs) {
    return {
      isOpen: false,
      statusLabel: 'Terjadwal (Belum Buka)',
      badgeText: `Buka ${formatIndonesianDateTime(settings.examOpenAt)}`,
      badgeColor: 'amber',
      detailMessage: `Sesi pendaftaran dan ujian akan dibuka secara otomatis pada ${formatIndonesianDateTime(settings.examOpenAt)}.`
    };
  }

  // Kasus 2: Telah melewati waktu tutup
  if (closeMs && nowMs > closeMs) {
    return {
      isOpen: false,
      statusLabel: 'Terjadwal (Telah Berakhir)',
      badgeText: 'Jadwal Ujian Selesai',
      badgeColor: 'rose',
      detailMessage: `Akses ujian telah resmi ditutup pada ${formatIndonesianDateTime(settings.examCloseAt)}.`
    };
  }

  // Kasus 3: Sedang berada dalam rentang jadwal aktif
  return {
    isOpen: true,
    statusLabel: 'Aktif Otomatis (Sesuai Jadwal)',
    badgeText: closeMs ? `Dibuka s.d ${formatIndonesianDateTime(settings.examCloseAt)}` : 'Try Out Terbuka',
    badgeColor: 'emerald',
    detailMessage: closeMs
      ? `Ujian sedang berlangsung dan akan ditutup otomatis pada ${formatIndonesianDateTime(settings.examCloseAt)}.`
      : 'Ujian sedang dibuka sesuai jadwal.'
  };
}

export interface ScoreReleaseStatus {
  isReleased: boolean;
  modeLabel: string;
  badgeText: string;
  badgeColor: 'emerald' | 'amber' | 'slate';
  detailMessage: string;
  releaseTimeFormatted?: string;
}

/**
 * Memeriksa apakah nilai Try Out saat ini boleh ditampilkan langsung ke siswa:
 * 1. Mode Immediate (Langsung): nilai langsung keluar seketika
 * 2. Mode Scheduled (Terjadwal): nilai keluar otomatis setelah tanggal & jam rilis tercapai
 * 3. Mode Hidden (Sembunyikan): nilai tidak ditampilkan ke siswa, hanya direkapitulasi admin
 */
export function getScoreReleaseStatus(settings: AppSettings, now = new Date()): ScoreReleaseStatus {
  const mode = settings.scoreReleaseMode || (settings.showScoreToStudents ? 'immediate' : 'hidden');

  if (mode === 'immediate') {
    return {
      isReleased: true,
      modeLabel: 'Langsung Keluar',
      badgeText: 'Nilai Langsung Tampil',
      badgeColor: 'emerald',
      detailMessage: 'Siswa langsung dapat melihat nilai ujian begitu menyelesaikan tes.'
    };
  }

  if (mode === 'hidden') {
    return {
      isReleased: false,
      modeLabel: 'Sembunyikan Nilai',
      badgeText: 'Nilai Dirahasiakan',
      badgeColor: 'slate',
      detailMessage: 'Nilai hanya direkapitulasi oleh panitia dan tidak ditampilkan kepada siswa di web.'
    };
  }

  // Mode Terjadwal (Scheduled)
  const nowMs = now.getTime();
  const releaseMs = settings.scoreReleaseAt ? new Date(settings.scoreReleaseAt).getTime() : 0;

  if (releaseMs && nowMs >= releaseMs) {
    return {
      isReleased: true,
      modeLabel: 'Terjadwal (Sudah Dirilis)',
      badgeText: 'Nilai Telah Dirilis',
      badgeColor: 'emerald',
      detailMessage: `Nilai telah dirilis secara resmi sejak ${formatIndonesianDateTime(settings.scoreReleaseAt)}.`,
      releaseTimeFormatted: formatIndonesianDateTime(settings.scoreReleaseAt)
    };
  }

  return {
    isReleased: false,
    modeLabel: 'Terjadwal (Menunggu Rilis)',
    badgeText: `Rilis ${formatIndonesianDateTime(settings.scoreReleaseAt)}`,
    badgeColor: 'amber',
    detailMessage: `Hasil nilai ujian akan diumumkan secara serentak pada ${formatIndonesianDateTime(settings.scoreReleaseAt)}.`,
    releaseTimeFormatted: formatIndonesianDateTime(settings.scoreReleaseAt)
  };
}
