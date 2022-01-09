import React, { FunctionComponent, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { makeStyles, TableContainer as MaterialTable } from '@material-ui/core';

interface Props {
  className?: string;
}

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
    backgroundColor: 'white',
    border: '1px solid #CCC',
    borderRadius: '6px',
  },
});

const TableContainer: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();

  return (
    <MaterialTable className={clsx(classes.root, props.className)}>
      {props.children}
    </MaterialTable>
  );
};

export default TableContainer;
