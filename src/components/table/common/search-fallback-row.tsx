import React, { FunctionComponent, PropsWithChildren } from 'react';

import { makeStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  fallbackRow: {
    textAlign: 'center',
    width: '100%',
  },
});

interface Props {
  availableRows: number;
  fallbackText: string;
}

const TableSearchFallbackRow: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element | null => {
  const classes = useStyles();

  if (props.availableRows !== 0) {
    return null;
  }

  return (
    <TableRow>
      <TableCell className={classes.fallbackRow} colSpan={8}>
        {props.fallbackText}
      </TableCell>
    </TableRow>
  );
};

export default TableSearchFallbackRow;
