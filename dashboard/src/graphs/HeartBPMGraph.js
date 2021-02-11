import React from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: ((Math.random() * 100) % 50) + 50, argument: `${i} AM` });
  }

  return data;
}

const data = generateData(2.5, 10, 1);

export default function HeartBPMGraph(props) {  
  return( 
    <Paper>
      <Chart
        data={data}
      >
        <Title
          text="Heart Rate (BPM)"
        />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
      <Typography variant="h6">Time (hours)</Typography>
    </Paper>
  );
}
