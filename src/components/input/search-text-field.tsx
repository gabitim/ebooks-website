import React, { FunctionComponent } from 'react';

import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

interface Props {
  label: string;
  searchText: string;
  className?: string;
  onSearchChanged: (value: string) => void;
}

const SearchTextField: FunctionComponent<Props> = props => {
  return (
    <TextField 
      className={props.className}
      size='small'
      variant='outlined'
      label={props.label}
      value={props.searchText}
      onChange={e => props.onSearchChanged(e.target.value)}
      InputProps={{
        endAdornment: props.searchText ? (
          <InputAdornment position='end'>
            <IconButton size='small' onClick={() => props.onSearchChanged('')}>
              <Clear />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
};

export default SearchTextField;
