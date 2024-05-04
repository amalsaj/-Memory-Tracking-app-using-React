import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAigGRdWl2FR2lgBiNkqc37O2gJIeWu9II",
  authDomain: "sample-project-e7deb.firebaseapp.com",
  projectId: "sample-project-e7deb",
  storageBucket: "sample-project-e7deb.appspot.com",
  messagingSenderId: "174655143695",
  appId: "1:174655143695:web:457235735bea5e8460087a",
  measurementId: "G-X3G9NJRJC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
