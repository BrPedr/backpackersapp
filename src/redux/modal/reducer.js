import { ModalActionTypes } from "./types";

const INITIAL_STATE = null;

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload,
      };
    case ModalActionTypes.HIDE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default modalReducer;
