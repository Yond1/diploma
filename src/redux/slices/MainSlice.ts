import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem, ISize, } from "helpers/models";



const initialState = {
  data: [] as IItem<ISize>[],
  text: '' as string
};

export const MainSlice = createSlice({
  name: "@@main",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data =  action.payload;
    },
    getTextInput: (state, action) => {
      state.text = action.payload
    }
  },
});

export const MainReducer = MainSlice.reducer
export const { getData, getTextInput } = MainSlice.actions