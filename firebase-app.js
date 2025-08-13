// firebase-config.js

// Importa Firebase (usando CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfADQYaRc8EQFppGQnVNpD6XBai50totE",
  authDomain: "meuprojeto-257f0.firebaseapp.com",
  projectId: "meuprojeto-257f0",
  storageBucket: "meuprojeto-257f0.firebasestorage.app",
  messagingSenderId: "710773486236",
  appId: "1:710773486236:web:e9529bab7f7ec7c80bf359",
  measurementId: "G-05PKZ06N10"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Autenticação anônima
const auth = getAuth(app);
signInAnonymously(auth).catch((error) => {
  console.error("Erro na autenticação anônima:", error);
});

// 🔹 Inicializa Firestore com long polling
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // força long polling
  useFetchStreams: false               // evita streaming via fetch
});

export { db, auth };
