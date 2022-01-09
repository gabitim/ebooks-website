import React, { FunctionComponent, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { makeStyles, Padding, TableCell as MaterialTableCell } from '@material-ui/core';

interface Props {
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  noWrap?: boolean;
  padding?: Padding;
}

const useStyles = makeStyles(() => ({
  noWrap: {
    whiteSpace: 'nowrap'
  }
}));

const TableCell: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();

  return (
    <MaterialTableCell
      className={clsx(props.noWrap && classes.noWrap, props.className)}
      align={props.align}
      padding={props.padding}
    >
      {props.children}
    </MaterialTableCell>
  );
};

export default TableCell;
