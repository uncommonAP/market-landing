import React from 'react'
import { NavLink } from 'react-router-dom'

const SurveyPlug = props => {
  return(
    <div className='survey plug top-border'>
      <h2>Please take our survey!</h2>
      <p>
        We are currently in the process of gathering data to aid
        in construction and vision reaization.
      </p>
      <p>
        Your willingness to take 2 minutes out of your time to helps us hone in on
        what's missing by way of community connectedness will be greatly appreciated!
      </p>
      <NavLink to='/survey/'><button>Start Survey</button></NavLink>
    </div>
  )
}

export default SurveyPlug
