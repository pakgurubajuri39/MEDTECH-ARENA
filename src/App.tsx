import React, { useState, useEffect } from 'react';
import { 
  AppSettings, 
  StudentProfile, 
  ExamSubmission, 
  AdminAccount, 
  PacketType,
  ActiveSession
} from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { StudentRegistration } from './components/StudentRegistration';
import { ExamInstructions } from './components/ExamInstructions';
import { CbtExamView } from './components/CbtExamView';
import { StudentResult } from './components/StudentResult';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLoginModal } from './components/AdminLoginModal';
import { getQuestionsByPacket, evaluateExam } from './data/questionsProvider';
import { initialMockSubmissions } from './data/mockSubmissions';
import { 
  db, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  collection, 
  deleteDoc, 
  onSnapshot,
  handleFirestoreError, 
  OperationType 
} from './firebase';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'register' | 'instructions' | 'cbt' | 'result' | 'admin'>('landing');

  // Application Settings
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem('tka_app_settings');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      schoolName: 'SMA Genesis Medicare',
      schoolAddress: 'Jl. Gas Alam No. 56, Curug, Kec. Cimanggis, Kota Depok, Jawa Barat 16453',
      schoolPhone: '0812-8888-2511',
      schoolEmail: 'smagmdepok@gmail.com',
      isExamActive: true,
      examAccessMode: 'manual',
      showScoreToStudents: true,
      scoreReleaseMode: 'immediate',
      activePacketType: 'A',
      durationMinutes: 75
    };
  });

  // Current registered student profile
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(() => {
    try {
      const saved = localStorage.getItem('tka_student_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Current completed submission for result view
  const [currentSubmission, setCurrentSubmission] = useState<ExamSubmission | null>(() => {
    try {
      const saved = localStorage.getItem('tka_last_submission');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Master list of all submissions for Admin Rekap
  const [submissions, setSubmissions] = useState<ExamSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('tka_all_submissions');
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialMockSubmissions;
  });

  // Admin accounts list
  const [adminAccounts, setAdminAccounts] = useState<AdminAccount[]>([
    {
      id: 'adm-1',
      email: 'panitia.ppdb@genesismedicareschool.sch.id',
      name: 'Panitia PPDB Genesis Medicare',
      role: 'admin',
      createdAt: '2026-10-20'
    }
  ]);

  // Current Admin user session
  const [adminUser, setAdminUser] = useState<{ email: string; role: 'super_admin' | 'admin'; name: string } | null>(() => {
    try {
      const saved = localStorage.getItem('tka_admin_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Master list of all live CBT active sessions for Admin anti-cheat monitor
  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>([]);

  // Real-time Firestore synchronization status
  const [isRealtimeConnected, setIsRealtimeConnected] = useState<boolean>(true);
  const [lastSyncTime, setLastSyncTime] = useState<string>(new Date().toLocaleTimeString('id-ID'));

  // REAL-TIME FIRESTORE LISTENERS FOR SETTINGS, SUBMISSIONS, AND ADMIN ACCOUNTS
  useEffect(() => {
    // 1. Real-time App Settings Listener (Synchronizes across all devices instantly)
    const unsubscribeSettings = onSnapshot(
      doc(db, 'app_settings', 'config'),
      (snapshot) => {
        if (snapshot.exists()) {
          const remoteSettings = snapshot.data() as AppSettings;
          setSettings(prev => ({ ...prev, ...remoteSettings }));
          localStorage.setItem('tka_app_settings', JSON.stringify(remoteSettings));
          setIsRealtimeConnected(true);
          setLastSyncTime(new Date().toLocaleTimeString('id-ID'));
          console.log('⚡ [Realtime Firebase] App settings synced:', remoteSettings);
        }
      },
      (err) => {
        setIsRealtimeConnected(false);
        handleFirestoreError(err, OperationType.GET, 'app_settings/config');
      }
    );

    // 2. Real-time Submissions Listener (Live exam submissions appear instantly)
    const unsubscribeSubmissions = onSnapshot(
      collection(db, 'submissions'),
      (snapshot) => {
        const remoteList: ExamSubmission[] = [];
        snapshot.forEach(d => {
          remoteList.push({ id: d.id, ...d.data() } as ExamSubmission);
        });

        setSubmissions(prev => {
          const combinedMap = new Map<string, ExamSubmission>();
          initialMockSubmissions.forEach(m => combinedMap.set(m.id, m));
          remoteList.forEach(r => combinedMap.set(r.id, r));
          const updated = Array.from(combinedMap.values());
          localStorage.setItem('tka_all_submissions', JSON.stringify(updated));
          return updated;
        });

        setIsRealtimeConnected(true);
        setLastSyncTime(new Date().toLocaleTimeString('id-ID'));
        console.log(`⚡ [Realtime Firebase] ${remoteList.length} submissions live updated.`);
      },
      (err) => {
        setIsRealtimeConnected(false);
        handleFirestoreError(err, OperationType.LIST, 'submissions');
      }
    );

    // 3. Real-time Admin Accounts Listener (Role & access syncs live)
    const unsubscribeAdmins = onSnapshot(
      collection(db, 'admins'),
      (snapshot) => {
        const remoteAdmins: AdminAccount[] = [];
        snapshot.forEach(d => {
          remoteAdmins.push({ id: d.id, ...d.data() } as AdminAccount);
        });

        if (remoteAdmins.length > 0) {
          setAdminAccounts(prev => {
            const combinedMap = new Map<string, AdminAccount>();
            prev.forEach(a => combinedMap.set(a.id, a));
            remoteAdmins.forEach(r => combinedMap.set(r.id, r));
            return Array.from(combinedMap.values());
          });
          console.log('⚡ [Realtime Firebase] Admin accounts live updated.');
        }
      },
      (err) => {
        handleFirestoreError(err, OperationType.LIST, 'admins');
      }
    );

    // 4. Real-time Active Sessions Listener (Live student CBT status & lock monitor)
    const unsubscribeActiveSessions = onSnapshot(
      collection(db, 'active_sessions'),
      (snapshot) => {
        const list: ActiveSession[] = [];
        snapshot.forEach(d => {
          list.push({ id: d.id, ...d.data() } as ActiveSession);
        });
        setActiveSessions(list);
        setIsRealtimeConnected(true);
        setLastSyncTime(new Date().toLocaleTimeString('id-ID'));
      },
      (err) => {
        handleFirestoreError(err, OperationType.LIST, 'active_sessions');
      }
    );

    // Cleanup listeners when component unmounts
    return () => {
      unsubscribeSettings();
      unsubscribeSubmissions();
      unsubscribeAdmins();
      unsubscribeActiveSessions();
    };
  }, []);

  // Save admin session changes
  useEffect(() => {
    if (adminUser) {
      localStorage.setItem('tka_admin_session', JSON.stringify(adminUser));
    } else {
      localStorage.removeItem('tka_admin_session');
    }
  }, [adminUser]);

  // Handle student registration form proceed
  const handleProfileProceed = async (profile: StudentProfile) => {
    const prevPhone = studentProfile?.studentPhone;
    const isDifferentStudent = prevPhone && prevPhone !== profile.studentPhone;

    if (isDifferentStudent) {
      localStorage.removeItem('tka_session_stage');
      localStorage.removeItem('tka_current_index');
      localStorage.removeItem('tka_session1_time');
      localStorage.removeItem('tka_break_time');
      localStorage.removeItem('tka_session2_time');
      localStorage.removeItem('tka_cbt_answers');
      localStorage.removeItem('tka_cbt_flagged');
      localStorage.removeItem('tka_violation_count');
      localStorage.removeItem('tka_exam_locked');
      localStorage.removeItem('tka_lock_deadline');
    }

    setStudentProfile(profile);
    localStorage.setItem('tka_student_profile', JSON.stringify(profile));
    setCurrentView('instructions');

    try {
      const sanitizedPhone = profile.studentPhone.replace(/[^a-zA-Z0-9]/g, '') || `id_${Date.now()}`;
      const sessionRef = doc(db, 'active_sessions', `sess_${sanitizedPhone}`);
      const existingSnap = await getDoc(sessionRef);
      const existingData = existingSnap.exists() ? (existingSnap.data() as Partial<ActiveSession>) : null;

      // Keep existing lock state if student attempts to re-register while locked
      const isCurrentlyLocked = existingData?.status === 'locked';

      await setDoc(sessionRef, {
        studentPhone: profile.studentPhone,
        studentName: profile.fullName,
        schoolOrigin: profile.schoolOrigin,
        homeAddress: profile.homeAddress,
        parentPhone: profile.parentPhone,
        packetType: settings.activePacketType,
        ...(isCurrentlyLocked
          ? {}
          : {
              status: 'instructions',
              sessionStage: 'instructions',
              answers: {},
              flagged: {},
              violationCount: 0,
              answeredCount: 0,
              lockReason: ''
            }),
        registeredAt: existingData?.registeredAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, { merge: true });
      console.log('⚡ Student registration synced to Firebase active_sessions');
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'active_sessions');
    }
  };

  // Start CBT Exam
  const handleStartCbt = () => {
    setCurrentView('cbt');
  };

  // Handle final CBT submission (normal completion or violation auto-generate)
  const handleSubmitExam = async (
    answers: Record<number, string>,
    flagged: Record<number, boolean>,
    meta?: {
      completionStatus?: 'completed' | 'terminated_violation';
      violationCount?: number;
      terminationReason?: string;
    }
  ) => {
    if (!studentProfile) return;

    const evalResult = evaluateExam(settings.activePacketType, answers);
    const submissionId = `sub_${Date.now()}`;
    const nowIso = new Date().toISOString();
    const completionStatus = meta?.completionStatus || 'completed';
    const violationCount = meta?.violationCount ?? 0;
    const terminationReason = meta?.terminationReason || '';

    const newSubmission: ExamSubmission = {
      id: submissionId,
      studentName: studentProfile.fullName,
      schoolOrigin: studentProfile.schoolOrigin,
      homeAddress: studentProfile.homeAddress,
      studentPhone: studentProfile.studentPhone,
      parentPhone: studentProfile.parentPhone,
      packetType: settings.activePacketType,
      totalScore: evalResult.totalScore,
      indonesianScore: evalResult.indonesianScore,
      mathScore: evalResult.mathScore,
      totalCorrect: evalResult.totalCorrect,
      totalWrong: evalResult.totalWrong,
      totalBlank: evalResult.totalBlank,
      answers,
      subTopicAnalysis: evalResult.subTopicAnalysis,
      recommendations: evalResult.recommendations,
      startedAt: nowIso,
      completedAt: nowIso,
      createdAt: new Date().toLocaleString('id-ID'),
      completionStatus,
      violationCount,
      terminationReason
    };

    // Save locally
    setCurrentSubmission(newSubmission);
    localStorage.setItem('tka_last_submission', JSON.stringify(newSubmission));

    setSubmissions(prev => {
      const updated = [newSubmission, ...prev.filter(item => item.id !== submissionId)];
      localStorage.setItem('tka_all_submissions', JSON.stringify(updated));
      return updated;
    });

    // Save to Firebase Firestore
    try {
      await setDoc(doc(db, 'submissions', submissionId), {
        studentName: newSubmission.studentName,
        schoolOrigin: newSubmission.schoolOrigin,
        homeAddress: newSubmission.homeAddress,
        studentPhone: newSubmission.studentPhone,
        parentPhone: newSubmission.parentPhone,
        packetType: newSubmission.packetType,
        totalScore: newSubmission.totalScore,
        indonesianScore: newSubmission.indonesianScore,
        mathScore: newSubmission.mathScore,
        totalCorrect: newSubmission.totalCorrect,
        totalWrong: newSubmission.totalWrong,
        totalBlank: newSubmission.totalBlank,
        answers: newSubmission.answers,
        subTopicAnalysis: newSubmission.subTopicAnalysis,
        recommendations: newSubmission.recommendations,
        startedAt: newSubmission.startedAt,
        completedAt: newSubmission.completedAt,
        createdAt: nowIso,
        completionStatus,
        violationCount,
        terminationReason
      });
      console.log('Submission successfully persisted to Firebase Firestore!');

      // Mark session status in active_sessions
      const sanitizedPhone = studentProfile.studentPhone.replace(/[^a-zA-Z0-9]/g, '') || 'guest';
      await setDoc(doc(db, 'active_sessions', `sess_${sanitizedPhone}`), {
        status: completionStatus === 'terminated_violation' ? 'terminated' : 'completed',
        completedSubmissionId: submissionId,
        violationCount,
        lockReason: terminationReason,
        updatedAt: nowIso
      }, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `submissions/${submissionId}`);
    }

    setCurrentView('result');
  };

  // Handle remote exam termination triggered by Admin from dashboard
  const handleRemoteTerminated = (submission: ExamSubmission) => {
    setCurrentSubmission(submission);
    localStorage.setItem('tka_last_submission', JSON.stringify(submission));
    setSubmissions(prev => {
      const exists = prev.some(s => s.id === submission.id);
      if (exists) return prev;
      const updated = [submission, ...prev];
      localStorage.setItem('tka_all_submissions', JSON.stringify(updated));
      return updated;
    });
    setCurrentView('result');
  };

  // Admin: Unlock a locked student session in real-time so student can continue
  const handleUnlockSession = async (sessionId: string) => {
    const nowIso = new Date().toISOString();
    try {
      await setDoc(doc(db, 'active_sessions', sessionId), {
        status: 'unlocked',
        violationCount: 0,
        lockReason: '',
        lockDeadlineAt: '',
        unlockedAt: nowIso,
        unlockedBy: adminUser?.email || 'Admin',
        updatedAt: nowIso
      }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `active_sessions/${sessionId}`);
    }
  };

  // Admin: Force-generate submission for a locked student session (unconfirmed / finalized)
  const handleFinalizeLockedSession = async (session: ActiveSession) => {
    const packet = session.packetType || settings.activePacketType;
    const sessionAnswers = session.answers || {};
    const evalResult = evaluateExam(packet, sessionAnswers);
    const submissionId = `sub_${Date.now()}`;
    const nowIso = new Date().toISOString();
    const terminationReason = 'Tidak dapat menyelesaikan tes karena keluar dari halaman tes sebanyak 3 kali';

    const newSubmission: ExamSubmission = {
      id: submissionId,
      studentName: session.studentName,
      schoolOrigin: session.schoolOrigin || '-',
      homeAddress: session.homeAddress || '-',
      studentPhone: session.studentPhone,
      parentPhone: session.parentPhone || session.studentPhone,
      packetType: packet,
      totalScore: evalResult.totalScore,
      indonesianScore: evalResult.indonesianScore,
      mathScore: evalResult.mathScore,
      totalCorrect: evalResult.totalCorrect,
      totalWrong: evalResult.totalWrong,
      totalBlank: evalResult.totalBlank,
      answers: sessionAnswers,
      subTopicAnalysis: evalResult.subTopicAnalysis,
      recommendations: evalResult.recommendations,
      startedAt: session.registeredAt || nowIso,
      completedAt: nowIso,
      createdAt: nowIso,
      completionStatus: 'terminated_violation',
      violationCount: session.violationCount || 3,
      terminationReason
    };

    try {
      await setDoc(doc(db, 'submissions', submissionId), newSubmission);
      await setDoc(doc(db, 'active_sessions', session.id), {
        status: 'terminated',
        completedSubmissionId: submissionId,
        lockReason: terminationReason,
        updatedAt: nowIso
      }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `submissions/${submissionId}`);
    }
  };

  // Update App Settings
  const handleUpdateSettings = async (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('tka_app_settings', JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'app_settings', 'config'), {
        ...updated,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'app_settings/config');
    }
  };

  // Add new admin
  const handleAddAdmin = async (email: string, name: string) => {
    const newAdmin: AdminAccount = {
      id: `adm_${Date.now()}`,
      email,
      name,
      role: 'admin',
      createdAt: new Date().toISOString().slice(0, 10)
    };
    setAdminAccounts(prev => [...prev, newAdmin]);

    try {
      await setDoc(doc(db, 'admins', newAdmin.id), newAdmin);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `admins/${newAdmin.id}`);
    }
  };

  // Delete admin
  const handleDeleteAdmin = async (id: string) => {
    setAdminAccounts(prev => prev.filter(a => a.id !== id));
    try {
      await deleteDoc(doc(db, 'admins', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `admins/${id}`);
    }
  };

  // Delete submission
  const handleDeleteSubmission = async (id: string) => {
    setSubmissions(prev => {
      const filtered = prev.filter(s => s.id !== id);
      localStorage.setItem('tka_all_submissions', JSON.stringify(filtered));
      return filtered;
    });

    try {
      await deleteDoc(doc(db, 'submissions', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `submissions/${id}`);
    }
  };

  // Active question set based on settings
  const currentQuestions = getQuestionsByPacket(settings.activePacketType);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        settings={settings}
        adminUser={adminUser}
        onOpenAdminLogin={() => setIsLoginModalOpen(true)}
        onLogoutAdmin={() => {
          setAdminUser(null);
          setCurrentView('landing');
        }}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentView === 'landing' && (
          <LandingPage
            settings={settings}
            onStartExam={() => setCurrentView('register')}
            onOpenAdmin={() => {
              if (adminUser) setCurrentView('admin');
              else setIsLoginModalOpen(true);
            }}
          />
        )}

        {currentView === 'register' && (
          <StudentRegistration
            settings={settings}
            onProceed={handleProfileProceed}
            onBack={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'instructions' && studentProfile && (
          <ExamInstructions
            profile={studentProfile}
            settings={settings}
            onStartCbt={handleStartCbt}
            onBackToRegister={() => setCurrentView('register')}
          />
        )}

        {currentView === 'cbt' && studentProfile && (
          <CbtExamView
            questions={currentQuestions}
            profile={studentProfile}
            settings={settings}
            onSubmitExam={handleSubmitExam}
            onRemoteTerminated={handleRemoteTerminated}
          />
        )}

        {currentView === 'result' && currentSubmission && (
          <StudentResult
            submission={currentSubmission}
            settings={settings}
            onBackToHome={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'admin' && adminUser && (
          <AdminDashboard
            adminUser={adminUser}
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            submissions={submissions}
            activeSessions={activeSessions}
            onUnlockSession={handleUnlockSession}
            onFinalizeLockedSession={handleFinalizeLockedSession}
            adminAccounts={adminAccounts}
            onAddAdmin={handleAddAdmin}
            onDeleteAdmin={handleDeleteAdmin}
            onDeleteSubmission={handleDeleteSubmission}
            isRealtimeConnected={isRealtimeConnected}
            lastSyncTime={lastSyncTime}
          />
        )}
      </div>

      {/* Footer */}
      {currentView !== 'cbt' && (
        <Footer
          settings={settings}
          onStartExam={() => setCurrentView('register')}
          onOpenAdmin={() => {
            if (adminUser) setCurrentView('admin');
            else setIsLoginModalOpen(true);
          }}
        />
      )}

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        adminAccountsList={adminAccounts}
        onSuccessLogin={(admin) => {
          setAdminUser(admin);
          setCurrentView('admin');
        }}
      />
    </div>
  );
}
