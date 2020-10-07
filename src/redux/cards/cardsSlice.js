import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { cardsList: [], status: "idle", error: null };

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
  },
});

export const { createCardsList, deleteCardsList } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards.cardsList;

export const selectCardsById = (state, cardId) =>
  state.cards.cardsList.find((card) => card.id === cardId);

export default cardsSlice.reducer;
