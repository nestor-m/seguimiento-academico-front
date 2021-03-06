import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CustomChart from './CustomChart.js';

class GraficoDeLineas extends CustomChart {

  renderChart(data) {
    return <LineChart width="100%" height="100%" data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <Line type="monotone" dataKey="valor" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="nombre" label={{ value: this.props.nombreX, position: 'insideBottomRight', offset: 0 }} />
      <YAxis label={{ value: this.props.nombreY, angle: -90, position: 'insideLeft' }}
        domain={[0, 10]} />
      <Tooltip />
    </LineChart>
  }
}

export default GraficoDeLineas;
