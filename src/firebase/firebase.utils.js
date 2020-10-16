import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0fkT2RxCXu451r5PvR79owIt9bWkbpwY",
  authDomain: "backpackers-98e5f.firebaseapp.com",
  databaseURL: "https://backpackers-98e5f.firebaseio.com",
  projectId: "backpackers-98e5f",
  storageBucket: "backpackers-98e5f.appspot.com",
  messagingSenderId: "266877345506",
  appId: "1:266877345506:web:5406914337a820947f08bb",
  measurementId: "G-XKDPGELVQH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error);
  });
