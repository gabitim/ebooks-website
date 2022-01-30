import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { BookControllerApi, BookDto } from '../api';
import { ApiError } from '../interfaces/error';
import { apiExec, hasFailed } from '../util/api-util';
import { RootDispatch, RootState } from './store';

const BOOKS_ERROR = 'BOOKS_ERROR';
const SET_BOOKS = 'SET_BOOKS';

type BooksErrorPayload = ApiError;
type SetBooksPayload = BookDto[];

interface State {
  value: BookDto[];
  error?: ApiError;
  loaded: boolean;
}

const reduceBookError = (draft: Draft<State>, action: PayloadAction<BooksErrorPayload>) => {
  draft.error = action.payload;
}

const reduceSetBooks = (draft: Draft<State>, action: PayloadAction<SetBooksPayload>) => {
  draft.error = undefined;
  draft.value = action.payload;
};

const slice = createSlice({
  name: "Books",
  initialState: {
    value: [],
    initialLoading: false,
    loading: false,
    loaded: false,
  } as State,
  reducers: {
    [BOOKS_ERROR]: reduceBookError,
    [SET_BOOKS]: reduceSetBooks,
  }
});

const bookError = slice.actions[BOOKS_ERROR];
const setBooks = slice.actions[SET_BOOKS];

const fetchBooks = (force?: boolean) => {
  return async (dispatch: RootDispatch, getState: () => RootState): Promise<void> => {
    const state = getState().projects;
    if (state.loaded && !state.error && !force) {
      return;
    }
    
    const response = await apiExec(BookControllerApi, api => api.getBooks111());
    if (hasFailed(response)) {
      dispatch(bookError(response.error));
    }
    else {
      dispatch(setBooks(response.data));
    }
  };
};

export {
  slice as BooksSlice,
  bookError,
  fetchBooks,
};
