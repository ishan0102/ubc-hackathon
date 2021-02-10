import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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

export default function App(props) {
  const classes = useStyles(props);

  return (
    <div>
      <Router>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} onClick={() => { window.location.assign('/') }}>
              Davita
          </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <div className={classes.body}>
          <Switch>
            <Route exact path={["/", "/patient"]} component={PatientDashboard} />
            <Route exact path="/doctor" component={DoctorDashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
