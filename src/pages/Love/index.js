import { Carousel } from 'antd';
import React from 'react'
import '../../assets/style/index.css'

const LoveDash = () => {
  return (
    <>
    <Carousel autoplay style={{height: '100%', width: '100%'}} >
      <div className='div-carousel'>
        <iframe src="https://hktu-my.sharepoint.com/personal/basilnxl_pyq_ai/_layouts/15/embed.aspx?UniqueId=698401a1-7311-40a4-b59e-96b6354dfaea"
          frameborder="0"
          height='100%'
          width='100%'
          allowfullscreen
      title="IMG_20231001_155750.jpg"></iframe>
      </div>
      <div className='div-carousel'>
        <iframe src="https://hktu-my.sharepoint.com/personal/basilnxl_pyq_ai/_layouts/15/embed.aspx?UniqueId=9f490aeb-e93a-42cb-bf90-6d4e11bd1824"
          frameborder="0"
          height='100%'
          width='100%'
          allowfullscreen
        title="IMG_20231001_155604.jpg"></iframe>
      </div>
      <div className='div-carousel'>
        <iframe src="https://hktu-my.sharepoint.com/personal/basilnxl_pyq_ai/_layouts/15/embed.aspx?UniqueId=5d9bd885-26b8-430a-979a-c5e8d4959cbe"
          frameborder="0"
          height='100%'
          width='100%'
          allowfullscreen
          title="IMG_20231001_155100.jpg"
        ></iframe>
      </div>
      <div className='div-carousel'>
        <iframe
          src="https://hktu-my.sharepoint.com/personal/basilnxl_pyq_ai/_layouts/15/embed.aspx?UniqueId=960a264a-9e57-4680-9787-925279eab9c6"
          frameborder="0"
          height='100%'
          width='100%'
          allowfullscreen
          title="IMG_20231001_154026.jpg"
        ></iframe>
      </div>
    </Carousel>
    </>
  )
}

export default LoveDash;