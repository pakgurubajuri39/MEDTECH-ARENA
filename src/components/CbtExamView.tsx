import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  LayoutGrid, 
  X, 
  AlertTriangle, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Calculator,
  User,
  Lock,
  Coffee,
  Sparkles,
  ArrowRight,
  Cloud
} from 'lucide-react';
import { Question, StudentProfile, AppSettings } from '../types';
import { db, doc, setDoc } from '../firebase';

interface CbtExamViewProps {
  questions: Question[];
  profile: StudentProfile;
  settings: AppSettings;
  onSubmitExam: (answers: Record<number, string>, flagged: Record<number, boolean>) => void;
}

type SessionStage = 'session1_indonesian' | 'break' | 'session2_math';

export const CbtExamView: React.FC<CbtExamViewProps> = ({
  questions,
  profile,
  settings,
  onSubmitExam
}) => {
  // Session Stage State
  const [sessionStage, setSessionStage] = useState<SessionStage>(() => {
    try {
      const saved = localStorage.getItem('tka_session_stage');
      if (saved === 'session1_indonesian' || saved === 'break' || saved === 'session2_math') {
        return saved;
      }
    } catch {}
    return 'session1_indonesian';
  });

  // Current question index:
  // Session 1: 0 to 29 (Questions 1 to 30)
  // Session 2: 30 to 59 (Questions 31 to 60)
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    try {
      const savedStage = localStorage.getItem('tka_session_stage');
      const savedIdx = localStorage.getItem('tka_current_index');
      if (savedStage === 'session2_math') {
        return savedIdx ? Math.max(30, parseInt(savedIdx, 10)) : 30;
      }
      return savedIdx ? Math.min(29, parseInt(savedIdx, 10)) : 0;
    } catch {
      return 0;
    }
  });

  // Student answers: question.id -> 'A' | 'B' | 'C' | 'D'
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('tka_cbt_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Flagged questions: question.id -> boolean
  const [flagged, setFlagged] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('tka_cbt_flagged');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Durations: 75 minutes = 4500 seconds for each session. 2 minutes = 120 seconds for break.
  const SESSION_DURATION = 75 * 60; // 75 minutes
  const BREAK_DURATION = 2 * 60;    // 2 minutes

  // Session 1 Countdown (75 mins)
  const [session1Remaining, setSession1Remaining] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('tka_session1_time');
      return saved ? parseInt(saved, 10) : SESSION_DURATION;
    } catch {
      return SESSION_DURATION;
    }
  });

  // Break Countdown (2 mins)
  const [breakRemaining, setBreakRemaining] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('tka_break_time');
      return saved ? parseInt(saved, 10) : BREAK_DURATION;
    } catch {
      return BREAK_DURATION;
    }
  });

  // Session 2 Countdown (75 mins)
  const [session2Remaining, setSession2Remaining] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('tka_session2_time');
      return saved ? parseInt(saved, 10) : SESSION_DURATION;
    } catch {
      return SESSION_DURATION;
    }
  });

  // UI States
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extralarge'>('normal');
  const [showConfirmFinishSession1, setShowConfirmFinishSession1] = useState(false);
  const [showConfirmFinalSubmit, setShowConfirmFinalSubmit] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);

  // Sync stage to localStorage
  useEffect(() => {
    localStorage.setItem('tka_session_stage', sessionStage);
    localStorage.setItem('tka_current_index', currentIndex.toString());
  }, [sessionStage, currentIndex]);

  // Persist answers and flagged locally
  useEffect(() => {
    localStorage.setItem('tka_cbt_answers', JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('tka_cbt_flagged', JSON.stringify(flagged));
  }, [flagged]);

  // REAL-TIME AUTO-SAVE TO FIREBASE BACKEND
  const [cloudSyncedTime, setCloudSyncedTime] = useState<string>('');
  useEffect(() => {
    if (!profile?.studentPhone) return;
    const sanitizedId = `sess_${profile.studentPhone.replace(/[^a-zA-Z0-9]/g, '') || 'guest'}`;

    const timeout = setTimeout(async () => {
      try {
        await setDoc(doc(db, 'active_sessions', sanitizedId), {
          studentPhone: profile.studentPhone,
          studentName: profile.fullName,
          schoolOrigin: profile.schoolOrigin,
          packetType: settings.activePacketType,
          answers,
          flagged,
          sessionStage,
          currentIndex,
          answeredCount: Object.keys(answers).length,
          updatedAt: new Date().toISOString()
        }, { merge: true });
        setCloudSyncedTime(new Date().toLocaleTimeString('id-ID'));
      } catch (err) {
        // Silently handled in background
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [answers, flagged, sessionStage, currentIndex, profile, settings.activePacketType]);

  // TIMER FOR SESSION 1 (BAHASA INDONESIA)
  useEffect(() => {
    if (sessionStage !== 'session1_indonesian') return;

    if (session1Remaining <= 0) {
      handleCompleteSession1();
      return;
    }

    const timer = setInterval(() => {
      setSession1Remaining(prev => {
        const next = prev - 1;
        localStorage.setItem('tka_session1_time', next.toString());
        if (next <= 0) {
          clearInterval(timer);
          handleCompleteSession1();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionStage, session1Remaining]);

  // TIMER FOR BREAK (2 MENIT)
  useEffect(() => {
    if (sessionStage !== 'break') return;

    if (breakRemaining <= 0) {
      handleStartSession2();
      return;
    }

    const timer = setInterval(() => {
      setBreakRemaining(prev => {
        const next = prev - 1;
        localStorage.setItem('tka_break_time', next.toString());
        if (next <= 0) {
          clearInterval(timer);
          handleStartSession2();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionStage, breakRemaining]);

  // TIMER FOR SESSION 2 (MATEMATIKA)
  useEffect(() => {
    if (sessionStage !== 'session2_math') return;

    if (session2Remaining <= 0) {
      handleFinalSubmit();
      return;
    }

    const timer = setInterval(() => {
      setSession2Remaining(prev => {
        const next = prev - 1;
        localStorage.setItem('tka_session2_time', next.toString());
        if (next <= 0) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionStage, session2Remaining]);

  // Transition from Session 1 to Break
  const handleCompleteSession1 = () => {
    setShowConfirmFinishSession1(false);
    setSessionStage('break');
    setBreakRemaining(BREAK_DURATION);
  };

  // Transition from Break to Session 2 (Matematika)
  const handleStartSession2 = () => {
    setSessionStage('session2_math');
    setCurrentIndex(30); // Soal No. 31 (Matematika)
    setIsGridOpen(false);
  };

  // Keyboard shortcut listener (A, B, C, D, Arrow Left, Arrow Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sessionStage === 'break' || showConfirmFinishSession1 || showConfirmFinalSubmit) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleSelectOption(key as 'A' | 'B' | 'C' | 'D');
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'r' || e.key === 'R') {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        toggleFlagged();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, sessionStage, showConfirmFinishSession1, showConfirmFinalSubmit]);

  const currentQuestion = questions[currentIndex] || questions[0];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    // Cannot edit Session 1 answers when in Session 2
    if (sessionStage === 'session2_math' && currentIndex < 30) return;

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: key
    }));
  };

  const toggleFlagged = () => {
    if (sessionStage === 'session2_math' && currentIndex < 30) return;

    setFlagged(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleNext = () => {
    if (sessionStage === 'session1_indonesian') {
      if (currentIndex === 29) {
        // Last question of Session 1 -> show finish prompt
        setShowConfirmFinishSession1(true);
      } else if (currentIndex < 29) {
        setCurrentIndex(prev => prev + 1);
      }
    } else if (sessionStage === 'session2_math') {
      if (currentIndex === 59) {
        // Last question of exam
        setShowConfirmFinalSubmit(true);
      } else if (currentIndex < 59) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (sessionStage === 'session1_indonesian') {
      if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    } else if (sessionStage === 'session2_math') {
      // In Session 2, prevent going back to Session 1
      if (currentIndex > 30) {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const handleJumpToQuestion = (targetIdx: number) => {
    if (sessionStage === 'session1_indonesian') {
      if (targetIdx >= 30) {
        setLockedAlert('Soal Matematika terkunci! Selesaikan Sesi 1 Bahasa Indonesia terlebih dahulu.');
        setTimeout(() => setLockedAlert(null), 3500);
        return;
      }
      setCurrentIndex(targetIdx);
      setIsGridOpen(false);
    } else if (sessionStage === 'session2_math') {
      if (targetIdx < 30) {
        setLockedAlert('Sesi 1 Bahasa Indonesia telah selesai dikumpulkan dan dikunci.');
        setTimeout(() => setLockedAlert(null), 3500);
        return;
      }
      setCurrentIndex(targetIdx);
      setIsGridOpen(false);
    }
  };

  const handleFinalSubmit = () => {
    localStorage.removeItem('tka_session_stage');
    localStorage.removeItem('tka_current_index');
    localStorage.removeItem('tka_session1_time');
    localStorage.removeItem('tka_break_time');
    localStorage.removeItem('tka_session2_time');
    localStorage.removeItem('tka_cbt_answers');
    localStorage.removeItem('tka_cbt_flagged');

    onSubmitExam(answers, flagged);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Font size classes
  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    extralarge: 'text-lg sm:text-xl leading-relaxed'
  };

  // Statistics for Session 1 (0..29)
  const session1Answered = questions.slice(0, 30).filter(q => !!answers[q.id]).length;
  const session1Unanswered = 30 - session1Answered;
  const session1Flagged = questions.slice(0, 30).filter(q => !!flagged[q.id]).length;

  // Statistics for Session 2 (30..59)
  const session2Answered = questions.slice(30, 60).filter(q => !!answers[q.id]).length;
  const session2Unanswered = 30 - session2Answered;
  const session2Flagged = questions.slice(30, 60).filter(q => !!flagged[q.id]).length;

  // Overall & Session Question Stats for Progress Bar and Visual Indicators
  const totalQuestions = questions.length || 60;
  const totalAnswered = questions.filter(q => !!answers[q.id]).length;
  const totalFlagged = questions.filter(q => !!flagged[q.id]).length;
  const totalUnanswered = Math.max(0, totalQuestions - totalAnswered);
  const overallPercentage = Math.round((totalAnswered / totalQuestions) * 100);

  const isSession1 = sessionStage === 'session1_indonesian';
  const activeSessionTotal = 30;
  const activeSessionAnswered = isSession1 ? session1Answered : session2Answered;
  const activeSessionUnanswered = isSession1 ? session1Unanswered : session2Unanswered;
  const activeSessionFlagged = isSession1 ? session1Flagged : session2Flagged;
  const activeSessionPercentage = Math.round((activeSessionAnswered / activeSessionTotal) * 100);

  const currentIsAnswered = !!answers[currentQuestion?.id];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const currentIsFlagged = !!flagged[currentQuestion?.id];

  // ==========================================
  // BREAK VIEW (JEDA ISTIRAHAT 2 MENIT)
  // ==========================================
  if (sessionStage === 'break') {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
        <div className="max-w-xl w-full bg-slate-850 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-8 animate-in zoom-in-95">
          {/* Milestone Badge */}
          <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center mx-auto shadow-lg">
            <Coffee className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-3">
            <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Sesi 1 Selesai
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Jeda Istirahat (2 Menit)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Jawaban Bahasa Indonesia Anda telah tersimpan. Silakan rileks sejenak sebelum memasuki 30 soal HOTS Matematika (75 Menit).
            </p>
          </div>

          {/* Countdown Clock for Break */}
          <div className="bg-slate-950/80 border border-cyan-500/40 rounded-3xl p-6 max-w-xs mx-auto shadow-inner">
            <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
              Waktu Istirahat Tersisa
            </div>
            <div className="text-5xl font-mono font-black text-cyan-400 tracking-wider">
              {formatTime(breakRemaining)}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              Sesi Matematika akan dimulai otomatis saat waktu habis
            </div>
          </div>

          {/* Calming Tips */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 space-y-1.5 text-left">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Tips Relaksasi Singkat:</span>
            </div>
            <p>&bull; Minum segelas air putih untuk menghidrasi otak.</p>
            <p>&bull; Pejamkan mata sejenak dan tarik napas perlahan selama 4 detik.</p>
            <p>&bull; Siapkan kertas coretan dan pulpen untuk perhitungan matematika.</p>
          </div>

          {/* Direct Continue Button */}
          <button
            onClick={handleStartSession2}
            className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-102"
          >
            <span>Mulai Sesi 2 (Matematika) Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Active session timer & title
  const activeRemainingSeconds = sessionStage === 'session1_indonesian' ? session1Remaining : session2Remaining;
  const sessionTitle = sessionStage === 'session1_indonesian' 
    ? 'SESI 1: BAHASA INDONESIA (NO. 1-30)' 
    : 'SESI 2: MATEMATIKA (NO. 31-60)';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col select-none">
      {/* LOCKED ALERT FLOATING TOAST */}
      {lockedAlert && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-rose-900/95 text-white border border-rose-500 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold animate-in slide-in-from-top-4">
          <Lock className="w-4 h-4 text-rose-300 shrink-0" />
          <span>{lockedAlert}</span>
        </div>
      )}

      {/* 1. CBT TOP BAR (Responsive for Phone, Tablet, Laptop, Desktop) */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2">
          {/* Candidate & Session Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-cyan-300 shrink-0">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-xs text-cyan-200 uppercase font-bold tracking-wider flex items-center gap-1.5 truncate">
                <span className="text-cyan-300 font-extrabold hidden xs:inline">MEDTECH ARENA &bull;</span>
                <span className="truncate">{sessionTitle}</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-100 text-[10px] font-bold shrink-0">
                  Paket {settings.activePacketType}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-xs sm:text-base font-bold truncate max-w-[120px] sm:max-w-xs md:max-w-md">
                  {profile.fullName} <span className="hidden sm:inline font-normal text-slate-300">({profile.schoolOrigin})</span>
                </h1>
                <div className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-[10px] text-cyan-200">
                  <Cloud className="w-3 h-3 text-cyan-300 animate-pulse" />
                  <span>Cloud Realtime {cloudSyncedTime ? `(${cloudSyncedTime})` : 'Aktif'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Tools: Countdown Timer (75 Min), Daftar Soal, Fullscreen */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Countdown Box (75 Min per Session) */}
            <div className="bg-slate-950/85 border border-cyan-400/40 rounded-xl px-2.5 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-inner min-h-[40px]">
              <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeRemainingSeconds < 300 ? 'text-rose-400 animate-bounce' : 'text-cyan-400'}`} />
              <div className="text-right">
                <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 leading-tight">
                  Waktu {sessionStage === 'session1_indonesian' ? 'Sesi 1' : 'Sesi 2'}
                </div>
                <div className={`font-mono text-xs sm:text-base font-extrabold tracking-wider ${activeRemainingSeconds < 300 ? 'text-rose-400 animate-pulse' : 'text-white'}`}>
                  {formatTime(activeRemainingSeconds)}
                </div>
              </div>
            </div>

            {/* Daftar Soal Button */}
            <button
              onClick={() => setIsGridOpen(true)}
              className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer transition-all min-h-[40px]"
              title="Buka Peta / Daftar Nomor Soal"
            >
              <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">Daftar Soal</span>
              <span className="sm:hidden text-xs">Peta ({currentIndex + 1}/30)</span>
            </button>

            {/* Fullscreen (Desktop/Laptop) */}
            <button
              onClick={toggleFullscreen}
              title="Layar Penuh"
              className="hidden lg:flex p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors min-h-[40px] min-w-[40px] items-center justify-center cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* 2. PROGRESS BAR & VISUAL COMPLETION INDICATOR BANNER */}
      <section 
        aria-label="Indikator Progres Pengerjaan Soal" 
        className="bg-white border-b border-slate-200 px-3 sm:px-6 py-2.5 shadow-xs sticky top-[48px] sm:top-[56px] z-20"
      >
        <div className="max-w-7xl mx-auto space-y-2">
          {/* Header row: Progress label and detailed badge counters */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Left: Active session progress and ratio */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-slate-800 flex items-center gap-1.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Progres {isSession1 ? 'Sesi 1 (Bahasa Indonesia)' : 'Sesi 2 (Matematika)'}:</span>
              </span>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200 font-black text-blue-800 text-xs sm:text-sm">
                <span>{activeSessionAnswered}</span>
                <span className="text-slate-400 font-normal">/</span>
                <span>{activeSessionTotal} Soal Terjawab</span>
                <span className="text-blue-600 font-bold ml-0.5">({activeSessionPercentage}%)</span>
              </div>
            </div>

            {/* Right: Visual indicator badges */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-[11px] sm:text-xs font-semibold">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                <span>{activeSessionAnswered} Dijawab</span>
              </span>

              {activeSessionFlagged > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{activeSessionFlagged} Ragu</span>
                </span>
              )}

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                <span>{activeSessionUnanswered} Belum</span>
              </span>

              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 font-bold text-[11px]">
                <span>Total Ujian:</span>
                <strong className="text-indigo-700">{totalAnswered}/{totalQuestions}</strong>
                <span className="text-indigo-500">({overallPercentage}%)</span>
              </span>
            </div>
          </div>

          {/* Dual Visual Progress Bar */}
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-2 sm:h-2.5 rounded-full overflow-hidden border border-slate-200/90 relative shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out relative ${
                  isSession1
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500'
                    : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-500'
                }`}
                style={{ width: `${activeSessionPercentage}%` }}
                role="progressbar"
                aria-valuenow={activeSessionAnswered}
                aria-valuemin={0}
                aria-valuemax={activeSessionTotal}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>

            {/* Mobile/Tablet overall indicator caption */}
            <div className="flex lg:hidden items-center justify-between text-[10px] text-slate-500 font-medium px-0.5">
              <span>{activeSessionPercentage}% selesai di sesi ini</span>
              <span>Total selesai: <strong className="text-slate-800">{totalAnswered}</strong> dari {totalQuestions} soal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUB-HEADER KETERANGAN SOAL & ZOOM FONT (VISIBLE ON ALL SCREENS) */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-3 sm:px-6 py-2 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-xs shrink-0">
              SOAL {currentQuestion.number}
            </span>
            <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200 shrink-0">
              {currentQuestion.subject === 'indonesian' ? 'B. Indonesia' : 'Matematika'}
            </span>

            {/* Visual Indicator of Current Question Status */}
            {currentIsFlagged ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Ragu-ragu {currentIsAnswered ? `(Opsi ${currentAnswer})` : '(Belum Dijawab)'}</span>
              </span>
            ) : currentIsAnswered ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Terjawab: Opsi {currentAnswer}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-600 border border-slate-300">
                <span>Belum Dijawab</span>
              </span>
            )}

            <span className="hidden md:inline-block text-xs text-slate-500 font-medium truncate max-w-xs">
              &bull; Sub-Materi: <strong className="text-slate-700">{currentQuestion.subTopic}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Universal Font Size Zoom Control for Phone, Tablet & PC */}
            <div className="flex items-center gap-0.5 bg-white rounded-lg p-0.5 border border-slate-200 text-xs shadow-2xs">
              <span className="text-[10px] text-slate-500 font-bold px-1.5 hidden sm:inline">Ukuran Teks:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${fontSize === 'normal' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:text-slate-900'}`}
                title="Teks Ukuran Standar"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded font-bold text-xs transition-colors cursor-pointer ${fontSize === 'large' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:text-slate-900'}`}
                title="Teks Ukuran Sedang (+)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('extralarge')}
                className={`px-2 py-0.5 rounded font-bold text-sm transition-colors cursor-pointer ${fontSize === 'extralarge' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-600 hover:text-slate-900'}`}
                title="Teks Ukuran Besar (++)"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN QUESTION AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Question Card (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Stimulus / Reading Passage */}
          {currentQuestion.passage && (
            <div className="bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200/90 text-slate-800 space-y-3 font-serif">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 pb-1 border-b border-slate-200/80">
                <BookOpen className="w-4 h-4 text-cyan-700" />
                <span>Wacana / Teks Bacaan</span>
              </div>
              <div className={`${fontClasses[fontSize]} whitespace-pre-line text-slate-800 leading-relaxed`}>
                {currentQuestion.passage}
              </div>
            </div>
          )}

          {/* Prompt */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center shrink-0 border border-blue-200 text-sm">
                {currentQuestion.number}
              </div>
              <p className={`font-semibold text-slate-900 ${fontClasses[fontSize]}`}>
                {currentQuestion.questionText}
              </p>
            </div>

            {/* Answer Options A, B, C, D */}
            <div className="space-y-3 pt-2 pl-0 sm:pl-10">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.key;

                return (
                  <button
                    type="button"
                    key={option.key}
                    onClick={() => handleSelectOption(option.key)}
                    className={`w-full text-left flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer min-h-[52px] select-none ${
                      isSelected
                        ? 'border-blue-700 bg-blue-50/70 shadow-sm ring-1 ring-blue-700/30'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 active:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-blue-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {option.key}
                    </div>

                    <div className={`text-slate-800 pt-0.5 sm:pt-1 ${fontClasses[fontSize]}`}>
                      {option.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column (Question Map Grid with Session Locking) - 4 cols */}
        <div className="hidden lg:block lg:col-span-4 space-y-4 sticky top-20">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-blue-700" />
                Peta Nomor Soal
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Paket {settings.activePacketType}
              </span>
            </div>

            {/* Progress Visual Card in Sidebar */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/60 p-3.5 rounded-xl border border-slate-200/90 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Progres Pengerjaan</span>
                </span>
                <span className="font-black text-blue-700 bg-white px-2 py-0.5 rounded-md border border-slate-200 text-[11px]">
                  {activeSessionAnswered} / {activeSessionTotal}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isSession1
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'bg-gradient-to-r from-cyan-600 to-emerald-500'
                  }`}
                  style={{ width: `${activeSessionPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>{activeSessionPercentage}% sesi selesai</span>
                <span>Total: <strong className="text-slate-800">{totalAnswered}/{totalQuestions}</strong></span>
              </div>
            </div>

            {/* Sesi 1 Header (Bahasa Indonesia) */}
            <div className="text-xs font-bold text-slate-700 flex items-center justify-between pt-1">
              <span>Sesi 1: Bahasa Indonesia (1-30)</span>
              {sessionStage === 'session2_math' && (
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Terkumpul ✓</span>
              )}
            </div>

            {/* Sesi 1 Numbers Grid */}
            <div className="grid grid-cols-5 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
              {questions.slice(0, 30).map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];

                let btnStyle = 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50';
                if (isFlag) {
                  btnStyle = 'bg-amber-400 text-slate-950 font-bold border border-amber-500 shadow-xs';
                } else if (isAnswered) {
                  btnStyle = 'bg-blue-700 text-white font-bold border border-blue-800 shadow-xs';
                }

                if (isCurrent) {
                  btnStyle += ' ring-2 ring-cyan-400 ring-offset-2 scale-105';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(idx)}
                    disabled={sessionStage === 'session2_math'}
                    className={`h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${btnStyle} ${
                      sessionStage === 'session2_math' ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{q.number}</span>
                    {isAnswered && !isFlag && (
                      <span className="text-[8px] ml-0.5 font-bold uppercase opacity-80">
                        {answers[q.id]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Sesi 2 Header (Matematika) */}
            <div className="text-xs font-bold text-slate-700 flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                {sessionStage === 'session1_indonesian' && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                <span>Sesi 2: Matematika (31-60)</span>
              </span>
              {sessionStage === 'session1_indonesian' && (
                <span className="text-[10px] font-bold text-amber-600 uppercase">Terkunci 🔒</span>
              )}
            </div>

            {/* Sesi 2 Numbers Grid */}
            <div className="grid grid-cols-5 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
              {questions.slice(30, 60).map((q, idxOffset) => {
                const actualIdx = 30 + idxOffset;
                const isCurrent = actualIdx === currentIndex;
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];
                const isLocked = sessionStage === 'session1_indonesian';

                let btnStyle = 'bg-white text-slate-700 border border-slate-300';
                if (isLocked) {
                  btnStyle = 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed';
                } else if (isFlag) {
                  btnStyle = 'bg-amber-400 text-slate-950 font-bold border border-amber-500 shadow-xs';
                } else if (isAnswered) {
                  btnStyle = 'bg-cyan-700 text-white font-bold border border-cyan-800 shadow-xs';
                }

                if (isCurrent) {
                  btnStyle += ' ring-2 ring-cyan-400 ring-offset-2 scale-105';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(actualIdx)}
                    className={`h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                  >
                    {isLocked ? (
                      <Lock className="w-3 h-3 text-slate-400" />
                    ) : (
                      <>
                        <span>{q.number}</span>
                        {isAnswered && !isFlag && (
                          <span className="text-[8px] ml-0.5 font-bold uppercase opacity-80">
                            {answers[q.id]}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* 4. BOTTOM NAVIGATION BAR (Thumb-friendly across mobile, tablet, laptop & PC) */}
      <footer className="bg-white border-t border-slate-300 shadow-lg py-2.5 sm:py-3.5 px-3 sm:px-6 sticky bottom-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
          {/* Tombol Sebelumnya */}
          <button
            onClick={handlePrev}
            disabled={sessionStage === 'session1_indonesian' ? currentIndex === 0 : currentIndex === 30}
            className={`px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 border transition-all cursor-pointer min-h-[44px] shrink-0 ${
              (sessionStage === 'session1_indonesian' && currentIndex === 0) || (sessionStage === 'session2_math' && currentIndex === 30)
                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed shadow-none'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-xs active:bg-slate-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline">Sebelumnya</span>
          </button>

          {/* Tombol Ragu-Ragu */}
          <button
            onClick={toggleFlagged}
            className={`px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2.5 transition-all cursor-pointer border min-h-[44px] ${
              flagged[currentQuestion.id]
                ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-300'
                : 'bg-amber-50 hover:bg-amber-100/80 text-amber-900 border-amber-300 shadow-xs active:bg-amber-100'
            }`}
          >
            <input
              type="checkbox"
              readOnly
              checked={!!flagged[currentQuestion.id]}
              className="w-4 h-4 text-amber-600 rounded cursor-pointer pointer-events-none shrink-0"
            />
            <span>Ragu-Ragu</span>
          </button>

          {/* Tombol Selanjutnya / Selesai Sesi 1 / Selesai Ujian */}
          {sessionStage === 'session1_indonesian' ? (
            currentIndex === 29 ? (
              <button
                onClick={() => setShowConfirmFinishSession1(true)}
                className="px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/30 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-102 min-h-[44px]"
              >
                <span>Selesai Sesi 1</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-blue-700 hover:bg-blue-600 text-white shadow-md shadow-blue-700/25 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-102 min-h-[44px]"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            )
          ) : (
            currentIndex === 59 ? (
              <button
                onClick={() => setShowConfirmFinalSubmit(true)}
                className="px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/30 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-102 min-h-[44px]"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Selesai Tes</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-cyan-700 hover:bg-cyan-600 text-white shadow-md shadow-cyan-700/25 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all hover:scale-102 min-h-[44px]"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            )
          )}
        </div>
      </footer>

      {/* 5. SLIDE-OVER MODAL DAFTAR SOAL (RESPONSIVE FOR MOBILE & TABLET) */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-cyan-400" />
                  Daftar Nomor Soal (Peta Ujian)
                </h3>
                <p className="text-xs text-slate-400">{sessionTitle}</p>
              </div>
              <button
                onClick={() => setIsGridOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Legend */}
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 grid grid-cols-3 gap-2 text-[11px] font-semibold text-slate-600">
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded bg-white border border-slate-300"></span>
                <span>Belum</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded bg-blue-700 text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                <span>Dijawab</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded bg-amber-400 text-slate-950 flex items-center justify-center text-[8px] font-bold">?</span>
                <span>Ragu</span>
              </div>
            </div>

            {/* Visual Progress Bar in Drawer */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border-b border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Progres {isSession1 ? 'Sesi 1 (B. Indonesia)' : 'Sesi 2 (Matematika)'}</span>
                </span>
                <span className="font-black text-blue-800 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                  {activeSessionAnswered} / {activeSessionTotal} ({activeSessionPercentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isSession1
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500'
                      : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-500'
                  }`}
                  style={{ width: `${activeSessionPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <span>Total Ujian: <strong className="text-slate-900">{totalAnswered}/{totalQuestions} Soal</strong></span>
                <span>Ragu: <strong className="text-amber-700">{activeSessionFlagged}</strong> &bull; Belum: <strong className="text-slate-700">{activeSessionUnanswered}</strong></span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Sesi 1 List */}
              <div className="space-y-2">
                <div className="font-bold text-xs text-slate-800 flex items-center justify-between">
                  <span>Sesi 1: Bahasa Indonesia (1-30)</span>
                  {sessionStage === 'session2_math' && <span className="text-emerald-600 text-[11px] font-bold">Terkumpul ✓</span>}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.slice(0, 30).map((q, idx) => {
                    const isCurrent = idx === currentIndex;
                    const isAnswered = !!answers[q.id];
                    const isFlag = !!flagged[q.id];
                    return (
                      <button
                        key={q.id}
                        disabled={sessionStage === 'session2_math'}
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`h-11 rounded-xl text-xs font-bold flex flex-col items-center justify-center border transition-all cursor-pointer min-h-[44px] ${
                          isFlag ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-xs' :
                          isAnswered ? 'bg-blue-700 text-white border-blue-800 shadow-xs' :
                          'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        } ${isCurrent ? 'ring-2 ring-cyan-400 ring-offset-2 scale-105' : ''} ${
                          sessionStage === 'session2_math' ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                      >
                        <span>{q.number}</span>
                        <span className="text-[9px] font-extrabold uppercase">{isFlag ? '?' : answers[q.id] || '-'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sesi 2 List */}
              <div className="space-y-2 pt-3 border-t border-slate-200">
                <div className="font-bold text-xs text-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    {sessionStage === 'session1_indonesian' && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                    <span>Sesi 2: Matematika (31-60)</span>
                  </span>
                  {sessionStage === 'session1_indonesian' && <span className="text-amber-600 text-[11px] font-bold">Terkunci 🔒</span>}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.slice(30, 60).map((q, idxOffset) => {
                    const actualIdx = 30 + idxOffset;
                    const isCurrent = actualIdx === currentIndex;
                    const isAnswered = !!answers[q.id];
                    const isFlag = !!flagged[q.id];
                    const isLocked = sessionStage === 'session1_indonesian';

                    return (
                      <button
                        key={q.id}
                        onClick={() => handleJumpToQuestion(actualIdx)}
                        className={`h-11 rounded-xl text-xs font-bold flex flex-col items-center justify-center border transition-all cursor-pointer min-h-[44px] ${
                          isLocked ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' :
                          isFlag ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-xs' :
                          isAnswered ? 'bg-cyan-700 text-white border-cyan-800 shadow-xs' :
                          'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        } ${isCurrent ? 'ring-2 ring-cyan-400 ring-offset-2 scale-105' : ''}`}
                      >
                        {isLocked ? (
                          <Lock className="w-4 h-4 text-slate-400" />
                        ) : (
                          <>
                            <span>{q.number}</span>
                            <span className="text-[9px] font-extrabold uppercase">{isFlag ? '?' : answers[q.id] || '-'}</span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-white">
              <button
                onClick={() => setIsGridOpen(false)}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm min-h-[44px] cursor-pointer transition-colors"
              >
                Tutup Peta Soal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL KONFIRMASI PENYELESAIAN SESI 1 (BAHASA INDONESIA) */}
      {showConfirmFinishSession1 && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto shadow-sm">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Selesaikan Sesi 1 (Bahasa Indonesia)?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Setelah sesi ini diselesaikan, soal Bahasa Indonesia akan dikunci dan Anda akan memasuki jeda istirahat 2 menit sebelum memulai Sesi 2 (Matematika).
              </p>
            </div>

            {/* Sesi 1 Stats */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                <div className="text-lg font-bold text-blue-700">{session1Answered}</div>
                <div className="text-[10px] text-blue-900">Dijawab</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-lg font-bold text-amber-600">{session1Flagged}</div>
                <div className="text-[10px] text-amber-900">Ragu</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                <div className="text-lg font-bold text-rose-600">{session1Unanswered}</div>
                <div className="text-[10px] text-rose-900">Kosong</div>
              </div>
            </div>

            {session1Unanswered > 0 && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Masih ada <strong>{session1Unanswered} soal Bahasa Indonesia</strong> yang belum Anda jawab.</span>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmFinishSession1(false)}
                className="flex-1 py-3 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Periksa Lagi
              </button>
              <button
                onClick={handleCompleteSession1}
                className="flex-1 py-3 rounded-xl font-bold text-xs text-white bg-blue-700 hover:bg-blue-600 shadow-md shadow-blue-700/25"
              >
                Ya, Selesaikan Sesi 1
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL KONFIRMASI SUBMIT AKHIR (SELESAI SELURUH UJIAN) */}
      {showConfirmFinalSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Konfirmasi Selesai Ujian
              </h3>
              <p className="text-xs text-slate-500">
                Apakah Anda yakin ingin mengumpulkan seluruh lembar jawaban Try Out TKA SMP ini?
              </p>
            </div>

            {/* Sesi 2 Stats */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200">
                <div className="text-lg font-bold text-cyan-700">{session2Answered}</div>
                <div className="text-[10px] text-cyan-900">Dijawab (MTK)</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-lg font-bold text-amber-600">{session2Flagged}</div>
                <div className="text-[10px] text-amber-900">Ragu (MTK)</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                <div className="text-lg font-bold text-rose-600">{session2Unanswered}</div>
                <div className="text-[10px] text-rose-900">Kosong (MTK)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmFinalSubmit(false)}
                className="flex-1 py-3 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Kembali Periksa
              </button>
              <button
                onClick={() => {
                  setShowConfirmFinalSubmit(false);
                  handleFinalSubmit();
                }}
                className="flex-1 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/30"
              >
                Ya, Kumpulkan Ujian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
