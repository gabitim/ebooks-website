import React, { FunctionComponent } from 'react';

import { TableHead } from '@material-ui/core';

import { BookDto } from '../../../api';
import { propertyOf } from '../../../interfaces/helpers';
import { capitalize } from '../../../util/string-util';
import TableHeaderRow from '../common/header-row';
import TableColumn from '../common/column';

const BookTableHeader: FunctionComponent = (): JSX.Element => {
  
  return (
    <TableHead>
      <TableHeaderRow>
        <TableColumn type='default' align='left' title={capitalize(propertyOf<BookDto>('isbn'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<BookDto>('title'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<BookDto>('publishingHouse'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<BookDto>('publishingYear'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<BookDto>('genre'))} />
        
        <TableColumn type='min' align='right' />
        <TableColumn type='min' align='right' />
      </TableHeaderRow>
    </TableHead>
  );
};

export default BookTableHeader;
