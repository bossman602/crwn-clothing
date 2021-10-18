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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //setting userRef to the userAuth.uid of any users that have authenticated
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //getting the snapshot (collection of data owned by the user)
    const snapshot = await userRef.get();

    // if there is no snapshot data, then set the displayName and email of the authenticated user.
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        //try creating a user in the database with the displayName, email, createdAt and any additional data
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    //return the userRef incase it is needed elsewhere ( see componentDidMount() in App.js)
    return userRef;


};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();

};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
