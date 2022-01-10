import React from 'react';

import { ThemeProvider } from '@material-ui/core'; 
import { Provider } from 'react-redux';

import { store } from '../../reducers/store';
import Theme from '../../theme';
import Layout from './layout';
import useStyles from './styles/use-style';

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <div className={classes.root}>
          <Layout />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
