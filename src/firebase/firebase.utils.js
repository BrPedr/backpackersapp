import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

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

// export const testing = async () => {
//   firestore.collection("testando")
//     .add({
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });
// }

export const createCardsDocument = async (userAuth, cardId, location) => {
  const createdAt = new Date();
  const lastModified = new Date();
  const cardsRef = firestore.doc(`users/${userAuth}/cards/${cardId}`);
  // const snapShot = await cardsRef.get();

  try {
    await cardsRef.set({
      createdAt,
      lastModified,
      location,
      id: cardId,
    });
  } catch (error) {
    console.log("error creating card", error.message);
  }

  // if (!userAuth || !cards.length) return;

  // cards.forEach(async (card) => {
  //   const createdAt = new Date();
  //   const cardsRef = firestore.doc(`users/${userAuth.uid}/cards/${card.id}`);
  //   const snapShot = await cardsRef.get();

  //   try {
  //     await cardsRef.set({
  //       card,
  //       createdAt,
  //     });
  //   } catch (error) {
  //     console.log("error creating card", error.message);
  //   }

  //   return snapShot;
  // });
};

export const updateFirestoreCardsDocuments = async (
  userAuth,
  cardId,
  documents
) => {
  const cardsRef = firestore.doc(`users/${userAuth}/cards/${cardId}`);
  const lastModified = new Date();
  // const snapShot = await cardsRef.get();

  try {
    // await cardsRef.set({ documents }, { merge: true });
    await cardsRef.update({ documents, lastModified });
  } catch (error) {
    console.log("error udpating card", error.message);
  }

  // return snapShot;
};

// firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});
firestore.enablePersistence();
firebase.firestore().disableNetwork();

export const storage = firebase.storage()
export const storageRef = storage.ref()

export const auth = firebase.auth();

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error);
  });
