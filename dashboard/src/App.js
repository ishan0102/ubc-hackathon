import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'

import MenuDrawer from './components/MenuDrawer'
import NotificationsMenu from './components/NotificationsMenu'
import MirandaLee from './pages/MirandaLee';
import MarkBrown from './pages/MarkBrown';
import ElliotKim from './pages/ElliotKim';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  body: {
    textAlign: 'center'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#044a3a',
    },
  },
});

export default function App(props) {
  const classes = useStyles(props);
  const [notifications, setNotifications] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <MenuDrawer />
              <Typography variant='h6' className={classes.title} onClick={() => { window.location.assign('/') }}>
                Vitali
              </Typography>
              <NotificationsMenu notifications={notifications} setNotifications={setNotifications} />
            </Toolbar>
          </AppBar>
          <Toolbar />
          <div className={classes.body}>
            <Switch>
              <Route exact path={['/', '/patient1']} render={(props) => (
                <ElliotKim {...props} notifications={notifications} />
              )} />
              <Route exact path={['/', '/patient2']} render={(props) => (
                <MarkBrown {...props} notifications={notifications} />
              )} />
              <Route exact path={['/', '/patient3']} render={(props) => (
                <MirandaLee {...props} notifications={notifications} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
