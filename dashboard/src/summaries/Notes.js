import React from 'react';
import { Typography } from '@material-ui/core';

export default function Notes(props) {
  return (
    <div>
      <Typography variant="h5">
        Notes
      </Typography>
      <br></br>
      <Typography variant="h6">
        Managing well. Try to reduce the amount of carbs in your diet.
      </Typography>
    </div>
  )
}
