import React, { useState } from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

import Graphs from '../graphs/Graphs';

export default function ElliotKim(props) {
  return( 
    <div>
      <Typography variant='h2'>Elliot Kim</Typography>
      <Graphs notifications={props.notifications} />
    </div>
  )
}