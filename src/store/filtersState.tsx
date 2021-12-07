import { createSlice } from "@reduxjs/toolkit";

export interface TopHeadlines {
  country: null | string;
  category: null | string;
  sources: null | string;
}
export interface Everything {
  from: null | string;
  to: null | string;
  language: null | string;
  sortBy: null | string;
  sources: null | string;
}
export interface CurrentFilters {
  q: null | string;
  topHeadlinesFilters: TopHeadlines;
  everythingFilters: Everything;
  pageSize: number | null;
  page: number;
}

const initialState: CurrentFilters = {
  q: null,
  pageSize: 10,
  page: 1,
  topHeadlinesFilters: {
    country: "il",
    category: null,
    sources: null,
  },
  everythingFilters: {
    from: null,
    to: null,
    language: null,
    sortBy: null,
    sources: null,
  },
};

const filtersSlice = createSlice({
  name: "filtersState",
  initialState,
  reducers: {
    updateQ: (state, action) => {
      state.q = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    updateTopFilters: (state, action) => {
      if (action.type === "Country") {
        state.topHeadlinesFilters.country = action.payload;
      } else if (action.type === "Category") {
        state.topHeadlinesFilters.category = action.payload;
      } else {
        state.topHeadlinesFilters.sources = action.payload;
      }
    },
  },
});

export const { updateQ } = filtersSlice.actions;
export const { updatePage } = filtersSlice.actions;
export const { updateTopFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
