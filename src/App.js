import React from "react";
import { Route, Switch } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";

import Homepage from "./pages/Homepage";
import SignInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import {
  createUserProfileDocument,
  createCardsDocument,
  firestore,
} from "./firebase/firebase.utils";

import { selectUser } from "./redux/user/userSlice";
import { selectAllCards, createCardsList } from "./redux/cards/cardsSlice";

import "./components/ModalRoot/index";

import GlobalStyles from "./styles/GlobalStyles";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const cards = useSelector(selectAllCards);
  const dispatch = useDispatch();

  useEffect(() => {
    createUserProfileDocument(user);

    // const testRef = firestore.collection("testando")
    // testRef.doc("testandomais").set({
    // name: "San Francisco", state: "CA", country: "USA",
    // capital: false, population: 860000,
    // regions: ["west_coast", "norcal"] });

    // const cardsRef = firestore.doc(`users/${user.uid}/cards/${cards[0].id}`);
    // const snap = cardsRef
    //   .get()
    //   .then((doc) => doc.data()).then((data) => console.log(data))

    // const print = [];
    // const testing = async () => {
    //   const getSnapshot = await firestore
    //     .collection("users")
    //     .doc(`${user.uid}`)
    //     .collection("cards")
    //     .get()
    //     .then(function (querySnapshot) {
    //       querySnapshot.forEach(function (doc) {
    //         return print.push(doc.data());
    //       });
    //     });

    //   return getSnapshot;
    // };

    // const testCreateCard = async () => {
    //   await testing();
    //   dispatch(createCardsList(user.uid, print[0].location, print[0].id));
    // };
    // testCreateCard();
    // console.log(print);

    // cardsRef
    //   .get()
    //   .then(function (doc) {
    //     if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting document:", error);
    //   });
  }, [user]);

  // useEffect(() => {
  //   if (!cards) return;

  //   createCardsDocument(user, cards);
  // }, [user, cards]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
        <GlobalStyles />
      </DndProvider>
    </>
  );
}

export default App;
