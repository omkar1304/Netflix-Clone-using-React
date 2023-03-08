import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {                    
    apiKey: "AIzaSyCrshTc_Td15lspAz-BV0uoMVk7R-ujnTA",
    authDomain: "netflix-clone-8b801.firebaseapp.com",
    projectId: "netflix-clone-8b801",
    storageBucket: "netflix-clone-8b801.appspot.com",
    messagingSenderId: "397130194235",
    appId: "1:397130194235:web:86e6244004979ebc5f2b1e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};