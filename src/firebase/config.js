import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuSBYOZlgD0BculP95y-lV2XVApi2XvUs",
  authDomain: "site-de-carro-new.firebaseapp.com",
  projectId: "site-de-carro-new",
  storageBucket: "site-de-carro-new.appspot.com",
  messagingSenderId: "413850205425",
  appId: "1:413850205425:web:b665a185f7e47ff1e73d50"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};