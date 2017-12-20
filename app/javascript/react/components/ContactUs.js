import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import SurveyForm from '../survey/SurveyForm'

const ContactUs = props => {
  return(
    <div>
      <Switch>
        <Route strict path={`${props.match.path}survey`} component={SurveyForm} />
        <div>
          <h1>Contact Us</h1>
          <div className='survey plug'>
            <h2>Please take our survey!</h2>
            <p>
              We are currently in the process of gathering data to aid
              in construction and vision reaization.
            </p>
            <p>
              Your willingness to take 2 minutes out of your time to helps us hone in on
              what's missing by way of community connectedness will be greatly appreciated!
            </p>
            <NavLink to={`${props.match.path}survey`}><button>Start Survey</button></NavLink>
          </div>
        </div>
      </Switch>
    </div>
  )
}

export default ContactUs
