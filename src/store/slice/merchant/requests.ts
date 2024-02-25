import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const fetchContent = createAsyncThunk(
    "content/fetchContent",
    async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/photos");
      const data = await res.data;
      return data;
    }
  );






// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi