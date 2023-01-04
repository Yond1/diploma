import { ICategories } from "./../../helpers/models/index";
import { API } from "helpers/Api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItem, ISize } from "helpers/models";

export const ItemsApi = createApi({
  reducerPath: "Items",
  baseQuery: fetchBaseQuery({ baseUrl: API.main }),
  endpoints: (builder) => ({
    getTop: builder.query<IItem<ISize>[], void>({
      query: () => API.sales,
    }),
    getItem: builder.query<IItem<ISize>, unknown>({
      query: (itemId) => API.items + "/" + itemId,
    }),
    getCatalog: builder.query<IItem<ISize>[], [number, number, string]>({
      query: ([offset, category, name = ""]) =>
        API.items +
        (name.length > 3 ? "?q=" + name + "&" : "?") +
        "categoryId=" +
        category +
        "&offset=" + offset,
    }),
    getFirstitems: builder.query<IItem<ISize>[], void>({
      query: () => API.items,
    }),
    getCategories: builder.query<ICategories[], void>({
      query: () => API.categories,
    }),
    getItemsByCategory: builder.query<IItem<ISize>[], number>({
      query: (catId) => API.itemByCategory + catId,
    }),
    postOrderItems: builder.mutation({
      query: post => ({
        url: '/api/order',
        method: 'POST',
        body: post
      })
    })
  }),
});

export const {
  usePostOrderItemsMutation,
  useGetFirstitemsQuery,
  useGetTopQuery,
  useGetItemQuery,
  useGetCatalogQuery,
  useGetCategoriesQuery,
  useGetItemsByCategoryQuery,
} = ItemsApi;
