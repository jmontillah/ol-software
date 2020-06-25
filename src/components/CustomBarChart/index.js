import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './style.scss';

const CustomBarChart = ({ data, colors, layout = "horizontal" }) => {
  const [chartWidth, setChartWidth] = useState(0);
  const [paperElement, setPaperElement] = useState("");
  const [barsData, setBarsData] = useState({});

  useEffect(() => {
    setPaperElement(document.querySelector('.af-customBarChartPaper'));
    setChartWidth(paperElement.offsetWidth);
    let barsObj = {...data[0]};
    delete barsObj.name;
    setBarsData(barsObj);
  }, [paperElement, data]);

  return (
    <Paper className="af-customBarChartPaper">
      <Typography variant="h6" className="af-title">
        {data[0].name}
      </Typography>
      <BarChart
        className={`af-barChart ${layout}`}
        width={chartWidth}
        height={250}
        data={data}
        margin={{
          top: 10, right: 10, left: 10, bottom: 10,
        }}
        layout={layout}
      >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={layout === "horizontal" ? "name" : ""}
            type={layout === "horizontal" ? "category" : "number"}
            allowDecimals={layout === "horizontal" ? true : false}
          />
          <YAxis 
            allowDecimals={layout === "horizontal" ? false : true}
            type={layout === "horizontal" ? "number" : "category"}
            dataKey={layout === "horizontal" ? "" : "name"}
          />
        <Legend />
        {
          Object.keys(barsData).map((element, index) => (
            <Bar key={index} dataKey={element} fill={colors[index]} />
          ))
        }
      </BarChart>
    </Paper>
  )
}

CustomBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  layout: PropTypes.string,
}

export default CustomBarChart;