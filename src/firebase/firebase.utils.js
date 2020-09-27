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

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error);
  });
