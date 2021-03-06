import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    minHeight: '40px',
    marginTop: '8px',
    marginBottom: '16px',    
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

interface HeaderProps {
  title: string;
  small?: boolean;
}

const PageHeader = (props: HeaderProps): JSX.Element => {
  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>      
      <Typography variant={props.small ? 'h6' : 'h5'}>
        {props.title}
      </Typography>
    </div>
  );
};

export default PageHeader;
