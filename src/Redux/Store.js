import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "./Reducer";

const Store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default Store;
