import React, { useState, useEffect } from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ systolic: randomPoint(100, 200), diastolic: randomPoint(50, 100), argument: `${i}:00`, i });
  }

  return data;
}

const randomPoint = (start, end) => {
  return ((Math.random() * 100) % (end-start)) + start;
}

export default function BPGraph(props) {  
  const [data, setData] = useState(generateData(1, 24, 1));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(state => ([
        ...state.slice(1),
        { systolic: randomPoint(100, 200), diastolic: randomPoint(50, 100), argument: `${(state[state.length - 1].i + 1) % 24}:00`, i: (state[state.length - 1].i + 1) % 24 }
      ]));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (props.notifications) {
      let lastSys = data[data.length - 1].systolic;
      let lastDia = data[data.length - 1].diastolic;
      const highSys = 190;
      const lowSys = 110;
      const highDia = 90;
      const lowDia = 60;
      if (lastSys > highSys) {
        props.setOpen(true);
        props.setMessage("Systolic BP too High!");
      }
      if (lastSys < lowSys) {
        props.setOpen(true);
        props.setMessage("Systolic BP too Low!");
      }
      if (lastDia > highDia) {
        props.setOpen(true);
        props.setMessage("Diastolic BP too High!");
      }
      if (lastDia < lowDia) {
        props.setOpen(true);
        props.setMessage("Diastolic BP too Low!");
      }
    }
  }, [data]);

  return( 
    <Paper>
      <Chart
        data={data}
        height={325}
      >
        <Title
          text="Blood Pressure (mmHg)"
        />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries
          name="Systolic"
          valueField="systolic"
          argumentField="argument"
        />
        <LineSeries
          name="Diastolic"
          valueField="diastolic"
          argumentField="argument"
        />

        <Legend />
      </Chart>
      <Typography variant="h6">Time (hours)</Typography>
    </Paper>
  );
}
