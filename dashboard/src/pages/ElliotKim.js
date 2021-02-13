import React, { useState } from 'react';
import {
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Graphs from '../graphs/Graphs';
import elliotkim from '../assets/elliotkim.jpg'

const useStyles = makeStyles((theme) => ({
  large: {
    marginLeft: '1em',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ElliotKim(props) {
  const classes = useStyles();

  return( 
    <div>
      <div style={{'justifyContent': 'center', 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row'}}>
        <Typography variant='h2'>Elliot Kim</Typography>
        <Avatar alt="Elliot Kim" src={elliotkim} className={classes.large} />
      </div>
      <Graphs notifications={props.notifications} />
    </div>
  )
}