import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoManhzrHbp3irJLsNPENsZ9FU_7mFwXw",
  authDomain: "kreed-v2.firebaseapp.com",
  projectId: "kreed-v2",
  storageBucket: "kreed-v2.appspot.com",
  messagingSenderId: "841404727416",
  appId: "1:841404727416:web:4eee9f9f95016f59536d8d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);