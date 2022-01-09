import React, { FunctionComponent, PropsWithChildren } from 'react';

import { makeStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  headerColumn: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderBottom: "1px solid #AAA",
  },
});

const TableHeaderRow: FunctionComponent = (props: PropsWithChildren<any>): JSX.Element => {
  const classes = useStyles();

  return (
    <TableRow className={classes.headerColumn}>
      {props.children}
    </TableRow>
  );
}

export default TableHeaderRow;
