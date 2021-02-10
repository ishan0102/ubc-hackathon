import React, { useState } from 'react';
import {
  Typography,
  Button
} from '@material-ui/core';

import Graphs from '../graphs/Graphs';

export default function PatientDashboard(props) {
  return( 
    <div>
      <Typography variant='h2'>Patient Dashboard</Typography>
      <Graphs />
    </div>
  )
}