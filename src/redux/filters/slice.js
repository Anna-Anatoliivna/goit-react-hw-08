import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterValue: '',
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});



export const filtersReducer = filtersSlice.reducer;
export const { setFilterValue} = filtersSlice.actions;





// export const selectNameFilter = state => state.filters.filterValue;