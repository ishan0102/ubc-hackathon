import React, { useState, useEffect } from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';


const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    data.push({ value: randomPoint(150, 160), argument: date.toLocaleDateString().substring(0, date.toLocaleDateString().length - 5), date });
  }

  return data;
}

const randomPoint = (start, end) => {
  return ((Math.random() * 100) % (end-start)) + start;
}

export default function WeightGraph(props) {
  const [data, setData] = useState(generateData(1, 50, 1));
  
  return( 
    <div>
      <Chart
        data={data}
        height={325}
      >
        <Title
          text="Weight (lbs)"
        />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />

        <ZoomAndPan />
      </Chart>
      <Typography variant="h6">Time (days)</Typography>
    </div>
  );
}
