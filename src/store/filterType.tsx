import { createSlice } from "@reduxjs/toolkit";

import { FILTER_OPTIONS } from "../FiltersData";

const initialState = { filterType: FILTER_OPTIONS.TOP };

const filterTypeSlice = createSlice({
  name: "filterType",
  initialState,
  reducers: {
    updateFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});
export const { updateFilterType } = filterTypeSlice.actions;

export default filterTypeSlice.reducer;
