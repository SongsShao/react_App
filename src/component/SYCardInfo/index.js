/* eslint-disable no-undef */
import React, { Component } from 'react'
import propTypes from 'prop-types'
import Style from './index.module.less'

class SYCardInfo extends Component {
    static propTypes={
      title: propTypes.string,
      btnOk: propTypes.string,
      btnCancel: propTypes.string,
      rightContent: propTypes.element || propTypes.string,
      leftColor: propTypes.string,
      onRef: propTypes.func,
      disFooter: propTypes.bool
    }
    static defaultProps={
      title: 'title',
      btnOk: '确定',
      btnCancel: '取消',
      rightContent: null,
      leftColor: '#4A90E2',
      onRef: ref => { },
      disFooter: false
    }
    state={
      showLine: true,
      stripVisible: true,
      showBtn: true,
      disFooter: false,
      disContent: false,
    }

    constructor(props) {
      super(props)
      this.state = {
        showLine: true,
        stripVisible: true,
        showBtn: true,
        disFooter: false,
        disContent: false
      }
    }

    componentDidMount() {
      if (this.props.disFooter) {
        this.setStateZet('disFooter', true)
      }

      if (this.props.children) {
        this.setStateZet('disContent', true)
      }

      if (this.props.onRef) {
        this.props.onRef(this)
      }
    }

    setStateZet = (index, value) => {
      this.setState({
        [index]: value
      })
    }

    btnOnClick = v => {
      if (this.props.OkOnClick) {
        this.props.OkOnClick(v)
      }
    }

    cancelOnClick = v => {
      if (this.props.CancelOnClick) {
        this.props.CancelOnClick(v)
      }
    }

    onRefClike = v => {
      console.log('This is how the parent component calls the child component')
      console.log(v)
    }

    render() {
      let { showLine, stripVisible, showBtn, disContent, disFooter } = this.state
      let { leftColor, btnOkStyle, padding, title, rightContent, children, btnOk, btnCancel } = this.props
      return (
        <>
          <div className={Style.contentHeaderDiv}>
            <div
              className={showLine && (disContent || disFooter) ? Style.contentHeader : Style.contentHeaderNoBorder}
              style={{ padding }}
            >
              <div className={Style.leftStyle}>
                { stripVisible && <div style={{ marginRight: '6px', width: '4px', height: '16px', borderRadius: '1px', backgroundColor: leftColor, display: 'inline' }}>&nbsp;</div>}
                <span>{title}</span>
              </div>
              <div className={Style.rightStyle}>
                {rightContent && rightContent}
              </div>
            </div>

            {disContent && (
              <div className={showLine && disFooter ? Style.contentBody : Style.contentBodyNoBorder}
                style={{ padding }}
              >
                {children}
              </div>
            )}
            {disFooter && (
              <div className={showBtn ? Style.footerBtn : null}>
                <div className={Style.rightStyleOk} onClick={this.btnOnClick} style={btnOkStyle && btnOkStyle}>
                  {btnOk}
                </div>
                <div className={Style.rightStyleCancel} onClick={this.cancelOnClick}>
                  {btnCancel}
                </div>
              </div>
            )}
          </div>
        </>
      )
    }
}

export default SYCardInfo
