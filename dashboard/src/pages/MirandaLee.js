import React, { useState } from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

import Graphs from '../graphs/Graphs';

export default function MirandaLee(props) {
  return( 
    <div>
      <Typography variant='h2'>Miranda Lee</Typography>
      <Graphs notifications={props.notifications} />
    </div>
  )
}