import React, { FunctionComponent, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  className?: string;
}

const useStyles = makeStyles(() => ({
  cell: {
    padding: '8px 12px'
  },
}));

const TableButtonCell: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();
  return (
    <TableCell 
      align='center'
      className={clsx(classes.cell, props.className)}
    >
      {props.children}
    </TableCell>
  );
};

export default TableButtonCell;
