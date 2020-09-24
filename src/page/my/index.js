/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Icon } from 'antd'
import Mp3 from '../../component/Mp3/index'
import Bu from '../../assets/mp3/Lambert.mp3'
import BuImg from '../../assets/img/20200924201943.jpg'

const data = {
  name: '不得不爱',
  src: Bu,
  auther: 'songshao',
  img: BuImg
}
function Index() {
  return (
    <div style={{ position: 'relative' }}>
      {/* <iframe style={{ width: '100%', height: document.documentElement.clientHeight - 100.5, border: 0 }} key src='http://192.168.6.130:18001/'></iframe> */}
      <div style={{ width: '100%', height: document.documentElement.clientHeight - 143.5, border: 0 }}>
        音乐列表
      </div>
      <div>
        <Mp3 data={data} />
      </div>
    </div>
  )
}

export default Index
