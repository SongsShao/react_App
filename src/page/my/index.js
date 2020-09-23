/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Icon } from 'antd'
import indexTitle from '../../assets/indexTitle.png'

function Index() {
  return (
    <div style={{ position: 'relative' }}>
      <iframe style={{ width: '100%', height: document.documentElement.clientHeight - 100.5, border: 0 }} key src='http://192.168.6.130:18001/'></iframe>
    </div>
  )
}

export default Index
