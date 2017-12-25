import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { validateInputPopulated } from './actions/trackContactForm'

import SurveyForm from '../survey/SurveyForm'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    validateInputPopulated: (inputId, value) => dispatch(validateInputPopulated(inputId, value))
  }
}

class ContactUsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: { localPart: '', company: '', organization: '' },
      formComplete: false
    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }

  handleName(event) {
    this.setState({ name: event.target.value })
    this.props.validateInputPopulated(event.target.id, event.target.value)
  }

  handleEmail(event) {
    let nextState = Object.assign({}, this.state.email, {[event.target.id]: event.target.value})
    this.setState({ email: nextState })
  }

  render() {
    let submitButton
    if (this.state.formComplete) {
      submitButton = <button>Submit</button>
    }
    return(
      <div>
        <h1>Contact Us</h1>
        <form>
          <label id='name'>Name:
            <input id='name' onChange={this.handleName} value={this.state.name} />
          </label>
          <label id='email'>Email:
            <input id='localPart' onChange={this.handleEmail} value={this.state.email.localPart}/>@
            <input id='company' onChange={this.handleEmail} value={this.state.email.company}/>.
            <input id='organization' onChange={this.handleEmail} value={this.state.email.organization}/>
          </label>
        </form>
      </div>
    )
  }
}

const ContactUs = connect(mapStateToProps, mapDispatchToProps)(ContactUsContainer)

export default ContactUs
