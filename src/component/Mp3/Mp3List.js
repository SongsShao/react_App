import React from 'react'
import { Flex, List } from 'antd-mobile'
import { Icon } from 'antd'
import style from './index.module.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl
})

class Mp3List extends React.Component {
    state

    render() {
      const { data, onClick, rightComponent, rightClick, onTouchStart } = this.props
      return (
        <List.Item className={style.Mp3List}
          arrow='empty'
          multipleLine
          platform='android'
          onClick={() => console.log('点击事件')}
          //   onTouchStart={onTouchStart}
          onTouchStart={() => { this.longPressItemTimeout = setTimeout(onTouchStart, 1000) }}
        >
          <Flex>
            <div style={{ width: '80%', height: '50px', paddingTop: '4px' }}
              onClick={() => onClick(data)}
            >
              <div style={{ width: '20px', height: '50px', float: 'left', lineHeight: '50px', marginLeft: '10px', position: 'relative' }}>
                <span>{Number(data.key) + 1}</span>
              </div>
              <div style={{ height: '50px', float: 'left', padding: '4px 0px' }}>
                <div style={{ fontSize: '14px', height: '22px', lineHeight: '22px' }}>
                  {data.name}
                </div>
                <div style={{ fontSize: '12px', height: '15px', lineHeight: '14px' }}>
                  <span style={{ color: 'red',
                    border: '0.5px red solid',
                    borderRadius: '3px',
                    fontSize: '8px',
                    padding: '0px 3px',
                    marginRight: '3px' }}
                  >
                    {data.bflx ? data.bflx : '标准'}
                  </span>
                  {data.auther}
                </div>
              </div>
            </div>
            <div style={{ width: '20%', height: '50px', textAlign: 'right', float: 'left', lineHeight: '55px' }}>
              { rightComponent || <IconFont type='icon-gengduo' style={{ width: '40px', height: '50px', lineHeight: '50px', fontSize: '20px', color: '#4A90E2' }} onClick={() => rightClick(data)} /> }
            </div>
          </Flex>
        </List.Item>
      )
    }
}

export default Mp3List
