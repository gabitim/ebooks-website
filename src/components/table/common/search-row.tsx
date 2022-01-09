import React, { FunctionComponent, PropsWithChildren } from 'react';

import { makeStyles } from '@material-ui/core';
import TableCell  from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import SearchTextField from '../../input/search-text-field';

const useStyles = makeStyles({
  row: {
      width: "100%",
  },
  cell: {
      width: "100%",
      padding: "0px 16px 0px 16px",
      borderBottomColor: "#CCC",
  },
  searchBar: {
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
      padding: 0,
  },
});

interface Props {
  label: string;
  searchText: string;
  onSearchChanged: (value: string) => void;
}

const TableSearchRow: FunctionComponent<Props> = (props: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();

  return (
    <TableRow className={classes.row} >
      <TableCell className={classes.cell} colSpan={99} >
        <SearchTextField 
          label={props.label}
          searchText={props.searchText}
          className={classes.searchBar}
          onSearchChanged={props.onSearchChanged}
        />          
      </TableCell>
    </TableRow>
  )
}

export default TableSearchRow;
