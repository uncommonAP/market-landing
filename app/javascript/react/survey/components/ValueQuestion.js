import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setValue, clearValue } from '../actions/setValue'
import { getContentQuestions, getFollowUpQuestions, setActiveType } from '../actions/getQuestions'

const mapStateToProps = state => {
  return {
    radioValue: state.currentQuestion.radioValue,
    activeType: state.currentQuestion.activeType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (type, value) => { dispatch(setValue(type, value)) },
    getContentQuestions: (type) => { dispatch(getContentQuestions(type)) },
    getFollowUpQuestions: (sourceQuestionId) => { dispatch(getFollowUpQuestions(sourceQuestionId)) },
    setActiveType: (activeType) => { dispatch(setActiveType(activeType)) },
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

  componentDidUpdate() {
    if (this.props.questionsLength === 0) {
      this.props.setActiveType(this.props.activeType)
    }
  }

  handleSelect(event) {
    this.props.setValue(event.target.type, event.target.value)
    if (this.props.question.direction) {
      this.props.getContentQuestions(this.props.question.direction[event.target.value])
    }
    if (this.props.question.follow_up && event.target.value == this.props.question.follow_up_trigger) {
      this.props.getFollowUpQuestions(this.props.question.id, this.props.activeType)
    }
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
    let radioOptions = this.props.question.answer_metric

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
