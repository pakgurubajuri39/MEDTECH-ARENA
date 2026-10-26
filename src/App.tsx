import React, { useState, useEffect } from 'react';
import { 
  AppSettings, 
  StudentProfile, 
  ExamSubmission, 
  AdminAccount, 
  PacketType 
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
      showScoreToStudents: true,
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

  // Sync settings and submissions with Firestore on boot
  useEffect(() => {
    async function loadDataFromFirestore() {
      // 1. Fetch App Settings
      try {
        const settingsSnap = await getDoc(doc(db, 'app_settings', 'config'));
        if (settingsSnap.exists()) {
          const remoteSettings = settingsSnap.data() as AppSettings;
          setSettings(prev => ({ ...prev, ...remoteSettings }));
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, 'app_settings/config');
      }

      // 2. Fetch Submissions
      try {
        const subSnap = await getDocs(collection(db, 'submissions'));
        if (!subSnap.empty) {
          const remoteList: ExamSubmission[] = [];
          subSnap.forEach(d => {
            remoteList.push({ id: d.id, ...d.data() } as ExamSubmission);
          });
          // Merge with initialMockSubmissions ensuring unique IDs
          setSubmissions(prev => {
            const combinedMap = new Map<string, ExamSubmission>();
            initialMockSubmissions.forEach(m => combinedMap.set(m.id, m));
            remoteList.forEach(r => combinedMap.set(r.id, r));
            return Array.from(combinedMap.values());
          });
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, 'submissions');
      }
    }

    loadDataFromFirestore();
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
  const handleProfileProceed = (profile: StudentProfile) => {
    setStudentProfile(profile);
    localStorage.setItem('tka_student_profile', JSON.stringify(profile));
    setCurrentView('instructions');
  };

  // Start CBT Exam
  const handleStartCbt = () => {
    setCurrentView('cbt');
  };

  // Handle final CBT submission
  const handleSubmitExam = async (
    answers: Record<number, string>,
    flagged: Record<number, boolean>
  ) => {
    if (!studentProfile) return;

    const evalResult = evaluateExam(settings.activePacketType, answers);
    const submissionId = `sub_${Date.now()}`;
    const nowIso = new Date().toISOString();

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
      createdAt: new Date().toLocaleString('id-ID')
    };

    // Save locally
    setCurrentSubmission(newSubmission);
    localStorage.setItem('tka_last_submission', JSON.stringify(newSubmission));
    
    setSubmissions(prev => {
      const updated = [newSubmission, ...prev];
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
        createdAt: nowIso
      });
      console.log('Submission successfully persisted to Firebase Firestore!');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `submissions/${submissionId}`);
    }

    setCurrentView('result');
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
            adminAccounts={adminAccounts}
            onAddAdmin={handleAddAdmin}
            onDeleteAdmin={handleDeleteAdmin}
            onDeleteSubmission={handleDeleteSubmission}
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
