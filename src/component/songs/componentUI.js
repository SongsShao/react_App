/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Modal } from 'antd-mobile'
import NavBarHeader from '../NavBarHeader/index'

class ComponentUI extends React.Component {
    state = { visible: false }

    componentDidMount() {
      if (this.props.visible) { this.zetState('visible', true) }
      if (this.props.onRef) {
        this.props.onRef(this)
      }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      this.onClick()
    }

    onClick = v => {
      this.setState({
        visible: !this.state.visible
      })
    }

    closeClick = () => {
      this.onClick()
      if (this.props.onCanel) {
        this.props.onCanel()
      }
    }

    zetState = (index, val) => {
      this.setState({
        [index]: val
      })
    }

    render() {
      const { visible } = this.state
      const { data } = this.props
      return (
        <>
          <Modal
            visible={visible}
            platform='android'
            maskTransitionName='fade'
          >
            <div style={{ height: '100%' }}>

              <NavBarHeader title={data.name} onClick={this.closeClick} />
              <div style={{ height: document.documentElement.clientHeight - 45.5, overflowY: scroll }}>
                {data.url
                  ? (
                    <iframe key
                      style={{ width: '100%', height: document.documentElement.clientHeight - 45.5, border: 0 }}
                      src={data.url}
                    >
                    </iframe>
                  ) : <data.component {...this.props}></data.component> }
              </div>
            </div>
          </Modal>
        </>
      )
    }
}

export default ComponentUI
