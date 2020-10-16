import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const selectUser = (state) => state.user.currentUser;

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

// const initialState = { currentUser: null };

// export const fetchUser = createAsyncThunk(currentUser, async () => {
//   const response = await signInWithGoogle();

//   return auth.onAuthStateChanged(currentUser);
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//   },
// });

// export default userSlice.reducer;
