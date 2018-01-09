import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'
import SurveyForm from '../survey/SurveyForm'
import SurveyPlug from '../components/SurveyPlug'
import LandingContent from '../components/LandingContent'
import ContactUs from '../contact/ContactUs'

class SiteContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <NavBar/>
        <div className='background emphasize-inset'>
          <div>
            <h1>Catchy Headline</h1>
            <LandingContent />
          </div>
          <Switch>
            <Route strict path='/survey/' component={SurveyForm} />
            <SurveyPlug/>
          </Switch>
          <ContactUs />
        </div>
      </div>
    )
  }
}

export default SiteContent
