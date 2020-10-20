import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userSlice";
import modalsReducer from "./modals/modalsSlice";
import cardReducer from "./cards/cardsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardReducer,
  modals: modalsReducer,
});

export default persistReducer(persistConfig, rootReducer);
