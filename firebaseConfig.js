// Import the Firebase SDK modules you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyb3Fa8F_2JZfhgHAcRDknMCy0onBgq4",
  authDomain: "mydoc-1aa7e.firebaseapp.com",
  projectId: "mydoc-1aa7e",
  storageBucket: "mydoc-1aa7e.firebasestorage.app",
  messagingSenderId: "103320563639",
  appId: "1:103320563639:web:38fc2f12fa8ac945704232",
  measurementId: "G-DPHJMKERT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
