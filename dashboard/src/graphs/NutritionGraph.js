import React, { useState, useEffect } from 'react';
import {
  Title,
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
  ZoomAndPan,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper, Typography } from '@material-ui/core';

const generateData = (start, end, step) => {
  const data = [
    {group: 'Fat', area: randomPoint(0, 100)},
    {group: 'Saturates', area: randomPoint(0, 100)},
    {group: 'Carbs', area: randomPoint(0, 100)},
    {group: 'Sugar', area: randomPoint(0, 100)},
    {group: 'Protein', area: randomPoint(0, 100)},
    {group: 'Salt', area: randomPoint(0, 100)},
  ];
  // for (let i = start; i < end; i += step) {
  //   var date = new Date();
  //   date.setDate(date.getDate() + i);
  //   data.push({
  //     fat: randomPoint(0, 80),
  //     saturates: randomPoint(0, 30),
  //     carbs: randomPoint(240, 500),
  //     sugar: randomPoint(70, 140),
  //     protein: randomPoint(30, 70),
  //     salt: randomPoint(0, 10),
  //     argument: date.toLocaleDateString().substring(0, date.toLocaleDateString().length - 5),
  //     i
  //   });
  // }

  return data;
}

const randomPoint = (start, end) => {
  return ((Math.random() * 100) % (end-start)) + start;
}

export default function NutritionGraph(props) {
  const [data, setData] = useState(generateData(1, 50, 1));
  
  return( 
    <div>
      <Chart
        data={data}
        height={350}
      >
        <Title
          text="Nutrition (g)"
        />

        <PieSeries
          argumentField="group"
          valueField="area"
        />      

        <Legend />
      </Chart>
    </div>
  );
}
