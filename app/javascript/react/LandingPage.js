import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SiteContent from './containers/SiteContent'

const LandingPage = props => {
  return(
    <BrowserRouter>
      <SiteContent />
    </BrowserRouter>
  )
}

export default LandingPage
