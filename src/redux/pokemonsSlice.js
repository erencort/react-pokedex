import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const limit = 100;
let offset = 0;

export const fetchPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}pokemon?limit=${limit}&offset=${offset}`
    );
    return res.data;
  }
);

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    isAllDataFetched: false,
  },
  reducers: {},
  extraReducers: {
    [fetchPokemons.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      state.status = "completed";
      state.items = [...state.items, ...action.payload.results];
      offset += 111;
      if (offset >= 888) {
        state.isAllDataFetched = true;
      }
    },
    [fetchPokemons.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default pokemonsSlice.reducer;
