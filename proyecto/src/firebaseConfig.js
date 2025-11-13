import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACUhD4-bDIkPEEVYfTiz3j-MkydJwhGrE",
  authDomain: "pokeapi-b3af8.firebaseapp.com",
  projectId: "pokeapi-b3af8",
  storageBucket: "pokeapi-b3af8.firebasestorage.app",
  messagingSenderId: "285860553536",
  appId: "1:285860553536:web:013e0713a8ee2a270910a5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };