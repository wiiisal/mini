// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDj4CYR6cN7T5E9gob8nUW4dNJj--iSd4U",
    authDomain: "mini-aa200.firebaseapp.com",
    projectId: "mini-aa200",
    storageBucket: "mini-aa200.appspot.com",
    messagingSenderId: "18322001813",
    appId: "1:18322001813:web:dff17b9c080e8c22e9b09c",
    measurementId: "G-4HWBL2NQL0"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;