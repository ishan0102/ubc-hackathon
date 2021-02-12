import React, { useState } from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

import Graphs from '../graphs/Graphs';

export default function MarkBrown(props) {
  return( 
    <div>
      <Typography variant='h2'>Mark Brown</Typography>
      <Graphs notifications={props.notifications} />
    </div>
  )
}