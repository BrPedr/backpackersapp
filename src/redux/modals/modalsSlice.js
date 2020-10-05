import { createSlice } from "@reduxjs/toolkit";

const initialState = [null];

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state[0] = action.payload;
    },
    hideModal: (state) => {
      state[0] = null;
    },
  },
});

export const { showModal, hideModal } = modalsSlice.actions;

export default modalsSlice.reducer;
