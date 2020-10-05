import { createSlice } from "@reduxjs/toolkit";

const initialState = { cardsList: [] };

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCardsList: (state, action) => {
      state.cardsList.push(action.payload);
    },
    deleteCardsList: (state, action) => {
      state.cardsList.splice(action.payload, 1);
    },
  },
});

export const { createCardsList, deleteCardsList } = cardsSlice.actions;

export default cardsSlice.reducer;
