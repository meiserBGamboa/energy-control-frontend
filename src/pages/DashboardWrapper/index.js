import React, { useState, useEffect } from 'react'
import { Col, Row, message } from 'antd';
import CardRegister from '../GlobalComponent/CardRegister';
import { getRegisterEnergy } from '../../services/EnergyControl';
import GeneralSpin from '../GlobalComponent/GeneralSpin';

const datatest = [
    {
      "date": "yesterday",
      "time": "13.00",
      "cpu": 40.93689627294421
    },
    {
      "date": "yesterday",
      "time": "13.05",
      "cpu": 65.06585239044342
    },
    {
      "date": "yesterday",
      "time": "13.10",
      "cpu": 66.42719381417056
    },
    {
      "date": "yesterday",
      "time": "13.15",
      "cpu": 48.060669399125935
    },
    {
      "date": "yesterday",
      "time": "13.20",
      "cpu": 64.04639809297761
    },
    {
      "date": "yesterday",
      "time": "13.25",
      "cpu": 32.45117682728456
    },
    {
      "date": "yesterday",
      "time": "13.30",
      "cpu": 63.35488066344804
    },
    {
      "date": "yesterday",
      "time": "13.35",
      "cpu": 65.2969449309885
    },
    {
      "date": "yesterday",
      "time": "13.40",
      "cpu": 28.35014444552017
    },
    {
      "date": "yesterday",
      "time": "13.45",
      "cpu": 66.198378961063
    },
    {
      "date": "yesterday",
      "time": "13.50",
      "cpu": 60.85520134738813
    },
    {
      "date": "yesterday",
      "time": "13.55",
      "cpu": 65.05419984325125
    },
    {
      "date": "yesterday",
      "time": "14.00",
      "cpu": 66.62243229531435
    },
    {
      "date": "yesterday",
      "time": "14.05",
      "cpu": 55.77808066603122
    },
    {
      "date": "yesterday",
      "time": "14.10",
      "cpu": 66.9144977524293
    },
    {
      "date": "yesterday",
      "time": "14.15",
      "cpu": 35.05499508303669
    },
    {
      "date": "yesterday",
      "time": "14.20",
      "cpu": 66.36871158902638
    },
    {
      "date": "yesterday",
      "time": "14.25",
      "cpu": 63.973903073723044
    },
    {
      "date": "yesterday",
      "time": "14.30",
      "cpu": 20.92585536363889
    },
    {
      "date": "yesterday",
      "time": "14.35",
      "cpu": 65.17145801764055
    },
    {
      "date": "yesterday",
      "time": "14.40",
      "cpu": 64.42516834555609
    },
    {
      "date": "yesterday",
      "time": "14.45",
      "cpu": 63.701363912573775
    },
    {
      "date": "yesterday",
      "time": "14.50",
      "cpu": 66.11568649665543
    },
    {
      "date": "yesterday",
      "time": "14.55",
      "cpu": 64.0474592964878
    },
    {
      "date": "yesterday",
      "time": "15.00",
      "cpu": 64.25676632707459
    },
    {
      "date": "yesterday",
      "time": "15.00",
      "cpu": 65
    }
]

const DashboardWrapper = () => {
    const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async() => {
            const listEnergy = await getRegisterEnergy()
            if (!listEnergy) return ;
            if (listEnergy.response){
                setData(listEnergy.response.data)
                setLoading(true)
            } else {
                message.error(listEnergy.errors.join(', '));
				setLoading(true)
            }
		}

		getData()
    }, []);
    
    return (
        <Row gutter={[16,24]} >
            {(loading) ?
                <>
                    <Col key={'graph-irms'} span={10} offset={1} >
                        <CardRegister title={'Corriente casa'} xField={'time'} yField={'cpu'} data={data} />
                    </Col>
                    <Col key={'graph-wats'} span={10} offset={2} >
                        <CardRegister title={'Potencia casa'} xField={'time'} yField={'cpu'} data={data} total={6000} />
                    </Col>
                </>
            :
                <GeneralSpin />
            }
        </Row>
    )
}

export default DashboardWrapper;
