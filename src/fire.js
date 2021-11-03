import firebase  from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyDNEfhJvKEgmphtLekEmF8dMOcLy5KyMUs",
    authDomain: "cupones-da69a.firebaseapp.com",
    projectId: "cupones-da69a",
    storageBucket: "cupones-da69a.appspot.com",
    messagingSenderId: "828922971577",
    appId: "1:828922971577:web:0427320db769fcc867e268",
    measurementId: "G-1GTSQ2KQXT"
};



export const fire = firebase.initializeApp(firebaseConfig);
