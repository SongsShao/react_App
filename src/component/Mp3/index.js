/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import { Icon } from 'antd'
import { Progress, Flex } from 'antd-mobile'
import style from './index.module.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl
})
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rateList: [1.0, 1.25, 1.5, 2.0],
      playRate: 1.0,
      isPlay: false,
      isMuted: false,
      volume: 100,
      allTime: 0,
      currentTime: 0,
    }
  }

  componentDidMount() {}

  formatSecond(time) {
    const second = Math.floor(time % 60)
    let minite = Math.floor(time / 60)
    return `${minite}:${second >= 10 ? second : `0${second}`}`
  }

  // 该视频已准备好开始播放
  onCanPlay = () => {
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    this.setState({
      allTime: audio.duration,
    })
  };

  playAudio = () => {
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    audio.play()
    this.setState({
      isPlay: true,
    })
  };

  pauseAudio = () => {
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    audio.pause()
    this.setState({
      isPlay: false,
    })
  };

  onMuteAudio = () => {
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    this.setState({
      isMuted: !audio.muted,
    })
    audio.muted = !audio.muted
  };

  changeTime = e => {
    const { value } = e.target
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    this.setState({
      currentTime: value,
    })
    audio.currentTime = value
    if (value === audio.duration) {
      this.setState({
        isPlay: false,
      })
    }
  };

  // 当前播放位置改变时执行
  onTimeUpdate = () => {
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)

    this.setState({
      currentTime: audio.currentTime,
    })
    if (audio.currentTime === audio.duration) {
      this.setState({
        isPlay: false,
      })
    }
  };

  changeVolume = e => {
    const { value } = e.target
    const { id } = this.props
    const audio = document.getElementById(`audio${id}`)
    audio.volume = value / 100

    this.setState({
      volume: value,
      isMuted: !value,
    })
  };

  // 倍速播放
  changePlayRate = num => {
    this.audioDom.playbackRate = num
    this.setState({
      playRate: num,
    })
  };

  render() {
    const { data, id } = this.props

    const {
      isPlay,
      isMuted,
      volume,
      allTime,
      currentTime,
      rateList,
      playRate,
    } = this.state

    return (
      <div className={style.Mp3Div}>
        <audio
          id={`audio${id}`}
          src={data.src}
          ref={audio => {
            this.audioDom = audio
          }}
          preload='auto'
          onCanPlay={this.onCanPlay}
          onTimeUpdate={this.onTimeUpdate}
        >
          <track src={data.src} kind='captions' />
        </audio>
        <Progress
          style={{ height: '1px', backgroundColor: '#CCCCCC' }}
          barStyle={{ border: '0.5px solid red' }}
          percent={(currentTime / allTime) * 100}
          unfilled
          position='normal'
        />
        <Flex style={{ height: '45px', width: '100%' }}>
          <Flex.Item>
            <div>
              <div style={{ width: '45px', height: '45px', float: 'left', lineHeight: '45px', marginLeft: '10px', position: 'relative' }}>
                <img src={data.img} className={style.MpImage}></img>
              </div>
              <div style={{ height: '45px', float: 'left' }}>
                <div style={{ fontSize: '14px', height: '25px', lineHeight: '25px' }}>
                  {data.name}
                </div>
                <div style={{ fontSize: '10px', height: '20px', lineHeight: '20px' }}>
                  {data.auther}
                </div>
              </div>
            </div>

          </Flex.Item>
          <Flex.Item style={{ textAlign: 'right', paddingRight: '10px', height: '45px', lineHeight: '55px' }}>
            {/* <span style={{ paddingRight: '3px' }}>
              {`${this.formatSecond(currentTime)}/${this.formatSecond(allTime)}`}
            </span> */}
            {isPlay ? (
              <IconFont type='icon-stop' style={{ fontSize: '25px', color: '#4A90E2' }} onClick={this.pauseAudio} />
            ) : (
              <IconFont type='icon-bofang' style={{ fontSize: '25px', color: '#4A90E2' }} onClick={this.playAudio} />
            )}
            <IconFont type='icon-liebiao' style={{ fontSize: '25px', color: '#4A90E2', paddingLeft: '13px' }} />
          </Flex.Item>

        </Flex>

      </div>
    )
  }
}

export default App
