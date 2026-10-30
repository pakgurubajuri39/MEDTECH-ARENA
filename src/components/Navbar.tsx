import React, { useState, useEffect, useMemo } from 'react';
import { GraduationCap, ShieldCheck, BookOpen, LogOut, Menu, X, Sparkles } from 'lucide-react';
import { AppSettings } from '../types';
import { getExamAccessStatus } from '../utils/examAccess';

interface NavbarProps {
  currentView: 'landing' | 'register' | 'instructions' | 'cbt' | 'result' | 'admin';
  setCurrentView: (view: 'landing' | 'register' | 'instructions' | 'cbt' | 'result' | 'admin') => void;
  settings: AppSettings;
  adminUser: { email: string; role: 'super_admin' | 'admin'; name: string } | null;
  onOpenAdminLogin: () => void;
  onLogoutAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  settings,
  adminUser,
  onOpenAdminLogin,
  onLogoutAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 5000);
    return () => clearInterval(timer);
  }, []);

  const examStatus = useMemo(() => getExamAccessStatus(settings, now), [settings, now]);

  // If in CBT mode, we show a focused, distraction-free bar
  if (currentView === 'cbt') {
    return null;
  }

  const navigateTo = (view: 'landing' | 'register' | 'instructions' | 'cbt' | 'result' | 'admin') => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const handleStartExamClick = () => {
    if (examStatus.isOpen) {
      navigateTo('register');
    } else {
      alert(examStatus.detailMessage);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2">
        {/* Brand & School Logo */}
        <div 
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 min-h-[44px]"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-black text-sm sm:text-lg md:text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-200 to-white bg-clip-text text-transparent">
                MEDTECH ARENA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                SMA GENESIS MEDICARE
              </span>
            </div>
            <p className="hidden sm:block text-[11px] md:text-xs text-slate-400 font-medium truncate max-w-[280px] md:max-w-none">
              Try Out TKA SMP &bull; Terakreditasi A Unggul
            </p>
          </div>
        </div>

        {/* Desktop & Laptop Navigation Actions (hidden on mobile, visible from md:) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* Exam status indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium">
            {examStatus.isOpen ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300">{examStatus.badgeText} (Paket {settings.activePacketType})</span>
              </>
            ) : (
              <>
                <span className={`h-2 w-2 rounded-full ${examStatus.badgeColor === 'amber' ? 'bg-amber-400' : 'bg-rose-500'}`}></span>
                <span className={examStatus.badgeColor === 'amber' ? 'text-amber-300' : 'text-rose-300'}>
                  {examStatus.badgeText}
                </span>
              </>
            )}
          </div>

          {/* Quick Navigation */}
          <button
            onClick={() => navigateTo('landing')}
            className={`px-3 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors cursor-pointer min-h-[40px] ${
              currentView === 'landing' ? 'text-cyan-400 bg-cyan-950/50' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Profil Sekolah
          </button>

          <button
            onClick={handleStartExamClick}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs lg:text-sm font-semibold rounded-lg shadow-md transition-all cursor-pointer min-h-[40px] ${
              examStatus.isOpen
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-600/30 hover:shadow-cyan-500/40'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-750'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Mulai Try Out</span>
          </button>

          {/* Admin Area Button */}
          {adminUser ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
              <button
                onClick={() => navigateTo('admin')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer min-h-[40px] ${
                  currentView === 'admin'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Admin ({adminUser.role === 'super_admin' ? 'Super' : 'Staff'})</span>
              </button>
              <button
                onClick={onLogoutAdmin}
                title="Keluar Admin"
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdminLogin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors cursor-pointer min-h-[40px]"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Portal Admin</span>
            </button>
          )}
        </div>

        {/* Mobile & Small Tablet Right Controls (visible on < md:) */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={handleStartExamClick}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg shadow-sm min-h-[40px] ${
              examStatus.isOpen
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mulai</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown (< md) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/98 backdrop-blur-lg px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          {/* Status */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
            <span className="text-slate-400">Status Try Out:</span>
            {examStatus.isOpen ? (
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {examStatus.badgeText} (Paket {settings.activePacketType})
              </span>
            ) : (
              <span className={`font-bold flex items-center gap-1.5 ${examStatus.badgeColor === 'amber' ? 'text-amber-400' : 'text-rose-400'}`}>
                <span className={`w-2 h-2 rounded-full ${examStatus.badgeColor === 'amber' ? 'bg-amber-400' : 'bg-rose-500'}`}></span>
                {examStatus.badgeText}
              </span>
            )}
          </div>

          {/* Links */}
          <button
            onClick={() => navigateTo('landing')}
            className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between min-h-[44px] ${
              currentView === 'landing' ? 'bg-cyan-950/60 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>Profil SMA Genesis Medicare</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            onClick={handleStartExamClick}
            className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-bold shadow-md flex items-center justify-between min-h-[44px] ${
              examStatus.isOpen
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            <span>Mulai Ujian CBT</span>
            <BookOpen className="w-4 h-4" />
          </button>

          {adminUser ? (
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => navigateTo('admin')}
                className="flex-1 px-3 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-2 min-h-[44px]"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Dashboard Admin</span>
              </button>
              <button
                onClick={() => {
                  onLogoutAdmin();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl bg-slate-800 text-rose-400 hover:bg-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onOpenAdminLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full px-3.5 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-800/60 border border-slate-700 flex items-center justify-between min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Portal Administrator</span>
              </div>
              <span className="text-[11px] text-slate-500">Login</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
