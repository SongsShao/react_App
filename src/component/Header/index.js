import React from 'react'
import './index.css'

class Header extends React.Component {
  state={}

  render() {
    return (
      <>
        <div className='title'>
          <span className='titleLeft'>{this.props.header}</span>
          <span className='titleRight'>走走停停！</span>
        </div>
      </>
    )
  }
}

export default Header
