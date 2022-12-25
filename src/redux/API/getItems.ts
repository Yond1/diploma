import { Categories } from "./../../helpers/models/index";
import { API } from "helpers/Api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item, Size } from "helpers/models";

export const ItemsApi = createApi({
  reducerPath: "Items",
  baseQuery: fetchBaseQuery({ baseUrl: API.main }),
  endpoints: (builder) => ({
    getTop: builder.query<Item<Size>[], void>({
      query: () => API.sales,
    }),
    getItem: builder.query<Item<Size>, unknown>({
      query: (itemId) => API.items + "/" + itemId,
    }),
    getCatalog: builder.query<Item<Size>[], void>({
      query: () => API.items,
    }),
    getCategories: builder.query<Categories[], void>({
      query: () => API.categories,
    }),
    getItemsByCategory: builder.query<Item<Size>[], number>({
      query: (catId) => API.itemByCategory + catId,
    }),
    getItemsByName: builder.query<Item<Size>[], string>({
      query: (name) => API.ItemByName + name,
    }),
  }),
});

export const {
  useGetTopQuery,
  useGetItemQuery,
  useGetCatalogQuery,
  useGetCategoriesQuery,
  useGetItemsByCategoryQuery,
  useGetItemsByNameQuery
} = ItemsApi;
