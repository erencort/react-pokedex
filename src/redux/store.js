import pokemonsSlice from "./pokemonsSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
  },
});
