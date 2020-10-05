import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [reduxThunk, logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);

export default { store, persistor };
