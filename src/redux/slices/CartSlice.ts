import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const CartSlice = createSlice({
  initialState,
  name: "@@/cart",
  reducers: {},
});
