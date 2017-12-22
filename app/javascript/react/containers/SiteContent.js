import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'
import About from '../components/About'
import Mission from '../components/Mission'
import Members from '../components/Members'
import SurveyForm from '../survey/SurveyForm'
import ContactUs from '../components/ContactUs'
import SurveyPlug from '../components/SurveyPlug'

class SiteContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route strict path='/about/' component={About} />
          <Route strict path='/mission/' component={Mission} />
          <Route strict path='/members/' component={Members} />
          <Route strict path='/survey/' component={SurveyForm} />
          <Route strict path='/contact-us/' component={ContactUs} />
          <SurveyPlug/>
        </Switch>
      </div>
    )
  }
}

export default SiteContent
