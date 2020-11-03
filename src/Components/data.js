import * as firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyClUmZwYb2qXIoUmH9Mb_h3cG_mlp240Es",
    authDomain: "contactproject-417ba.firebaseapp.com",
    databaseURL: "https://contactproject-417ba.firebaseio.com",
    projectId: "contactproject-417ba",
    storageBucket: "contactproject-417ba.appspot.com",
    messagingSenderId: "553025843254",
    appId: "1:553025843254:web:4ec35a6a250544b8092897",
    measurementId: "G-LLPVWELCXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const contactDB = firebase.database().ref('contact');
