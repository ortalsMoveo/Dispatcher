import { configureStore } from "@reduxjs/toolkit";
import filtersState from "./filtersState";
import filterType from "./filterType";
import recentSearchesState from "./recentSearchesState";

const store = configureStore({
  reducer: {
    filters: filtersState,
    filterType: filterType,
    recentSearchesState,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
