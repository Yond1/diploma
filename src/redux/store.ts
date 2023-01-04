import { ItemsApi } from "./API/getItems";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/CartSlice";
import { MainReducer } from "./slices/MainSlice";
import {
  localMiddleware,
  reHydrateStore,
} from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    [ItemsApi.reducerPath]: ItemsApi.reducer,
    cart: cartReducer,
    main: MainReducer,
  },
  preloadedState: {
    cart: {
      items: reHydrateStore(),
    },
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ItemsApi.middleware).concat(localMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
