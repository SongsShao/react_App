/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { Flex, List } from 'antd-mobile'
import { Popover, Icon } from 'antd'
import Mp3 from '../../component/Mp3/index'
import Mp3List from '../../component/Mp3/Mp3List'
import Bu from '../../assets/mp3/Lambert.mp3'
import BuImg from '../../assets/img/20200924201943.jpg'
import style from './index.module.less'

const data = {
  name: '不得不爱',
  src: Bu,
  auther: 'songshao',
  img: BuImg
}
const dataList = [{
  name: '不得不爱',
  src: Bu,
  auther: 'songshao',
  img: BuImg,
  bflx: 'SQ'
}, {
  name: '不得不爱-01',
  src: Bu,
  auther: 'songshao',
  img: BuImg,
  mv: false,
  bflx: '独家'
}]

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl
})

class Index extends React.Component {
  state={
    data,
    dataList // : sessionStorage.getItem('dataList') ? JSON.parse(sessionStorage.getItem('dataList')) : dataList,
  }

  componentDidMount() {
    if (this.props.right) {
      this.props.right(this.right)
    }
  }

  right = (
    <div style={{ width: '40px', height: '40px', lineHeight: '50px', textAlign: 'center' }}>
      <form name='form' method='post' action=''>
        <input type='file'
          name='file'
          id='file'
          style={{ display: 'none' }}
          onChange={() => this.jsReadFiles(this)}
        />
        <Icon type='upload' style={{ fontSize: '20px', color: '#4A90E2' }} value='上传音乐' onClick={() => document.getElementById('file').click()} />
      </form>
    </div>

  )

  musicClick = val => {
    console.log('点击列表', val)
    if (val) {
      val.isPlay = true
      this.setState({
        data: val
      })
      this.onRef.onRefreshData(val)
    }
  }

  jsReadFiles=files => {
    let thiz = this
    let file = document.getElementById('file').files[0]

    // var file = files[0];

    console.log(file)

    let reader = new FileReader()// new一个FileReader实例

    if (file !== undefined && /audio\/(mpeg|mp3)+/.test(file.type)) { // 判断文件类型，是不是text类型
      reader.readAsDataURL(file)
      reader.onload = function() {
        let list = String(file.name).replace('^[\u4E00-\u9FA5A-Za-z0-9]+', '').split('-')
        console.log(list)
        let map = {}
        map.name = (list.length > 1 ? list[1] : list[0]).replace('^[\u4E00-\u9FA5A-Za-z0-9]+', '')
        map.src = this.result
        map.auther = (list.length > 1 ? list[0] : 'songshao').replace('^[\u4E00-\u9FA5A-Za-z0-9]+', '')
        map.img = BuImg
        map.dr = true
        dataList.push(map)
        thiz.setState({
          dataList
        })
        console.log('dataList', thiz.state.dataList)
      // sessionStorage.setItem('dataList', thiz.state.dataList)
      }
      // reader.readAsDataURL(file)
    }
  }

  rightClick = (data, index) => {
    console.log('vvvvvv', data, index)
    if (data) {
      dataList.pop(index)
      this.setState({
        dataList
      })
    }
  }

  render() {
    const { data, dataList } = this.state
    const right = (
      <form name='form' method='post' action=''>
        <input type='file'
          name='file'
          id='file'
          style={{ display: 'none' }}
          onChange={this.jsReadFiles.bind(this)}
        />
        <input type='button' value='上传音乐' onClick={() => document.getElementById('file').click()}></input>
      </form>
    )
    const content = (data, index) => (
      <div>
        <p onClick={() => this.rightClick(data, index)}>移除</p>
        <p>删除</p>
      </div>
    )

    const rightComponent = (data, index) => (
      <Popover content={content(data, index)}
        key={String(index)}
        overlayClassName={style.cardList}
        trigger='hover'
        overlayStyle={{ width: '60px', textAlign: 'center', paddingRight: '10px', paddingTop: '-10px' }}
        placement='bottomRight'
      >
        <IconFont type='icon-gengduo' style={{ width: '40px', height: '50px', lineHeight: '50px', fontSize: '20px', color: '#4A90E2' }} />
      </Popover>
    )

    return (
      <div className={style.My} style={{ position: 'relative' }}>
        {/* <iframe style={{ width: '100%', height: document.documentElement.clientHeight - 100.5, border: 0 }} key src='http://192.168.6.130:18001/'></iframe> */}
        <div style={{ width: '100%', height: document.documentElement.clientHeight - 143.5, border: 0 }}>
          {/* <input type='file' id='file' onChange={this.jsReadFiles.bind(this)} /> */}
          {/* {right} */}
          <List>
            { dataList && dataList.map((item, index) => {
              item.key = index
              return (
                <Mp3List key={String(index)}
                  data={item}
                  onClick={this.musicClick}
                  rightComponent={rightComponent(item, index)}
                />
              )
            }) }
          </List>
        </div>
        <div>
          <Mp3 data={data} onRef={ref => { this.onRef = ref }} />
        </div>
      </div>
    )
  }
}

export default Index
