// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const filePath = "applications/74d2b3b0-a07f-44e4-92d2-950397a7b0a7/proofOfResidencePhoto_1755105924987.jpeg";
const fileRef = ref(storage, filePath);

getDownloadURL(fileRef)
  .then((url) => {
    console.log("URL pública:", url);
    document.querySelector("#foto").src = url;
  })
  .catch((error) => {
    console.error("Erro ao pegar URL:", error);
  });
const firebaseConfig = {
  apiKey: "AIzaSyBfADQYaRc8EQFppGQnVNpD6XBai50totE",
  authDomain: "meuprojeto-257f0.firebaseapp.com",
  projectId: "meuprojeto-257f0",
  storageBucket: "meuprojeto-257f0.firebasestorage.app",
  messagingSenderId: "710773486236",
  appId: "1:710773486236:web:e9529bab7f7ec7c80bf359",
  measurementId: "G-05PKZ06N10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

signInAnonymously(auth).catch((error) => {
  console.error("Erro na autenticação anônima:", error);
});

export { db, auth };
