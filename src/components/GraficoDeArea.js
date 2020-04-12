import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeArea extends CustomChart {

  renderChart(data) {
    return <div className="chart">
              <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="cantidad" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </div>
  }
}

export default GraficoDeArea;
