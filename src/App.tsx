import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { AppStateProvider } from './components/AppStateProvider/AppStateProvider';
import Header from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';

import { Logo } from './icons/Logo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      position: 'relative',
      height: '100%',
      width: '100%',
      background: theme.backgroundColor,
      overflow: 'hidden',
    },
    desktopOnly: {
      '@media (max-width:600px)': {
        display: 'none',
      },
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <AppStateProvider>
      <div className={classes.appContainer}>
        <div className={classes.desktopOnly}>
          <Header />
        </div>
        <MainContent />
      </div>
    </AppStateProvider>
  );
}

export default App;
