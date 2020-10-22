import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cardsList: [],
  currentCard: { id: "", user: "", location: "" },
  status: "idle",
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCardsList: {
      reducer(state, action) {
        state.cardsList.push(action.payload);
      },
      prepare(
        userId,
        location,
        cardId,
        routes,
        adressess,
        calendar,
        documents,
        lastModified
      ) {
        return {
          payload: {
            id: cardId,
            user: userId,
            location,
            routes: "",
            adressess: "",
            calendar: "",
            documents,
            lastModified: new Date(),
          },
        };
      },
    },
    deleteCardsList: (state, action) => {
      state.cardsList.splice(action.payload, 1);
    },
    getCurrentCard(state, action) {
      const { id } = action.payload;
      const hasCard = state.cardsList.find((card) => card.id === id);
      if (hasCard) {
        state.currentCard.id = id;
        state.currentCard.user = hasCard.user;
        state.currentCard.location = hasCard.location;
        state.currentCard.calendar = hasCard.calendar;
      }
    },
    updateCard(state, action) {
      const { id, fromDate, toDate } = action.payload;
      const hasCard = state.cardsList.find((card) => card.id === id);
      if (hasCard) {
        hasCard.id = id;
        hasCard.calendar = { fromDate: fromDate, toDate: toDate };
        hasCard.lastModified = new Date();
        // hasCard.documents = documents;
      }
    },
    updateCardDocuments(state, action) {
      const { id, documents } = action.payload;
      const hasCard = state.cardsList.find((card) => card.id === id);
      if (hasCard) {
        hasCard.id = id;
        hasCard.documents = documents;
        hasCard.lastModified = new Date();
      }
    },
  },
});

export const {
  createCardsList,
  deleteCardsList,
  getCurrentCard,
  updateCard,
  updateCardDocuments,
} = cardsSlice.actions;

export const selectAllCards = (state) => state.cards.cardsList;

export const selectCurrentCard = (state) => state.cards.currentCard;

export const selectCardsById = (state, cardId) =>
  state.cards.cardsList.find((card) => card.id === cardId);

export default cardsSlice.reducer;
