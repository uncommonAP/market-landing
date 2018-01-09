import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setValue, clearValue } from '../actions/setValue'

const mapStateToProps = state => {
  return {
    textValue: state.currentQuestion.textValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (type, value) => { dispatch(setValue(type, value)) },
    clearValue: (type) => { dispatch(clearValue(type)) }
  }
}

class OpenEndedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.props.setValue(event.target.type, event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.textValue.length > 5) {
      let payload = { question_id: this.props.question.id, survey_id: this.props.surveyId, answer: this.props.textValue }
      this.props.answerQuestion(payload)
      this.props.clearValue('text')
      this.setState({ error: '' })
    } else {
      this.setState({ error: 'Must have at least 5 characters'})
    }
  }

  render(){
    return(
      <div className='question'>{this.props.question.question_body}<hr/>
        <form onSubmit={this.handleSubmit}>
          <div>{this.state.error}</div>
          <label className='answer-input'>
            <input type='text' value={this.props.textValue} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Next'/>
        </form>
      </div>
    )
  }
}

const OpenEnded = connect(mapStateToProps, mapDispatchToProps)(OpenEndedContainer)

export default OpenEnded
