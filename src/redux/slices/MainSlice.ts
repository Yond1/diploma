import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  success: false,
};

export const MainSlice = createSlice({
  name: "@@main",
  initialState,
  reducers: {
    getAll: (state) => {
        
    }
  },
});
