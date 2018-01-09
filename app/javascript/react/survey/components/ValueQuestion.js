import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setValue, clearValue } from '../actions/setValue'

const mapStateToProps = state => {
  return {
    radioValue: state.currentQuestion.radioValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (type, value) => { dispatch(setValue(type, value)) },
    clearValue: (type) => { dispatch(clearValue(type)) }
  }
}

class ValueQuestionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSelect(event) {
    this.props.setValue(event.target.type, event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.radioValue !== null) {
      let payload = { question_id: this.props.question.id, survey_id: this.props.surveyId, answer: this.props.radioValue }
      this.props.answerQuestion(payload)
      this.props.clearValue('radio')
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Must select a value' })
    }
  }

  render() {
    let radioOptions = { 0: 'No Opinion', 1: 'Not Important', 2: 'Little Importance', 3: 'Moderate Importance', 4: 'Important', 5: 'Extremely Important'}

    let surveyFormButtons = Object.keys(radioOptions).map(value => {
      return(
        <label className='radio-button' id={value} key={`radio-${value}`}>
          <input type='radio' value={value} onClick={this.handleSelect} checked={this.props.radioValue === value}/>
          {radioOptions[value]}
        </label>
      )
    })

    return(
      <div className='question'>{this.props.question.question_body}<hr/>
        <form className='radio-list' onSubmit={this.handleSubmit}>
          <div>{this.state.error}</div>
          {surveyFormButtons}<br/>
          <input type='submit' value='Next'/>
        </form>
      </div>
    )
  }
}

const ValueQuestion = connect(mapStateToProps, mapDispatchToProps)(ValueQuestionContainer)

export default ValueQuestion
