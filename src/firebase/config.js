import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9iiRZ8Y8k61wtqhlNFgOncngs03G2yB0",
  authDomain: "miniblog-9be6a.firebaseapp.com",
  projectId: "miniblog-9be6a",
  storageBucket: "miniblog-9be6a.appspot.com",
  messagingSenderId: "38006597053",
  appId: "1:38006597053:web:bc76572994bfc2f6a91ed4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
