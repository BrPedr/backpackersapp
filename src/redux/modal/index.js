import { ModalActionTypes } from "./types";

export const showModal = (modalType) => (dispatch) => {  
  dispatch({
    type: ModalActionTypes.SHOW_MODAL,
    payload: modalType,
  });
};

export const hideModal = (modalType) => (dispatch) => {
  dispatch({
    type: ModalActionTypes.HIDE_MODAL,
    payload: modalType,
  });
};
