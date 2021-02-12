import React, { useState, useEffect } from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    data.push({
      fat: randomPoint(0, 80),
      saturates: randomPoint(0, 30),
      carbs: randomPoint(240, 500),
      sugar: randomPoint(70, 140),
      protein: randomPoint(30, 70),
      salt: randomPoint(0, 10),
      argument: date.toLocaleDateString().substring(0, date.toLocaleDateString().length - 5),
      i
    });
  }

  return data;
}

const randomPoint = (start, end) => {
  return ((Math.random() * 100) % (end-start)) + start;
}

export default function NutritionGraph(props) {
  const [data, setData] = useState(generateData(1, 50, 1));
  
  return( 
    <Paper>
      <Chart
        data={data}
        height={350}
      >
        <Title
          text="Nutrition (g)"
        />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries
          name="Fat"
          valueField="fat"
          argumentField="argument"
        />
        <LineSeries
          name="Saturates"
          valueField="saturates"
          argumentField="argument"
        />
        <LineSeries
          name="Carbs"
          valueField="carbs"
          argumentField="argument"
        />
        <LineSeries
          name="Sugar"
          valueField="sugar"
          argumentField="argument"
        />
        <LineSeries
          name="Protein"
          valueField="protein"
          argumentField="argument"
        />
        <LineSeries
          name="Salt"
          valueField="salt"
          argumentField="argument"
        />

        <Legend />

        <ZoomAndPan />
      </Chart>
      <Typography variant="h6">Time (days)</Typography>
    </Paper>
  );
}
