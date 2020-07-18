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

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return null;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exist){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;