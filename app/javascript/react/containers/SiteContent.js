import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'
import About from '../components/About'
import Mission from '../components/Mission'
import Members from '../components/Members'
import ContactUs from '../components/ContactUs'

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
          <Route strict path='/contact-us/' component={ContactUs} />
        </Switch>
        <div id='survey-button' />
      </div>
    )
  }
}

export default SiteContent
