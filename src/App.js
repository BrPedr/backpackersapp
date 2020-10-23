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
import {
  selectAllCards,
  createCardsList,
  updateCard,
  updateAllCard,
} from "./redux/cards/cardsSlice";

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

    if (!!user) {
      const cardsSnapshot = [];
      const getCardsCollection = async () => {
        const getCardsSnapshot = await firestore
          .collection("users")
          .doc(`${user.uid}`)
          .collection("cards")
          .get({ source: "cache" })
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
var source = doc.metadata.fromCache ? "Local" : "Server";
console.log(" data: ", source);
              return cardsSnapshot.push(doc.data());
            });
          });
        return getCardsSnapshot;
      };

      const createAndUpdateCard = async () => {
        await getCardsCollection();
        if (!cards.length) {
          cardsSnapshot.forEach((cardSnapshot) => {
              console.log(cardsSnapshot.lastModified);
            dispatch(
              createCardsList(user.uid, cardSnapshot.location, cardSnapshot.id)
            );
          });
        }

        // return cardsSnapshot.forEach(cardSnapshot => {
        //   const hasCard = cards.find((card) => card.id === cardSnapshot.id);

        //   if (hasCard.lastModified.toString() !== cardSnapshot.lastModified) {
        //     dispatch(updateAllCard(cardSnapshot.id, cardSnapshot));
        //   }
        // })
      };

      // const createAndUpdateCard = async () => {
      //   await getCardsCollection();
      //   dispatch(
      //     createCardsList(
      //       user.uid,
      //       cardsSnapshot[0].location,
      //       cardsSnapshot[0].id
      //     )
      //   );
      // };
      createAndUpdateCard();
      console.log(cardsSnapshot);

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
    }
  }, []);

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
