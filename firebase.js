// Inisialisasi Firebase untuk Standalone JS / Deployment Vercel
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyCBt5_Kr7dsoDRE-4YwGhxgkEVkCYFJcP0",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "charming-rigging-gvr20.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "charming-rigging-gvr20",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "charming-rigging-gvr20.firebasestorage.app",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "786972936856",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:786972936856:web:a51589f0603da366b79eed",
  firestoreDatabaseId: process.env.VITE_FIREBASE_DATABASE_ID || "ai-studio-8c55a0ae-f383-4079-9551-3e48cfc2090d"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
