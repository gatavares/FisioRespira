import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNLjEXeKaMV6c2g4RYggVVAVRyaKCY2eo",
  authDomain: "fisio-appgpsi.firebaseapp.com",
  projectId: "fisio-appgpsi",
  storageBucket: "fisio-appgpsi.appspot.com",
  messagingSenderId: "981623115240",
  appId: "1:981623115240:web:70b23f1521f7766b1b285d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}