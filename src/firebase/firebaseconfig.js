import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW4oOxfrM8hdHZ0-DJGGIQ-fthpg7pB7I",
  authDomain: "pragon-f35d1.firebaseapp.com",
  projectId: "pragon-f35d1",
  storageBucket: "pragon-f35d1.appspot.com",
  messagingSenderId: "234279706744",
  appId: "1:234279706744:web:70a35c6514a23c4dba8d8d"
};


const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);