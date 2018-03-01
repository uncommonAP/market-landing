import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'
import SurveyForm from '../survey/SurveyForm'
import SurveyPlug from '../components/SurveyPlug'
import LandingContent from '../components/LandingContent'
import ContactUs from '../contact/ContactUs'
import CompletePage from '../components/CompletePage'

class SiteContent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <NavBar/>
        <h1>Catchy Headline</h1>
        <div className='page'>
          <div className='background emphasize-inset survey-container'>
            <Switch>
              <Route strict path='/survey/' component={SurveyForm} />
              <Route strict path='/contact/' component={ContactUs} />
              <Route strict path='/complete/' component={CompletePage} />
              <SurveyPlug/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteContent
