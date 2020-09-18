/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

class ComponentUI extends React.Component {
    state

    render() {
      const { data } = this.props
      return (
        <>
          {data.url
            ? (
              <iframe key
                style={{ width: '100%', height: document.documentElement.clientHeight - 45.5, border: 0 }}
                src={data.url}
              >
              </iframe>
            ) : <data.component props={this.props}></data.component> }

        </>
      )
    }
}

export default ComponentUI
