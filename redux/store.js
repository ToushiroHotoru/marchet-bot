import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import basketReducer from "./basket";
import userReducer from "./user";

// общий reducer для всех состояний

export default configureStore({
  reducer: {
    basket: basketReducer,
    counter: counterReducer,
    user: userReducer,
  },
});
