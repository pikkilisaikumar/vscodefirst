import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  language: "TE",
};

const LanguageReducer = createSlice({
  name: "languageConversion",
  initialState: intialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      //   state.language = action.payload
    },
  },
});

export const { changeLanguage } = LanguageReducer.actions;

export default LanguageReducer.reducer;
