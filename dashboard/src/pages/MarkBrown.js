import React, { useState } from 'react';
import {
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Graphs from '../graphs/Graphs';
import markbrown from '../assets/markbrown.jpg'

const useStyles = makeStyles((theme) => ({
  large: {
    marginLeft: '1em',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function MarkBrown(props) {
  const classes = useStyles();

  return( 
    <div>
      <div style={{'justifyContent': 'center', 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row'}}>
        <Typography variant='h2'>Mark Brown</Typography>
        <Avatar alt="Mark Brown" src={markbrown} className={classes.large} />
      </div>
      <Graphs notifications={props.notifications} />
    </div>
  )
}