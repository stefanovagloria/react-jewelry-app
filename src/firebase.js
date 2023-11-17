import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvcSZYc_Ions6pqbSVI51sRtwqHoZDl2k",
  authDomain: "jewelry-app-550f2.firebaseapp.com",
  databaseURL: "https://jewelry-app-550f2-default-rtdb.firebaseio.com",
  projectId: "jewelry-app-550f2",
  storageBucket: "jewelry-app-550f2.appspot.com",
  messagingSenderId: "776564391858",
  appId: "1:776564391858:web:9199f2cb4c4ded1e772eab",
  measurementId: "G-N5GCH9PTY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app)