import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BooksSlice } from './books';

export const rootReducer = combineReducers({
  projects: BooksSlice.reducer,
})

export const ClearStore = {
  type: "Root:Clear"
};

export const store = configureStore({
  reducer: <RootState>(state: RootState, action: { type: string }) => {
    if (action === ClearStore) {
      return rootReducer(undefined, action);
    }

    return rootReducer(state as any, action);
  }
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;
