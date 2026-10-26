import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, X, AlertCircle, Sparkles } from 'lucide-react';
import { auth, googleProvider, signInWithPopup } from '../firebase';
import { AdminAccount } from '../types';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: (admin: { email: string; role: 'super_admin' | 'admin'; name: string }) => void;
  adminAccountsList: AdminAccount[];
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin,
  adminAccountsList
}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check Super Admin default password requirement: "bajuri39"
    if (password === 'bajuri39') {
      onSuccessLogin({
        email: 'smagmdepok@gmail.com',
        role: 'super_admin',
        name: 'Super Admin SMA Genesis Medicare'
      });
      onClose();
      return;
    }

    // Check if an existing admin account matched by email/password
    const foundAdmin = adminAccountsList.find(
      a => a.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (foundAdmin && password === 'admin123') {
      onSuccessLogin({
        email: foundAdmin.email,
        role: foundAdmin.role,
        name: foundAdmin.name
      });
      onClose();
      return;
    }

    setError('Password atau email salah. Untuk Super Admin, gunakan master password yang telah ditentukan.');
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      if (user.email === 'smagmdepok@gmail.com') {
        onSuccessLogin({
          email: user.email,
          role: 'super_admin',
          name: user.displayName || 'Super Admin SMA Genesis Medicare'
        });
        onClose();
      } else {
        // Check in registered admin accounts
        const found = adminAccountsList.find(
          a => a.email.toLowerCase() === user.email?.toLowerCase()
        );
        if (found) {
          onSuccessLogin({
            email: found.email,
            role: found.role,
            name: user.displayName || found.name
          });
          onClose();
        } else {
          // If not yet registered, allow as regular admin or notify
          onSuccessLogin({
            email: user.email || 'admin@genesismedicareschool.sch.id',
            role: 'admin',
            name: user.displayName || 'Staf Admin'
          });
          onClose();
        }
      }
    } catch (err: any) {
      console.warn('Google sign-in error:', err);
      setError(err?.message || 'Gagal masuk dengan akun Google. Silakan gunakan password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold tracking-tight">Portal Akses Administrator</h3>
          <p className="text-xs text-slate-300 mt-1">
            SMA Genesis Medicare &bull; Hak Akses Super Admin &amp; Staf Marketing
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Info note */}
          <p className="text-xs text-slate-500">
            Silakan masukkan kata sandi akun administrator atau masuk menggunakan akun Google resmi sekolah.
          </p>

          <form onSubmit={handlePasswordLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password / Kunci Akses Admin
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="Masukkan password admin..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all min-h-[44px]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md cursor-pointer transition-all min-h-[44px] flex items-center justify-center"
            >
              Masuk Dashboard Admin
            </button>
          </form>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-xs text-slate-400 uppercase font-semibold">atau</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-slate-700 bg-slate-50 border border-slate-300 hover:bg-slate-100 flex items-center justify-center gap-2.5 transition-all cursor-pointer min-h-[44px]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{loading ? 'Menghubungkan...' : 'Masuk dengan Google (Google Auth)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
