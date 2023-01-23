import React from 'react'
import { Line } from '@ant-design/plots';

const ChartLine = ({xField, yField, data}) => {
    const config = {
        data,
        color: '#2876A6',
        padding: 'auto',
        xField,
        yField,
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
    };

    return(
        <Line {...config} />
    )
}

export default ChartLine;
