import React, { useState, useEffect } from 'react';
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
    data.push({ value: randomPoint(50, 100), argument: `${i}:00`, i });
  }

  return data;
}

const randomPoint = (start, end) => {
  return ((Math.random() * 100) % (end-start)) + start;
}

export default function HeartBPMGraph(props) {  
  const [data, setData] = useState(generateData(1, 24, 1));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(state => ([
        ...state.slice(1),
        { value: randomPoint(50, 100), argument: `${(state[state.length - 1].i + 1) % 24}:00`, i: (state[state.length - 1].i + 1) % 24 }
      ]));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return( 
    <Paper>
      <Chart
        data={data}
        height={350}
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
