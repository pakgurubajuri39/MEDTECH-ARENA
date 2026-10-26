import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Settings, 
  Download, 
  Search, 
  Filter, 
  BarChart3, 
  Phone, 
  Trash2, 
  Plus, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  FileSpreadsheet, 
  Eye, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  X,
  ExternalLink,
  Save,
  GraduationCap,
  School,
  Printer,
  FileCode,
  FileText
} from 'lucide-react';
import { ExamSubmission, AppSettings, AdminAccount, PacketType } from '../types';

interface AdminDashboardProps {
  adminUser: { email: string; role: 'super_admin' | 'admin'; name: string };
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  submissions: ExamSubmission[];
  adminAccounts: AdminAccount[];
  onAddAdmin: (email: string, name: string) => void;
  onDeleteAdmin: (id: string) => void;
  onDeleteSubmission?: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  adminUser,
  settings,
  onUpdateSettings,
  submissions,
  adminAccounts,
  onAddAdmin,
  onDeleteAdmin,
  onDeleteSubmission
}) => {
  const [activeTab, setActiveTab] = useState<'rekap' | 'analytics' | 'settings' | 'admins' | 'deploy'>('rekap');

  // Search & Filter state for Marketing Table
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchoolFilter, setSelectedSchoolFilter] = useState('ALL');
  const [selectedPacketFilter, setSelectedPacketFilter] = useState('ALL');

  // Modal State for Individual Student Analysis
  const [inspectingStudent, setInspectingStudent] = useState<ExamSubmission | null>(null);

  // Modal State for Official Printable Report Card
  const [printingStudent, setPrintingStudent] = useState<ExamSubmission | null>(null);

  // New Admin input state (Super Admin only)
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminName, setNewAdminName] = useState('');

  // Editable settings local state
  const [editSchoolName, setEditSchoolName] = useState(settings.schoolName);
  const [editSchoolAddress, setEditSchoolAddress] = useState(settings.schoolAddress);
  const [editSchoolPhone, setEditSchoolPhone] = useState(settings.schoolPhone);
  const [editSchoolEmail, setEditSchoolEmail] = useState(settings.schoolEmail);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const isSuperAdmin = adminUser.role === 'super_admin';

  // Extract unique school list for filtering
  const uniqueSchools = useMemo(() => {
    const set = new Set<string>();
    submissions.forEach(s => {
      if (s.schoolOrigin) set.add(s.schoolOrigin);
    });
    return Array.from(set).sort();
  }, [submissions]);

  // Filtered submissions
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(s => {
      const matchSchool = selectedSchoolFilter === 'ALL' || s.schoolOrigin === selectedSchoolFilter;
      const matchPacket = selectedPacketFilter === 'ALL' || s.packetType === selectedPacketFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        s.studentName.toLowerCase().includes(query) ||
        s.schoolOrigin.toLowerCase().includes(query) ||
        s.studentPhone.includes(query) ||
        s.parentPhone.includes(query);
      return matchSchool && matchPacket && matchQuery;
    });
  }, [submissions, selectedSchoolFilter, selectedPacketFilter, searchQuery]);

  // Analytics aggregates (separating subject averages)
  const analyticsSummary = useMemo(() => {
    if (submissions.length === 0) {
      return { total: 0, avgIndo: 0, avgMath: 0, topSchools: [] };
    }

    const total = submissions.length;
    let sumIndo = 0;
    let sumMath = 0;
    const schoolCounts: Record<string, number> = {};

    submissions.forEach(s => {
      sumIndo += s.indonesianScore;
      sumMath += s.mathScore;
      schoolCounts[s.schoolOrigin] = (schoolCounts[s.schoolOrigin] || 0) + 1;
    });

    const topSchools = Object.entries(schoolCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return {
      total,
      avgIndo: Math.round(sumIndo / total),
      avgMath: Math.round(sumMath / total),
      topSchools
    };
  }, [submissions]);

  // Item 8 & 2: Direct print student result sheet
  const handleDirectPrintStudent = (student: ExamSubmission) => {
    setPrintingStudent(student);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredSubmissions.length === 0) {
      alert('Tidak ada data peserta untuk diekspor.');
      return;
    }

    const headers = [
      'No',
      'Nama Siswa',
      'Asal Sekolah SMP',
      'Alamat Rumah',
      'No HP Siswa (WA)',
      'No HP Orang Tua (WA)',
      'Paket Soal',
      'Nilai B. Indonesia (0-100)',
      'Nilai Matematika (0-100)',
      'Jumlah Benar',
      'Jumlah Salah',
      'Jumlah Kosong',
      'Waktu Selesai'
    ];

    const rows = filteredSubmissions.map((s, idx) => [
      idx + 1,
      `"${s.studentName.replace(/"/g, '""')}"`,
      `"${s.schoolOrigin.replace(/"/g, '""')}"`,
      `"${s.homeAddress.replace(/"/g, '""')}"`,
      `'${s.studentPhone}`,
      `'${s.parentPhone}`,
      s.packetType,
      s.indonesianScore,
      s.mathScore,
      s.totalCorrect,
      s.totalWrong,
      s.totalBlank,
      `"${s.completedAt}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Rekap_TryOut_TKA_SMP_GenesisMedicare_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to Standalone HTML Report (Item 7 Requirement)
  const handleExportHTML = () => {
    if (filteredSubmissions.length === 0) {
      alert('Tidak ada data peserta untuk diekspor ke HTML.');
      return;
    }

    const reportDate = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Rekapitulasi Nilai MEDTECH ARENA (TKA SMP) - ${settings.schoolName || 'SMA Genesis Medicare'}</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 30px; color: #1e293b; background: #fff; }
    .header { text-align: center; border-bottom: 3px double #0f172a; padding-bottom: 16px; margin-bottom: 24px; }
    .school-title { font-size: 22px; font-weight: 800; color: #0284c7; letter-spacing: 0.5px; margin: 0; }
    .doc-title { font-size: 16px; font-weight: 700; color: #0f172a; margin: 6px 0 2px 0; }
    .arena-badge { display: inline-block; background: #0284c7; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 800; margin-bottom: 4px; }
    .school-info { font-size: 12px; color: #64748b; margin: 0; }
    .stats-grid { display: flex; gap: 16px; margin-bottom: 24px; }
    .stat-card { flex: 1; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; text-align: center; }
    .stat-val { font-size: 24px; font-weight: 800; color: #0369a1; }
    .stat-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; }
    table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 30px; }
    th { background: #0f172a; color: #fff; padding: 8px 10px; text-align: left; }
    td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
    tr:nth-child(even) { background: #f8fafc; }
    .score-badge { font-weight: 800; color: #0284c7; }
    .footer-sign { display: flex; justify-content: space-between; margin-top: 40px; font-size: 12px; }
    @media print {
      body { margin: 10px; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 20px; text-align: right;">
    <button onclick="window.print()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
      🖨️ Cetak Rekap HTML Ini
    </button>
  </div>

  <div class="header">
    <h1 class="school-title">${settings.schoolName || 'SMA GENESIS MEDICARE'}</h1>
    <h2 class="doc-title">REKAPITULASI RESMI HASIL TRY OUT TES KEMAMPUAN AKADEMIK (TKA) SMP</h2>
    <p class="school-info">${settings.schoolAddress || 'Jl. Gas Alam No. 56, Cimanggis, Depok'} &bull; Telp: ${settings.schoolPhone || '0812-8888-2511'}</p>
    <p class="school-info">Tanggal Penerbitan: ${reportDate}</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-val">${filteredSubmissions.length}</div>
      <div class="stat-label">Total Peserta</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${analyticsSummary.avgIndo} / 100</div>
      <div class="stat-label">Rata-Rata Bahasa Indonesia</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${analyticsSummary.avgMath} / 100</div>
      <div class="stat-label">Rata-Rata Matematika</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 30px; text-align: center;">No</th>
        <th>Nama Siswa</th>
        <th>Asal Sekolah SMP</th>
        <th>No. HP Siswa</th>
        <th>No. HP Orang Tua</th>
        <th style="text-align: center;">Paket</th>
        <th style="text-align: center;">Nilai B. Indo</th>
        <th style="text-align: center;">Nilai MTK</th>
        <th>Waktu Selesai</th>
      </tr>
    </thead>
    <tbody>
      ${filteredSubmissions.map((s, idx) => `
        <tr>
          <td style="text-align: center;">${idx + 1}</td>
          <td><strong>${s.studentName}</strong><br><span style="color:#64748b; font-size:10px;">${s.homeAddress}</span></td>
          <td>${s.schoolOrigin}</td>
          <td>${s.studentPhone}</td>
          <td>${s.parentPhone}</td>
          <td style="text-align: center;">${s.packetType}</td>
          <td style="text-align: center;" class="score-badge">${s.indonesianScore}</td>
          <td style="text-align: center;" class="score-badge">${s.mathScore}</td>
          <td>${s.completedAt ? new Date(s.completedAt).toLocaleString('id-ID') : '-'}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="footer-sign">
    <div>
      <p>Mengetahui,</p>
      <p style="margin-top: 50px; font-weight: bold;">Kepala Sekolah SMA Genesis Medicare</p>
    </div>
    <div style="text-align: right;">
      <p>Depok, ${reportDate}</p>
      <p style="margin-top: 50px; font-weight: bold;">Ketua Panitia Seleksi &amp; PPDB</p>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Rekap_TryOut_TKA_SMP_GenesisMedicare_${new Date().toISOString().slice(0, 10)}.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings({
      schoolName: editSchoolName,
      schoolAddress: editSchoolAddress,
      schoolPhone: editSchoolPhone,
      schoolEmail: editSchoolEmail
    });
    setSaveSuccessMsg('Identitas sekolah berhasil diperbarui!');
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  const handleCreateAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail.trim() || !newAdminName.trim()) return;
    onAddAdmin(newAdminEmail.trim(), newAdminName.trim());
    setNewAdminEmail('');
    setNewAdminName('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Admin Welcome Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {isSuperAdmin ? '🛡️ Super Administrator' : '👤 Staf Administrator'}
            </span>
            <span className="text-xs text-slate-400">&bull; {adminUser.email}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Dashboard MEDTECH ARENA &bull; Try Out &amp; Marketing
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Pusat kendali ujian CBT TKA SMP, rekapitulasi data pendaftar, dan analisis materi untuk SMA Genesis Medicare.
          </p>
        </div>

        {/* Quick Exam Status Toggles */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 space-y-1">
            <div className="text-[10px] uppercase font-bold text-slate-400">Status Ujian</div>
            <button
              onClick={() => onUpdateSettings({ isExamActive: !settings.isExamActive })}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                settings.isExamActive
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                  : 'bg-rose-500 text-white hover:bg-rose-400'
              }`}
            >
              {settings.isExamActive ? '● AKTIF (Buka)' : '○ NON-AKTIF (Tutup)'}
            </button>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 space-y-1">
            <div className="text-[10px] uppercase font-bold text-slate-400">Paket Soal Aktif</div>
            <select
              value={settings.activePacketType}
              onChange={(e) => onUpdateSettings({ activePacketType: e.target.value as PacketType })}
              className="bg-slate-900 text-white text-xs font-bold py-1 px-2.5 rounded-lg border border-slate-600 focus:outline-hidden cursor-pointer"
            >
              <option value="A">Paket Tipe A</option>
              <option value="B">Paket Tipe B</option>
              <option value="C">Paket Tipe C</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Horizontally scrollable on mobile/tablet, wrap on desktop */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap">
        <button
          onClick={() => setActiveTab('rekap')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 min-h-[40px] ${
            activeTab === 'rekap'
              ? 'bg-blue-700 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Data Master Peserta ({filteredSubmissions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 min-h-[40px] ${
            activeTab === 'analytics'
              ? 'bg-blue-700 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Statistik Nilai Mapel</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 min-h-[40px] ${
            activeTab === 'settings'
              ? 'bg-blue-700 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Pengaturan Try Out &amp; Sekolah</span>
        </button>

        {isSuperAdmin && (
          <button
            onClick={() => setActiveTab('admins')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 min-h-[40px] ${
              activeTab === 'admins'
                ? 'bg-blue-700 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Manajemen Admin ({adminAccounts.length})</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('deploy')}
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 min-h-[40px] ${
            activeTab === 'deploy'
              ? 'bg-blue-700 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Panduan Vercel &amp; Firebase</span>
        </button>
      </div>

      {/* TAB 1: DATA MASTER PESERTA */}
      {activeTab === 'rekap' && (
        <div className="space-y-6">
          {/* Filter Bar & Export Actions (Excel & HTML) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[200px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Cari nama siswa, sekolah, atau nomor WA..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              {/* School Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500 shrink-0" />
                <select
                  value={selectedSchoolFilter}
                  onChange={(e) => setSelectedSchoolFilter(e.target.value)}
                  className="py-2.5 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 focus:outline-hidden cursor-pointer"
                >
                  <option value="ALL">Semua Asal Sekolah ({submissions.length})</option>
                  {uniqueSchools.map(sch => (
                    <option key={sch} value={sch}>{sch}</option>
                  ))}
                </select>
              </div>

              {/* Packet Filter */}
              <select
                value={selectedPacketFilter}
                onChange={(e) => setSelectedPacketFilter(e.target.value)}
                className="py-2.5 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 focus:outline-hidden cursor-pointer"
              >
                <option value="ALL">Semua Paket</option>
                <option value="A">Paket Tipe A</option>
                <option value="B">Paket Tipe B</option>
                <option value="C">Paket Tipe C</option>
              </select>
            </div>

            {/* Export & Print Actions (Direct Print, HTML Rekap & CSV) */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white shadow-md flex items-center gap-2 shrink-0 cursor-pointer transition-all"
                title="Cetak Langsung Tabel Rekapitulasi Data Siswa"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Cetak Rekap Tabel</span>
              </button>

              <button
                onClick={handleExportHTML}
                className="px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-blue-700 hover:bg-blue-600 text-white shadow-md flex items-center gap-2 shrink-0 cursor-pointer transition-all"
                title="Download Dokumen Rekapitulasi Berformat HTML Lengkap"
              >
                <FileCode className="w-4 h-4" />
                <span>Rekap Format HTML</span>
              </button>

              <button
                onClick={handleExportCSV}
                className="px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-2 shrink-0 cursor-pointer transition-all"
                title="Export ke Format CSV / Excel"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export CSV/Excel</span>
              </button>
            </div>
          </div>

          {/* Master Table with Separated Subject Scores */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="text-[11px] text-slate-500 px-4 py-2 sm:hidden flex items-center gap-1.5 bg-slate-50 border-b border-slate-200">
              <span>👉</span>
              <span>Geser tabel ke samping untuk melihat seluruh data peserta &amp; cetak</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 w-12 text-center">No</th>
                    <th className="py-3.5 px-4">Nama Siswa</th>
                    <th className="py-3.5 px-4">Asal Sekolah</th>
                    <th className="py-3.5 px-4">No. HP Siswa</th>
                    <th className="py-3.5 px-4">No. HP Orang Tua</th>
                    <th className="py-3.5 px-4 text-center">Paket</th>
                    <th className="py-3.5 px-4 text-center bg-blue-50/50 text-blue-900">Nilai B. Indonesia</th>
                    <th className="py-3.5 px-4 text-center bg-cyan-50/50 text-cyan-900">Nilai Matematika</th>
                    <th className="py-3.5 px-4 text-right">Aksi &amp; Cetak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {filteredSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-12 text-center text-slate-400">
                        Tidak ada data siswa yang cocok dengan filter.
                      </td>
                    </tr>
                  ) : (
                    filteredSubmissions.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-cyan-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center text-slate-400 font-bold">{idx + 1}</td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-sm">{s.studentName}</div>
                          <div className="text-[11px] text-slate-400 truncate max-w-[200px]">{s.homeAddress}</div>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-800">
                          {s.schoolOrigin}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px]">
                          {s.studentPhone}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px]">
                          {s.parentPhone}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-100 text-slate-700 border border-slate-200">
                            {s.packetType}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center bg-blue-50/30">
                          <span className="px-2.5 py-1 rounded-lg font-black text-xs bg-blue-100 text-blue-800">
                            {s.indonesianScore}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center bg-cyan-50/30">
                          <span className="px-2.5 py-1 rounded-lg font-black text-xs bg-cyan-100 text-cyan-800">
                            {s.mathScore}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* WhatsApp follow-up */}
                            <a
                              href={`https://wa.me/${s.studentPhone.replace(/^0/, '62').replace(/[^0-9]/g, '')}?text=Halo%20Ananda%20${encodeURIComponent(s.studentName)},%20selamat%20atas%20partisipasi%20Anda%20dalam%20Try%20Out%20TKA%20SMP%20SMA%20Genesis%20Medicare.%20Perolehan%20Nilai%20B.%20Indonesia:%20${s.indonesianScore},%20Nilai%20Matematika:%20${s.mathScore}.%20Apakah%20Anda%20berminat%20mengkonsultasikan%20program%20beasiswa%20kelas%20kedokteran%20kami?`}
                              target="_blank"
                              rel="noreferrer"
                              title="Chat WhatsApp Siswa"
                              className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>

                            {/* Detail inspection */}
                            <button
                              onClick={() => setInspectingStudent(s)}
                              title="Lihat Detail Analisis Sub-Materi"
                              className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-[11px] font-bold flex items-center gap-1 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Detail</span>
                            </button>

                            {/* Item 8 & User Request 2: Cetak Hasil Peserta Langsung */}
                            <button
                              onClick={() => handleDirectPrintStudent(s)}
                              title="Cetak Langsung Lembar Hasil Peserta Ini"
                              className="px-2.5 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-[11px] font-bold flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                            >
                              <Printer className="w-3.5 h-3.5" />
                              <span>Cetak Langsung</span>
                            </button>

                            {/* Delete submission (Super Admin) */}
                            {isSuperAdmin && onDeleteSubmission && (
                              <button
                                onClick={() => {
                                  if (confirm(`Hapus data ${s.studentName}?`)) {
                                    onDeleteSubmission(s.id);
                                  }
                                }}
                                title="Hapus Data"
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STATISTIK NILAI MAPEL */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Peserta Terdaftar</span>
              <div className="text-3xl font-black text-slate-900">{analyticsSummary.total} Siswa</div>
              <p className="text-xs text-slate-400">SMP di wilayah Depok &amp; sekitarnya</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase">Rata-Rata Bahasa Indonesia</span>
              <div className="text-3xl font-black text-blue-800">{analyticsSummary.avgIndo} / 100</div>
              <p className="text-xs text-slate-400">Kemampuan literasi &amp; pemahaman teks</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs font-bold text-cyan-600 uppercase">Rata-Rata Matematika</span>
              <div className="text-3xl font-black text-cyan-800">{analyticsSummary.avgMath} / 100</div>
              <p className="text-xs text-slate-400">Kemampuan numerasi &amp; penalaran HOTS</p>
            </div>
          </div>

          {/* Top Schools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Top 5 Asal Sekolah Peserta</h3>
                  <p className="text-xs text-slate-500">Basis sekolah peserta terbanyak untuk sosialisasi PPDB</p>
                </div>
                <School className="w-5 h-5 text-blue-700" />
              </div>

              <div className="space-y-3">
                {analyticsSummary.topSchools.map(([school, count], idx) => {
                  const percentage = Math.round((count / (analyticsSummary.total || 1)) * 100);
                  return (
                    <div key={school} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span>{idx + 1}. {school}</span>
                        <span className="text-blue-700">{count} siswa ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick action export report */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-6 sm:p-8 rounded-3xl text-white space-y-4 shadow-lg flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  Laporan Hasil Try Out
                </span>
                <h3 className="text-xl font-bold mt-2">Cetak Dokumen Rekapitulasi Lengkap</h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Unduh seluruh daftar nilai peserta dalam format HTML mandiri yang siap diprint atau dikirimkan ke pimpinan yayasan SMA Genesis Medicare.
                </p>
              </div>

              <button
                onClick={handleExportHTML}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <FileCode className="w-4 h-4" />
                <span>Unduh Rekap Format HTML Resmi</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PENGATURAN TRY OUT & IDENTITAS SEKOLAH */}
      {activeTab === 'settings' && (
        <div className="max-w-4xl space-y-8">
          {saveSuccessMsg && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

          {/* Form Identitas Sekolah */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Identitas Sekolah &amp; Profil Aplikasi</h3>
                <p className="text-xs text-slate-500">Data ini tampil pada kop surat laporan, landing page, dan footer</p>
              </div>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Sekolah</label>
                <input
                  type="text"
                  value={editSchoolName}
                  onChange={(e) => setEditSchoolName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Alamat Kampus</label>
                <textarea
                  rows={2}
                  value={editSchoolAddress}
                  onChange={(e) => setEditSchoolAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">No. Telepon / WhatsApp Panitia</label>
                  <input
                    type="text"
                    value={editSchoolPhone}
                    onChange={(e) => setEditSchoolPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Resmi</label>
                  <input
                    type="email"
                    value={editSchoolEmail}
                    onChange={(e) => setEditSchoolEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-blue-700 hover:bg-blue-600 text-white shadow-md flex items-center gap-2 cursor-pointer transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan Identitas</span>
              </button>
            </form>
          </div>

          {/* Toggle Visibilitas Nilai & Status Ujian */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Kendali Try Out Siswa</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Status Akses Try Out</div>
                  <div className="text-xs text-slate-500">Jika dimatikan, siswa baru tidak dapat memulai tes CBT</div>
                </div>
                <button
                  onClick={() => onUpdateSettings({ isExamActive: !settings.isExamActive })}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    settings.isExamActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {settings.isExamActive ? 'Aktif (Terbuka)' : 'Non-Aktif (Ditutup)'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Tampilkan Nilai Langsung ke Siswa</div>
                  <div className="text-xs text-slate-500">
                    Bila dimatikan, siswa hanya melihat notifikasi selesai dan nilai hanya direkapitulasi oleh panitia
                  </div>
                </div>
                <button
                  onClick={() => onUpdateSettings({ showScoreToStudents: !settings.showScoreToStudents })}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    settings.showScoreToStudents
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {settings.showScoreToStudents ? 'Tampilkan Nilai' : 'Sembunyikan Nilai'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Tipe Paket Soal yang Digunakan</div>
                  <div className="text-xs text-slate-500">Pilih antara Paket A, Paket B, atau Paket C (masing-masing 60 butir soal)</div>
                </div>
                <div className="flex items-center gap-1.5">
                  {(['A', 'B', 'C'] as PacketType[]).map((pkt) => (
                    <button
                      key={pkt}
                      onClick={() => onUpdateSettings({ activePacketType: pkt })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        settings.activePacketType === pkt
                          ? 'bg-blue-700 text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      Paket {pkt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MANAJEMEN AKUN ADMIN */}
      {activeTab === 'admins' && isSuperAdmin && (
        <div className="max-w-4xl space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Tambah Akun Staf Administrator</h3>
              <p className="text-xs text-slate-500">
                Staf admin biasa hanya memiliki hak akses untuk memantau, memfilter, dan mengunduh rekap nilai.
              </p>
            </div>

            <form onSubmit={handleCreateAdmin} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Nama Staf (contoh: Staf Marketing)"
                value={newAdminName}
                onChange={(e) => setNewAdminName(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                required
              />
              <input
                type="email"
                placeholder="Email Staf (contoh: staf@genesismedicareschool.sch.id)"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Admin</span>
              </button>
            </form>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-700 uppercase">
              Daftar Akun Administrator Terdaftar
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    👑
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">smagmdepok@gmail.com</div>
                    <div className="text-xs text-slate-500">Super Administrator (Master Akun)</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 text-amber-800">
                  SUPER ADMIN
                </span>
              </div>

              {adminAccounts.map((adm) => (
                <div key={adm.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{adm.name}</div>
                      <div className="text-xs text-slate-500">{adm.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      ADMIN BIASA
                    </span>
                    <button
                      onClick={() => onDeleteAdmin(adm.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Hapus Akun Admin"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: PANDUAN DEPLOYMENT VERCEL & FIREBASE */}
      {activeTab === 'deploy' && (
        <div className="max-w-4xl space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
                Dokumentasi Teknis
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                Panduan Deployment ke Vercel &amp; Firebase
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Langkah-langkah cepat mempublikasikan aplikasi web ini ke domain publik melalui Vercel.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">Langkah 1: Setup Repository Git</h4>
                <p>Push folder proyek ini ke GitHub atau GitLab repository Anda.</p>
                <code className="block bg-slate-900 text-emerald-400 p-3 rounded-xl font-mono text-xs">
                  git init<br />
                  git add .<br />
                  git commit -m "Initial commit Try Out TKA SMP Genesis Medicare"<br />
                  git push -u origin main
                </code>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">Langkah 2: Environment Variables di Vercel</h4>
                <p>Pastikan variabel lingkungan Firebase disalin dari file <code className="bg-slate-200 px-1 rounded">.env.local</code> ke menu Environment Variables di dashboard Vercel.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* ITEM 5: MODAL DETAIL ANALISIS SUB-MATERI (TABEL & GRAFIK)      */}
      {/* ============================================================== */}
      {inspectingStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col animate-in zoom-in-95">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  Laporan Individu Peserta
                </span>
                <h3 className="text-xl font-bold mt-1">{inspectingStudent.studentName}</h3>
                <p className="text-xs text-slate-300">{inspectingStudent.schoolOrigin} &bull; Paket {inspectingStudent.packetType}</p>
              </div>
              <button
                onClick={() => setInspectingStudent(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Score Snapshot (Separated Subjects) */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="text-xs text-blue-700 font-bold uppercase">Nilai Bahasa Indonesia</div>
                  <div className="text-3xl font-black text-blue-800 mt-1">{inspectingStudent.indonesianScore} / 100</div>
                  <div className="text-[11px] text-slate-500 mt-1">30 Soal Literasi Teks</div>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <div className="text-xs text-cyan-700 font-bold uppercase">Nilai Matematika</div>
                  <div className="text-3xl font-black text-cyan-800 mt-1">{inspectingStudent.mathScore} / 100</div>
                  <div className="text-[11px] text-slate-500 mt-1">30 Soal Numerasi HOTS</div>
                </div>
              </div>

              {/* Biodata */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-800 uppercase">Kontak &amp; Alamat Siswa:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                  <div>No. HP Siswa: <strong className="text-slate-900">{inspectingStudent.studentPhone}</strong></div>
                  <div>No. HP Ortu: <strong className="text-slate-900">{inspectingStudent.parentPhone}</strong></div>
                  <div className="sm:col-span-2">Alamat: <strong className="text-slate-900">{inspectingStudent.homeAddress}</strong></div>
                </div>
              </div>

              {/* ITEM 5: GRAFIK PENGUASAAN SUB-MATERI */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-700" />
                      Grafik Penguasaan per Sub-Materi
                    </h4>
                    <p className="text-[11px] text-slate-500">Visualisasi persentase akurasi jawaban siswa</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {Object.entries(inspectingStudent.subTopicAnalysis || {}).map(([topic, stat]) => {
                    const isGood = stat.percentage >= 70;
                    const isFair = stat.percentage >= 50 && stat.percentage < 70;

                    return (
                      <div key={topic} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700 truncate max-w-[280px]">
                            {topic}
                          </span>
                          <span className={`font-bold ${isGood ? 'text-emerald-700' : isFair ? 'text-amber-600' : 'text-rose-600'}`}>
                            {stat.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              isGood ? 'bg-emerald-500' : isFair ? 'bg-amber-400' : 'bg-rose-500'
                            }`}
                            style={{ width: `${stat.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ITEM 5: TABEL ANALISIS SUB-MATERI */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-cyan-700" />
                  Tabel Rinci Penguasaan Sub-Materi
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                      <tr>
                        <th className="py-2.5 px-3">Sub-Materi</th>
                        <th className="py-2.5 px-3">Mata Pelajaran</th>
                        <th className="py-2.5 px-3 text-center">Total Soal</th>
                        <th className="py-2.5 px-3 text-center">Benar</th>
                        <th className="py-2.5 px-3 text-center">Salah/Kosong</th>
                        <th className="py-2.5 px-3 text-center">Penguasaan (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(inspectingStudent.subTopicAnalysis || {}).map(([topic, stat]) => {
                        const wrong = stat.total - stat.correct;
                        return (
                          <tr key={topic} className="hover:bg-slate-50">
                            <td className="py-2.5 px-3 font-semibold text-slate-800">{topic}</td>
                            <td className="py-2.5 px-3 text-slate-600">
                              {stat.subject === 'indonesian' ? 'B. Indonesia' : 'Matematika'}
                            </td>
                            <td className="py-2.5 px-3 text-center font-bold">{stat.total}</td>
                            <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">{stat.correct}</td>
                            <td className="py-2.5 px-3 text-center text-rose-600 font-bold">{wrong}</td>
                            <td className="py-2.5 px-3 text-center font-black">
                              <span className={`px-2 py-0.5 rounded text-[11px] ${
                                stat.percentage >= 70 ? 'bg-emerald-100 text-emerald-800' :
                                stat.percentage >= 50 ? 'bg-amber-100 text-amber-800' :
                                'bg-rose-100 text-rose-800'
                              }`}>
                                {stat.percentage}%
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rekomendasi Belajar */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-amber-900">Rekomendasi Fokus Belajar Siswa:</div>
                <ul className="text-xs text-amber-950 list-disc pl-5 space-y-1">
                  {inspectingStudent.recommendations?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={() => handleDirectPrintStudent(inspectingStudent)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm min-h-[44px]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak Langsung Lembar Hasil</span>
              </button>

              <button
                onClick={() => setInspectingStudent(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center min-h-[44px] cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* ITEM 8: MODAL CETAK HASIL PESERTA (PRINTABLE REPORT CARD)      */}
      {/* ============================================================== */}
      {printingStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto print-modal-overlay">
          <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 border border-slate-300 my-8 space-y-6 print-sheet">
            {/* Action Bar (Not Printed) */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 print:hidden">
              <span className="text-xs font-bold text-slate-500 uppercase">
                Pratinjau Cetak Lembar Hasil Siswa
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-600 text-white flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Dokumen Ini Sekarang</span>
                </button>
                <button
                  onClick={() => setPrintingStudent(null)}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Tutup
                </button>
              </div>
            </div>

            {/* PRINTABLE OFFICIAL SHEET CONTENT */}
            <div className="space-y-6 text-slate-900">
              {/* Official School Header */}
              <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
                <div className="flex items-center justify-center gap-2 text-blue-800 font-black text-xl tracking-wider">
                  <GraduationCap className="w-6 h-6" />
                  <span>{settings.schoolName || 'SMA GENESIS MEDICARE'}</span>
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wide">
                  LEMBAR HASIL EVALUASI MEDTECH ARENA - TRY OUT TKA SMP
                </h2>
                <p className="text-[11px] text-slate-600">
                  {settings.schoolAddress || 'Jl. Gas Alam No. 56, Curug, Kec. Cimanggis, Kota Depok, Jawa Barat 16453'} &bull; Telp: {settings.schoolPhone || '0812-8888-2511'}
                </p>
              </div>

              {/* Student Biodata */}
              <div className="grid grid-cols-2 gap-4 text-xs p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <div>Nama Lengkap: <strong className="text-slate-900 font-bold">{printingStudent.studentName}</strong></div>
                  <div>Asal Sekolah: <strong className="text-slate-900 font-bold">{printingStudent.schoolOrigin}</strong></div>
                  <div>Alamat: <span className="text-slate-700">{printingStudent.homeAddress}</span></div>
                </div>
                <div>
                  <div>No. HP Siswa: <strong className="text-slate-900 font-bold">{printingStudent.studentPhone}</strong></div>
                  <div>No. HP Orang Tua: <strong className="text-slate-900 font-bold">{printingStudent.parentPhone}</strong></div>
                  <div>Paket Soal: <span className="font-bold">Tipe {printingStudent.packetType}</span></div>
                </div>
              </div>

              {/* Separate Subject Scores */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50/50">
                  <div className="text-xs font-bold text-blue-900 uppercase">Nilai Bahasa Indonesia</div>
                  <div className="text-4xl font-black text-blue-800 mt-1">{printingStudent.indonesianScore}</div>
                  <div className="text-[10px] text-slate-500">Skala 100 (30 Butir Soal Literasi)</div>
                </div>

                <div className="p-4 rounded-xl border-2 border-cyan-600 bg-cyan-50/50">
                  <div className="text-xs font-bold text-cyan-900 uppercase">Nilai Matematika</div>
                  <div className="text-4xl font-black text-cyan-800 mt-1">{printingStudent.mathScore}</div>
                  <div className="text-[10px] text-slate-500">Skala 100 (30 Butir Soal HOTS)</div>
                </div>
              </div>

              {/* Subtopic Mastery Table */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Rincian Penguasaan Sub-Materi
                </h4>
                <table className="w-full text-left text-xs border border-slate-300">
                  <thead className="bg-slate-100 text-[10px] font-bold uppercase text-slate-700">
                    <tr>
                      <th className="py-2 px-3 border border-slate-300">Sub-Materi</th>
                      <th className="py-2 px-3 border border-slate-300">Mapel</th>
                      <th className="py-2 px-3 border border-slate-300 text-center">Benar</th>
                      <th className="py-2 px-3 border border-slate-300 text-center">Total Soal</th>
                      <th className="py-2 px-3 border border-slate-300 text-center">Persentase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(printingStudent.subTopicAnalysis || {}).map(([topic, stat]) => (
                      <tr key={topic}>
                        <td className="py-1.5 px-3 border border-slate-300 font-medium">{topic}</td>
                        <td className="py-1.5 px-3 border border-slate-300">
                          {stat.subject === 'indonesian' ? 'B. Indonesia' : 'Matematika'}
                        </td>
                        <td className="py-1.5 px-3 border border-slate-300 text-center font-bold text-emerald-700">{stat.correct}</td>
                        <td className="py-1.5 px-3 border border-slate-300 text-center">{stat.total}</td>
                        <td className="py-1.5 px-3 border border-slate-300 text-center font-bold">{stat.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Recommendations */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                <div className="font-bold text-slate-900">Rekomendasi Tindak Lanjut Akademik:</div>
                <ul className="list-disc pl-5 text-slate-700 space-y-0.5">
                  {printingStudent.recommendations?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Signature Blocks */}
              <div className="pt-6 grid grid-cols-2 text-center text-xs">
                <div>
                  <p>Mengetahui,</p>
                  <p className="mt-14 font-bold border-t border-slate-400 pt-1 inline-block">Kepala Sekolah SMA Genesis Medicare</p>
                </div>
                <div>
                  <p>Depok, {new Date().toLocaleDateString('id-ID')}</p>
                  <p className="mt-14 font-bold border-t border-slate-400 pt-1 inline-block">Ketua Panitia Seleksi &amp; PPDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
