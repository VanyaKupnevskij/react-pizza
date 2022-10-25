import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/FilterSlice';
import search from './slices/SearchSlice';
import paginator from './slices/PaginatorSlice';

export const store = configureStore({
  reducer: {
    filter,
    search,
    paginator,
  },
});
