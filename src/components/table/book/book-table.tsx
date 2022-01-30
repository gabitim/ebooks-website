import React, { FunctionComponent, PropsWithChildren, useMemo, useState } from 'react';

import { Table, TableBody } from '@material-ui/core';

import { BookDto } from '../../../api';
import { searchAllCaseInsensitive } from '../../../util/search-util';
import TableContainer from '../common/container';
import TableSearchRow from '../common/search-row';
import BookTableHeader from './book-table-header';
import BookTableContent from './book-table-content';

interface BookTableProps {
  books: BookDto[];
  onEdit: () => void;
  onDelete: () => void;
}

const BookTable: FunctionComponent<BookTableProps> = 
  (props: PropsWithChildren<BookTableProps>): JSX.Element => {
    const { books, onEdit, onDelete } = props;

    const [search, setSearch] = useState('');

    const filteredBooks = useMemo(() => books.filter(book => {
      return searchAllCaseInsensitive(search, 
          book.isbn, 
          book.title, 
          book.publishingHouse, 
          book.publishingYear?.toString(), 
          book.genre
        );
    }), [books, search]);

    return (
      <TableContainer>
        <Table>
          <BookTableHeader />
          <TableBody>
            <TableSearchRow 
              searchText={search}
              label='Search book...'
              onSearchChanged={setSearch} 
            />
            <BookTableContent 
              books={filteredBooks}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default BookTable;
