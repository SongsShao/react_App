/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import { Flex, List } from 'antd-mobile'
import { Popover, Icon } from 'antd'
import Mp3 from '../../component/Mp3/index'
import Mp3List from '../../component/Mp3/Mp3List'
import Bu from '../../assets/mp3/Lambert.mp3'
import Sn from '../../assets/mp3/mengran-shaonian.mp3'
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
  name: '少年',
  src: Sn,
  auther: '梦然',
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
    dataList, // : sessionStorage.getItem('dataList') ? JSON.parse(sessionStorage.getItem('dataList')) : dataList,
    selectKey: 0
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

  musicClick = (val, index) => {
    console.log('点击列表', val)
    if (val) {
      val.isPlay = true
      this.setState({
        data: val,
        selectKey: index
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
        let list = String(file.name).replace('.mp3', '').split('-')
        console.log(list)
        let map = {}
        map.name = (list.length > 1 ? list[1] : list[0]).replace('^[\u4E00-\u9FA5A-Za-z0-9]+', '')
        map.src = this.result
        map.auther = (list.length > 1 ? list[0] : 'songshao').replace('^[\u4E00-\u9FA5A-Za-z0-9]+', '')
        map.img = BuImg
        map.dr = true
        map.key = dataList.length + 1
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

  rightClick = async (data, index) => {
    console.log('vvvvvv', data, dataList, index)
    if (data) {
      await dataList.splice(index, 1)
      this.setState({
        dataList
      })
    }
  }

  nextClick = async v => {
    const { dataList, selectKey } = this.state
    console.log('完成播放', dataList[selectKey])
    if (v) {
      if (dataList.length - 1 === selectKey) {
        await this.setState({
          selectKey: 0
        })
      } else {
        await this.setState({
          selectKey: selectKey + 1
        })
      }
      this.onRef.onRefreshData(dataList[this.state.selectKey])
      console.log('正在播放', dataList[this.state.selectKey])
    }
  }

  allBofang = async () => {
    const { dataList } = this.state
    await this.setState({
      selectKey: 0,
      data: dataList[0]
    })
    console.log('addBoFang', this.state.selectKey, this.state.data)
    this.onRef.onRefreshData(this.state.data)
  }

  onTouchStart = v => {
    console.log('onTouchStart', v)
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
        <div style={{ width: '100%', height: document.documentElement.clientHeight - 143.5, border: 0 }}>
          <div className={style.topStyle}>
            <div className={style.topStyleLeft}
              onClick={this.allBofang}
            >
              <IconFont type='icon-bofang'
                style={{ fontSize: '16px', color: '#4A90E2', paddingRight: '4px' }}
              />
              全部播放(
              {dataList.length}
              )
            </div>
          </div>
          <List>
            { dataList && dataList.map((item, index) => {
              item.key = index
              return (
                <Mp3List key={String(index)}
                  onTouchStart={() => this.onTouchStart(item)}
                  data={item}
                  onClick={() => this.musicClick(item, index)}
                  rightComponent={rightComponent(item, index)}
                />
              )
            }) }
          </List>

          {/* <div onClick={this.nextClick}>
            点击列表
            {' '}
            {this.state.selectKey}
          </div> */}
        </div>
        <div>
          <Mp3 data={data} onRef={ref => { this.onRef = ref }} next={this.nextClick} />
        </div>
      </div>
    )
  }
}

export default Index
