import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    // ...
    apiKey: "AIzaSyAwlgtyfO5cdeOwJHdM9IcN7aeOAjEEckM",
    authDomain: "smartenergy-fe66e.firebaseapp.com",
    databaseURL: "https://smartenergy-fe66e-default-rtdb.firebaseio.com",
    projectId: "smartenergy-fe66e",
    storageBucket: "smartenergy-fe66e.appspot.com",
    messagingSenderId: "61636311524",
    appId: "1:61636311524:web:eacec2e5c0cc09b878eff1",
    measurementId: "G-1C313EB55V"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);