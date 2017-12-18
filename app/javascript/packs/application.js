import React from 'react'
import ReactDOM from 'react-dom'

import LandingPage from '../react/LandingPage'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LandingPage />, document.getElementById('landing')
  )
})
