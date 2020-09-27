import { UserActionTypes } from "./types";

import { auth } from "../../firebase/firebase.utils";

export const setCurrentUser = (user) => async (dispatch) => {
  const response = user;

  dispatch({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: response,
  });
};
