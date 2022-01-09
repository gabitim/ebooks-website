import React, { FunctionComponent, PropsWithChildren, useMemo, useState } from 'react';

import { Table, TableBody } from '@material-ui/core';

import { Book } from '../../../api';
import { searchAllCaseInsensitive } from '../../../util/search-util';
import TableContainer from '../common/container';
import TableSearchRow from '../common/search-row';
import BookTableHeader from './book-table-header';
import BookTableContent from './book-table-content';

interface BookTableProps {
  books: Book[];
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
          book.titlu, 
          book.editura, 
          book.an_publicare?.toString(), 
          book.gen_literar
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
