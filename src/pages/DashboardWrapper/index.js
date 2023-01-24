import React, { useState, useEffect } from 'react'
import { Col, Row, message } from 'antd';
import CardRegister from '../GlobalComponent/CardRegister';
import { getRegisterEnergy } from '../../services/EnergyControl';
import GeneralSpin from '../GlobalComponent/GeneralSpin';

const DashboardWrapper = () => {
    const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getData = async() => {
            const listEnergy = await getRegisterEnergy()
            if (!listEnergy) return ;
            if (listEnergy.success){
                let totalWats = 0
                const loadData = await Promise.all(
                    listEnergy.data.map(
                        itm => {
                            totalWats = totalWats + itm.wats
                            return {
                                irms: itm.i_rms,
                                wats: itm.wats,
                                time: itm.date_registration.substring(11, 16)
                            }
                        }
                    )
                )
                totalWats = Math.round(totalWats * 1000) / 1000

                setData(loadData)
                setTotal(totalWats)
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
                        <CardRegister title={'Corriente casa'} xField={'time'} yField={'irms'} data={data} />
                    </Col>
                    <Col key={'graph-wats'} span={10} offset={2} >
                        <CardRegister title={'Potencia casa'} xField={'time'} yField={'wats'} data={data} total={total} />
                    </Col>
                </>
            :
                <GeneralSpin />
            }
        </Row>
    )
}

export default DashboardWrapper;
