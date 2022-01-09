import React from 'react';

import { ThemeProvider } from '@material-ui/core'; 
import { Provider } from 'react-redux';

import MainPage from './components/pages/main-page';
import { store } from './reducers/store';
import useStyles from './styles/use-style';
import Theme from './theme';

function App() {
  const classes = useStyles(Theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <div className={classes.root}>
          <MainPage />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
