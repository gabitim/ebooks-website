import React, { FunctionComponent, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { makeStyles, Padding, Theme } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  title?: string;
  type: 'min' | 'default' | 'max';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  padding?: Padding;
  maxCount?: number;
  className?: string; 
}

const useStyles = makeStyles((theme: Theme) => ({
  maxColumn: (props: Props) => ({
      width: props.maxCount ? `calc(100% / ${props.maxCount})` : '99%'
  }),
  minColumn: {
      width: '1%',
      whiteSpace: 'nowrap',
  },
  defaultColumn: {
      minWidth: '192px',
      width: '256px',
  },
  column: {
      borderBottomColor: theme.palette.divider,
      backgroundColor: theme.palette.background.paper
  }
}));

const TableColumn: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles(props);

  return (
    <TableCell 
      variant='head'
      align={props.align}
      padding={props.padding}
      className={clsx(classes.column, {
        [classes.maxColumn]: props.type === 'max',
        [classes.defaultColumn]: props.type === 'default',
        [classes.minColumn]: props.type === 'min',
      }, props.className)}
    >
      {props.title === undefined ? props.children : props.title}
    </TableCell>
  );
};

export default TableColumn;
