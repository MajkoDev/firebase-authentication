import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "auth-development-4c5fa",
  storageBucket: "auth-development-4c5fa.appspot.com",
  messagingSenderId: "1057225414124",
  appId: "1:1057225414124:web:debda3e3a972999d791cc9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
