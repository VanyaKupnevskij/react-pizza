import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 1,
};

const paginatorSlice = createSlice({
  name: 'paginator',
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = paginatorSlice.actions;

export default paginatorSlice.reducer;
