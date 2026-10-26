// Inisialisasi Firebase untuk Standalone JS / Deployment Vercel / External
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyCCgvnLI4ckeOwBooxukSa_Z8dzdeKNlxY",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "mdtech-arena.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "mdtech-arena",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "mdtech-arena.firebasestorage.app",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1008786092212",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:1008786092212:web:db121cb1079b47622fe7e1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
