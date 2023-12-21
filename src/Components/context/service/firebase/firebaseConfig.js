import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAMfG8jOyNdzWceRXaJEEF6_y41M4RD9PU",
authDomain: "compraclic-ad321.firebaseapp.com",
projectId: "compraclic-ad321",
storageBucket: "compraclic-ad321.appspot.com",
messagingSenderId: "551489314602",
appId: "1:551489314602:web:8583050428b92875d40853"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

