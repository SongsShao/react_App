/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'

function Index() {
  return (
    <>
      <div>this is cloud developer！</div>
      <div>
        window.screen.availHeight:
        {' '}
        {window.screen.availHeight}
      </div>
      <div>
        document.documentElement.clientHeight:
        {' '}
        {document.documentElement.clientHeight}
      </div>
      <div>
      document.body.clientHeight
        {' '}
        {document.body.clientHeight}
      </div>
      <div>
      document.body.offsetHeight
        {' '}
        {document.body.offsetHeight}
      </div>
      <div>
      document.body.scrollHeight
        {' '}
        {document.body.scrollHeight}
      </div>
      <div>
      window.screen.height
        {' '}
        {window.screen.height}
      </div>

    </>
  )
}

export default Index
