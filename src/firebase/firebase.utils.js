import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyD_IIa0f7QkrCCbyQp-AqZylLIHJsA1rU8",

    authDomain: "crwn-db-8b6a5.firebaseapp.com",

    projectId: "crwn-db-8b6a5",

    storageBucket: "crwn-db-8b6a5.appspot.com",

    messagingSenderId: "620210208863",

    appId: "1:620210208863:web:b3766f6721c5fc94519bea",

    measurementId: "G-G8YV3KSC1M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
