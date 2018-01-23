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

  componentDidMount() {
    alert("refactor activeType out of lastQuestion, 'other' answer logic")
  }

  render() {
    return(
      <div>
        <NavBar/>
        <h1>Catchy Headline</h1>
        <div className='page'>
          <div className='content'>
            <LandingContent />
            <div className='parallax p-one'></div>
          </div>
          <div className='background emphasize-inset'>
            <Switch>
              <Route strict path='/survey/' component={SurveyForm} />
              <Route strict path='/contact/' component={ContactUs} />
              <SurveyPlug/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteContent
