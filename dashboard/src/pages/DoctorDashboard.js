import React, { useState } from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

import Graphs from '../graphs/Graphs';

export default function DoctorDashboard(props) {
  return( 
    <div>
      <Typography variant='h2'>Doctor Dashboard</Typography>
      <Graphs />
    </div>
  )
}