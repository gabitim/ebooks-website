import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

import useStyles from './styles/use-style';
import Router from './router';

const style = makeStyles({
  content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#F5F5F5",
  },
  container: {
      flexGrow: 1
  },
  errorContainer: {
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      paddingBottom: "50vh"
  },
  errorWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#9f2121",
      margin: "auto",
      padding: "1rem 4rem",
      borderRadius: "1rem",
      color: "white"
  },
  errorMessage: {
      marginTop: "2rem",
      fontSize: "1rem"
  },
  errorRetry: {
      marginTop: "2rem",
      marginBottom: "1rem",
      borderColor: "rgba(255,255,255,0.87)",
      color: "rgba(255,255,255,0.87)",
      textTransform: "none",
      fontSize: "1rem"
  }
});

const Layout = (): JSX.Element => {
  const defaultClasses = style();
  const sidebarClasses = useStyles();

  const [isSideBarOpen] = useState(true);

  return (
    <>
      <BrowserRouter>
        <main className={clsx(sidebarClasses.content, {[sidebarClasses.contentShift]: isSideBarOpen,})}>
          <div className={sidebarClasses.drawerHeader}>
            <a href='/'> <img src='./logo.png' alt='logo' /> </a>            
          </div>
          <div className={defaultClasses.content}>
            <Router />
          </div>        
        </main>
      </BrowserRouter>
    </>
  )
}

export default Layout;
