import React from 'react'

class ComponentUI extends React.Component {
    state

    render() {
      const { data } = this.props
      return (
        <>
          <data.component props={this.props}></data.component>
        </>
      )
    }
}

export default ComponentUI
