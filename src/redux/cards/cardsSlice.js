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
      prepare(userId, location, routes, adressess) {
        return {
          payload: {
            id: nanoid(),
            user: userId,
            location,
            routes,
            adressess,
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
      }
    },
  },
});

export const { createCardsList, deleteCardsList, getCurrentCard } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards.cardsList;

export const selectCurrentCard = (state) => state.cards.currentCard;

export const selectCardsById = (state, cardId) =>
  state.cards.cardsList.find((card) => card.id === cardId);

export default cardsSlice.reducer;
