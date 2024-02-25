import merchantSlice from "./slice/merchant/slice";
import { pokemonApi } from "./slice/merchant/requests";
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { create } from "zustand";
import { ZustandStore } from "@/models/redux/zustand-store-model";
import { persist } from "zustand/middleware";

export const store = configureStore({
  reducer: {
    merchant: merchantSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export const useZustandStore = create<ZustandStore>()(
  persist(
    (set) => ({
      user: {
        access_token: "",
        email: "",
        id: "",
        type: "",
        username: "",
      },
      setUser: (data) => set(() => ({ user: data })),
      plugin: {
        id: "",
        name: "",
        description: "",
        content: "",
        category_id: "",
        version: "",
        tags: [],
        related_content: [],
        logo_addr: "",
        file: "",
        created_at: "",
        updated_at: "",
        downloads: 0,
        creator_id: "",
        creator_user: "",
        creator_email: "",
        category_title: "",
      },
      setPlugin: (data) => set(() => ({ plugin: data })),
    }),
    {
      name: "zustand-storage",
    }
  )
);
