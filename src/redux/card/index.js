import { CardActionTypes } from "./types";

export const createCardsList = (formValues) => (dispatch) => {
  dispatch({
    type: CardActionTypes.CREATE_CARDS_LIST,
    payload: formValues,
  });
};

export const deleteCardsList = (index) => (dispatch) => {
  dispatch({
    type: CardActionTypes.DELETE_CARDS_LIST,
    payload: index,
  });
};
