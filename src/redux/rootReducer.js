import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/reducer";
import modalReducer from "./modal/reducer";
import cardReducer from "./card/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  card: cardReducer,
});

export default persistReducer(persistConfig, rootReducer);
