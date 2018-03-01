import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ValidationLayer from 'react-validation-layer'
import { setContactValue, formComplete, saveContact } from './actions/setContactValue'

import SurveyForm from '../survey/SurveyForm'

const mapStateToProps = state => {
  return {
    name: state.contactInputs.name,
    email: state.contactInputs.email,
    currentSurveyId: state.survey.currentSurveyId,
    contactSaved: state.contactInputs.contactSaved
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setContactValue: (id, value) => { dispatch(setContactValue(id, value))},
    saveContact: (payload) => { dispatch(saveContact(payload))}
  }
}

class ContactUsContainer extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (!this.props.currentSurveyId) {
      this.props.history.push('/')
    }
  }

  componentDidUpdate() {
    if (this.props.contactSaved) {
      this.props.history.push('/complete/')
    }
  }

  handleInput(event) {
    this.props.setContactValue(event.fieldId, event.value)
  }

  handleSubmit(event) {
    let payload = { name: this.props.name, email: this.props.email }
    this.props.saveContact(payload)
  }

  render() {
    return(
      <div>
        <h1>Contact Us</h1>
        <ValidationLayer
          strategy="onFirstChange"
          data={{
            name: this.props.name,
            email: this.props.email
          }}
          fields={{
            name: true,
            email: { validate: email => !!email }
          }}
          handlers={{
            onChange: this.handleInput,
            onSubmit: this.handleSubmit
          }}
          >
            {layer => (
              <form onSubmit={layer.handleSubmit}>
                <label className='form-input' id='name'><strong>Name:</strong>
                <input type='text' id='name' {...layer.getPropsFor('name')} />
              </label>
              <label className='form-input' id='email'><strong>Email:</strong>
              <input type='text' id='email' {...layer.getPropsFor('email')} />
              <div className={layer.getStatusFor('email')} >
                {layer.getMessageFor('email')}
              </div>
            </label>

            <button {...layer.getSubmitButtonProps()}>
              Submit
            </button>
          </form>
        )}
      </ValidationLayer>
      </div>
    )
  }
}

const ContactUs = connect(mapStateToProps, mapDispatchToProps)(ContactUsContainer)

export default ContactUs
