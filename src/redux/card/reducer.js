import { CardActionTypes } from "./types";

const INITIAL_STATE = [];

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.CREATE_CARDS_LIST:
      return { ...state, ...Object.values(state).concat(action.payload) };
    case CardActionTypes.DELETE_CARDS_LIST:
      return [
        ...Object.values(state).slice(0, action.payload),
        ...Object.values(state).slice(
          action.payload + 1,
          Object.values(state).length
        ),
      ];

    default:
      return state;
  }
};

export default cardReducer;

// import { CardActionTypes } from "./types";

// const INITIAL_STATE = [];

// const cardReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case CardActionTypes.CREATE_CARDS_LIST:
//       return { ...state, [action.payload]: action.payload };
//     case CardActionTypes.DELETE_CARDS_LIST:
//       return [
//         ...Object.values(state).slice(0, action.payload),
//         ...Object.values(state).slice(
//           action.payload + 1,
//           Object.values(state).length
//         ),
//       ];

//     default:
//       return state;
//   }
// };

// export default cardReducer;
