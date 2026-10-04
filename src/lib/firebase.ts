import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// =====================================================
// SafeKidGo Firebase Configuration
// =====================================================

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// =====================================================
// Validate Firebase configuration
// =====================================================

const requiredConfig = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
};

const missingConfig = Object.entries(requiredConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfig.length > 0) {
  console.error(
    "Firebase configuration is missing:",
    missingConfig
  );
}

// =====================================================
// Initialize Firebase
// =====================================================

const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

// =====================================================
// Firebase Authentication
// =====================================================

export const auth = getAuth(app);

// =====================================================
// Firestore
// =====================================================

export const db = getFirestore(app);

// =====================================================
// Export Firebase app
// =====================================================

export default app;