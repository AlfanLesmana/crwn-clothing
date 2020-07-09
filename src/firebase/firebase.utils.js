import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuzfddJd17LK0wB7xwPuVVi8rJ32l0Jag",
    authDomain: "crwn-db-77c4b.firebaseapp.com",
    databaseURL: "https://crwn-db-77c4b.firebaseio.com",
    projectId: "crwn-db-77c4b",
    storageBucket: "crwn-db-77c4b.appspot.com",
    messagingSenderId: "288245306199",
    appId: "1:288245306199:web:104904f35100941c43e412"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;