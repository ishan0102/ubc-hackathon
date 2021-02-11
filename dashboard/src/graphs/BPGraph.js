import React from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';



const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

export default function BPGraph(props) {  
  return( 
    <Paper>
      <Chart
        data={data}
      >
        <Title
          text="Blood Pressure (mmHg)"
        />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
      <Typography variant="h6">Time (hours)</Typography>
    </Paper>
  );
}
