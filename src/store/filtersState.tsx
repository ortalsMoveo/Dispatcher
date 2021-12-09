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

//  type = obj | general | top | every;

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
    updateFiltersState: (state, action) => {
      if (action.payload.type === "obj") {
        return initialState;
      } else if (action.payload.type === "general") {
      } else if (action.payload.type === "top") {
        // update one value at top filters
        if (action.payload.fullTopObj) {
          return {
            ...state,
            topHeadlinesFilters: action.payload.topValues,
          };
        } else {
          return {
            ...state,
            topHeadlinesFilters: {
              ...state.topHeadlinesFilters,
              [action.payload.key]: action.payload.value,
            },
          };
        }
      } else {
        if (action.payload.fullTopObj) {
          return {
            ...state,
            everythingFilters: action.payload.everyValues,
          };
        } else {
          // update one value at every filters
          if (action.payload.currFilter === "Sort by") {
            return {
              ...state,
              everythingFilters: {
                ...state.everythingFilters,
                sortBy: action.payload.value,
              },
            };
          } else if (action.payload.from) {
            return {
              ...state,
              everythingFilters: {
                ...state.everythingFilters,
                from: action.payload.from,
                to: action.payload.to,
              },
            };
          } else {
            console.log("action.payload.currFilter", action.payload.currFilter);
            return {
              ...state,
              everythingFilters: {
                ...state.everythingFilters,
                [action.payload.currFilter]: action.payload.value,
              },
            };
          }
        }
      }
    },
  },
});
// const { type, key, value } = action.payload;,

export const { updateQ } = filtersSlice.actions;
export const { updatePage } = filtersSlice.actions;
export const { updateFiltersState } = filtersSlice.actions;

export default filtersSlice.reducer;
