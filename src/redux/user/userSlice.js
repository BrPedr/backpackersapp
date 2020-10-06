import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ user: null }];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user(action.payload);
    },
  },
});

export default userSlice.reducer;