import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import SurveyForm from '../survey/SurveyForm'

class ContactUs extends Component {
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
  }

  handleEmail(event) {
    let nextState = Object.assign({}, this.state.email, {[event.target.id]: event.target.value})
    this.setState({ email: nextState })
  }

  checkFormComplete() {
    if (this.state.name !== '' && this.emailCompletion()) {

    }
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

export default ContactUs
