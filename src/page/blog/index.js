/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'

class Blog extends React.Component {
  componentDidMount() {
    console.log('鲁班大师智障250')
  }

  render() {
    return (
      <>
        <iframe style={{ width: '100%', height: '93vh', border: 0 }} key src='https://songsshao.github.io/'></iframe>
      </>
    )
  }
}

export default Blog
