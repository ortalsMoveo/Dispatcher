import { createSlice } from "@reduxjs/toolkit";

interface RecentSearches {
  recentSearches: string[];
}

const initialState: RecentSearches = { recentSearches: [] };

const recentSearchesSlice = createSlice({
  name: "filterType",
  initialState,
  reducers: {
    updateRecentSearches: (state, action) => {
      console.log(action.payload);
      const arr = state.recentSearches;
      return {
        //     ...state,
        //   recentSearches.push(action.payload),
        recentSearches: [arr, action.payload],
      };
    },
  },
});

export const { updateRecentSearches } = recentSearchesSlice.actions;

export default recentSearchesSlice.reducer;
