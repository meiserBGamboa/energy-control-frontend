import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { lateralMenuTeacher } from '../../utils/Routes';

const page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link to={lateralMenuTeacher[0].link} >{lateralMenuTeacher[0].name}</Link></Button>}
    />
  )
}

export default page404