import React, { FunctionComponent, PropsWithChildren } from 'react';

import { IconButton, TableRow, Tooltip } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import { BookDto } from '../../../api';
import { sortByString } from '../../../util/sort-util';
import TableButtonCell from '../common/button-cell';
import TableCell from '../common/cell';
import TableSearchFallbackRow from '../common/search-fallback-row';

interface Props {
  books: BookDto[];
  onEdit: () => void; // TODO
  onDelete: () => void; // TODO
}

const BookTableContent: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const { books, onEdit, onDelete } = props;


  return (
    <>
      <TableSearchFallbackRow 
        availableRows={books.length}
        fallbackText='No books found.'
      />

      {
        sortByString(books, b => b.title ?? '').map(book => {return(
          <TableRow key={book.isbn}>
            <TableCell >
              {book.isbn}            
            </TableCell>
            <TableCell >
              {book.title}
            </TableCell>
            <TableCell >
              {book.publishingHouse}
            </TableCell>
            <TableCell >
              {book.publishingYear}
            </TableCell>
            <TableCell >
              {book.genre}
            </TableCell>
            <TableButtonCell>
              <Tooltip title='Edit Book'>
                <IconButton 
                  size='small'
                  onClick={() => onEdit()}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
            </TableButtonCell>
            <TableButtonCell>
              <Tooltip title='Delete Book'>
                <IconButton 
                  size='small'
                  onClick={() => onDelete()}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </TableButtonCell>
          </TableRow>
        )})
      }
    </>
  );
};

export default BookTableContent;
