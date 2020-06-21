import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Typography } from '@material-ui/core';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { renderCustomizedLabelPieChart } from './../../utils';
import './style.scss';

const CustomPieChart = ({ data, colors }) => {
  const [pieWidth, setPieWidth] = useState(0);
  const [paperElement, setPaperElement] = useState("");

  useEffect(() => {
    setPaperElement(document.querySelector('.af-customPieChartPaper'));
    setPieWidth(paperElement.offsetWidth);
  }, [paperElement]);

  return (
    <Paper className="af-customPieChartPaper">
      <Typography variant="h6">
        Estado de usuarios
      </Typography>
      {data &&
        <PieChart width={pieWidth} height={250}>
          <Pie 
            dataKey="value" 
            isAnimationActive={false} 
            data={data}
            outerRadius={80} 
            fill="#8884d8" 
            label={renderCustomizedLabelPieChart}
            labelLine={false}
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
      }
      <div className="af-pieHistory">
        {
          data.map((element, index) => (
            <div className="af-pieHistoryElement">
              <Box bgcolor={colors[index]}/>
              <Typography variant="body1">
                {element.name}
              </Typography>
            </div>
          ))
        }
      </div>
    </Paper>
  )
}

CustomPieChart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
}

export default CustomPieChart;