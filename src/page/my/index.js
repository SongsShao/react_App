import React from 'react'
import { Icon } from 'antd'
import indexTitle from '../../assets/indexTitle.png'

function Index() {
  return (
    <div style={{ position: 'relative' }}>
      {/* <div>this is my developer！</div> */}
      {/* <Icon type='cloud' style={{ color: '#FFF', position: 'absolute', top: '265px', left: '189px', fontSize: '34px' }} /> */}
      <img src={indexTitle} style={{ width: '100%', height: '100%' }}></img>
    </div>
  )
}

export default Index
