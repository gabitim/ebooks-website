import React, { FunctionComponent } from 'react';

import { TableHead } from '@material-ui/core';

import { Book } from '../../../api';
import { propertyOf } from '../../../interfaces/helpers';
import { capitalize } from '../../../util/string-util';
import TableHeaderRow from '../common/header-row';
import TableColumn from '../common/column';

const BookTableHeader: FunctionComponent = (): JSX.Element => {
  
  return (
    <TableHead>
      <TableHeaderRow>
        <TableColumn type='default' align='left' title={capitalize(propertyOf<Book>('isbn'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<Book>('titlu'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<Book>('editura'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<Book>('an_publicare'))} />
        <TableColumn type='default' align='left' title={capitalize(propertyOf<Book>('gen_literar'))} />
        
        <TableColumn type='min' align='right' />
        <TableColumn type='min' align='right' />
      </TableHeaderRow>
    </TableHead>
  );
};

export default BookTableHeader;
