import React, { Component } from 'react'
import { NavBar, Modal } from 'antd-mobile'
import { Icon } from 'antd'

class NavBarHeader extends Component {
  state={
    navBarHeight: 0,
    id: Math.random(4),
    onLeftClick: () => { },
    modal2: false

  }
  componentDidMount() {
    this.getNavBarHeight()
  }
  getNavBarHeight=() => {
    this.setState({
      navBarHeight: document.getElementById(this.state.id).clientHeight
    })
  }
  getheaderMargin=() => {
    this.setState({
      navBarHeight: this.props.headerMargin
    })
  }

  shareAlt = () => {
    this.setState({
      modal2: !this.state.modal2
    })
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    })
  }

  render() {
    const { onClick } = this.props
    let rightContent = (
      <div>
        <Icon type='share-alt' onClick={this.shareAlt} style={{ color: '#4A90E2', marginRight: '15px' }} />
        <Icon onClick={onClick} type='logout' style={{ color: '#4A90E2' }} />
      </div>
    )
    return (
      <div style={{ marginBottom: this.state.navBarHeight }}>
        <NavBar
          mode={this.props.mode ? this.props.mode : 'light'}
          id={this.state.id}
          style={{ width: '100%', borderBottom: '0.5px solid #108ee9', position: 'fixed', zIndex: '999', marginTop: this.props.headerMargin ? '0px' : -this.state.navBarHeight }}
          rightContent={rightContent}
        >
          <div style={{ fontSize: '16px', color: 'grey' }}>{this.props.title ? this.props.title : '标题'}</div>
        </NavBar>

        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType='slide-up'

        >
          this is share-alt panel!
        </Modal>
      </div>
    )
  }
}

export default NavBarHeader

