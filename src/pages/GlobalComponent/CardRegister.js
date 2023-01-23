import { Col, Row, Typography } from 'antd'
import React from 'react'
import ChartLine from './ChartLine'
import { Gauge } from '@ant-design/plots';

const { Title } = Typography

const CardRegister = ({title, xField, yField, data, total}) => {
    const config = {
      with: 300,
      height: 300,
      percent: total/10000,
      range: {
        color: '#45B302',
      },
      indicator: null,
      statistic: {
        title: {
          offsetY: -36,
          style: {
            fontSize: '36px',
            color: '#D9D8D9',
          },
          formatter: () => total,
        },
        content: {
          style: {
            fontSize: '24px',
            lineHeight: '44px',
            color: '#D9D8D9',
          },
          formatter: () => 'W',
        },
      },
    };

    return(
        <Row style={{paddingTop: '25px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '35px', background: '#343334'}} >
            <Col span={24} style={{marginBottom: '40px'}} >
                <Title level={4} style={{color: '#327276'}} >{title}</Title>
            </Col>
            <Col span={20} offset={2} >
                <ChartLine xField={xField} yField={yField} data={data} />
            </Col >
            {(total) 
            ?
            <>
                <Col span={24} style={{marginTop: '60px'}} >
                    <Title level={4} style={{textAlign: 'center', color: '#327276'}} >Potencia consumida</Title>
                </Col>
                <Col span={24} style={{marginTop: '20px'}} >
                    <Gauge {...config} />
                </Col>
            </> 
            : <></>
            }
        </Row>
    )
}

export default CardRegister;