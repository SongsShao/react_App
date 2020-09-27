import React from 'react'
import './index.css'

class Header extends React.Component {
  state={}

  render() {
    return (
      <>
        <div className='title'>
          <span className='titleLeft'>{this.props.header}</span>
          <span className='titleRight'>Stop and go straight forward！</span>
          <div style={{ textAlign: 'right', float: 'right' }}>
            {this.props.right && this.props.right}
          </div>
        </div>
      </>
    )
  }
}

export default Header
