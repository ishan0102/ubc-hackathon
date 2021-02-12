import React from 'react';
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
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <MenuDrawer />
            <Typography variant='h6' className={classes.title} onClick={() => { window.location.assign('/') }}>
              Davita
            </Typography>
            <NotificationsMenu />
          </Toolbar>
        </AppBar>
        <Toolbar />
        <div className={classes.body}>
          <Switch>
            <Route exact path={['/', '/patient']} component={PatientDashboard} />
            <Route exact path='/doctor' component={DoctorDashboard} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
