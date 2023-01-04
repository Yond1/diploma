import { IItem } from "./../../helpers/models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICart {
  id: number | string;
  title: string;
  size: number | string | undefined;
  count: number;
  price: number;
  totalPrice: number;
}

interface Carts<T> {
  items: T[];
}

const initialState: Carts<ICart> = {
  items: [] as ICart[],
};

export const CartSlice = createSlice({
  initialState,
  name: "@@/cart",
  reducers: {
    addCart: (state, action: PayloadAction<ICart>) => {
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const { addCart, deleteItem } = CartSlice.actions;
