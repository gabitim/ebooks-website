import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../reducers/books';
import { RootState } from '../../reducers/store'; 
import BrandingHeader from '../header/branding-header';
import BookTable from '../table/book/book-table';

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.projects);
  const error = books.error;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
 
  return (
    <div>
      <BrandingHeader title='All Ebooks'/>
      {error && <h3>Error</h3>}
      <BookTable 
        books={books.value}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  )
}

export default MainPage;
