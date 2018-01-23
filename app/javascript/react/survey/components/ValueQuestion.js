import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRadioValue, resetForm } from '../actions/setValue'
import { getContentQuestions, getFollowUpQuestions, setActiveType } from '../actions/getQuestions'
import { setOtherHidden, setOtherVisible } from '../actions/answerQuestion'
import OpenEnded from './OpenEnded'

const mapStateToProps = state => {
  return {
    radioValue: state.answers.radioValue,
    activeType: state.currentQuestion.activeType,
    otherClassName: state.answers.otherClassName,
    otherPayload: state.answers.otherPayload,
    textValue: state.answers.textValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRadioValue: (value) => { dispatch(setRadioValue(value)) },
    getContentQuestions: (type) => { dispatch(getContentQuestions(type)) },
    getFollowUpQuestions: (sourceQuestionId) => { dispatch(getFollowUpQuestions(sourceQuestionId)) },
    setActiveType: (activeType) => { dispatch(setActiveType(activeType)) },
    resetForm: () => { dispatch(resetForm()) },
    setOtherVisible: () => { dispatch(setOtherVisible()) },
    setOtherHidden: () => { dispatch(setOtherHidden()) }
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
    this.props.setRadioValue(event.target.value)
    if (this.props.question.direction) {
      this.props.getContentQuestions(this.props.question.direction[event.target.value])
    }
    if (this.props.question.follow_up && event.target.value == this.props.question.follow_up_trigger) {
      this.props.getFollowUpQuestions(this.props.question.id, this.props.activeType)
    }
    if (this.props.question.other && event.target.value == this.props.question.other_trigger) {
      this.props.setOtherVisible()
    } else {
      this.props.setOtherHidden()
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.props.radioValue !== null) {
      let payload = { question_id: this.props.question.id, survey_id: this.props.surveyId, answer: this.props.radioValue }
      if (this.props.otherPayload) {
        let otherPayload = Object.assign({}, payload, { other_answer: {answer: this.props.textValue }})
        this.props.answerQuestion(otherPayload)
      } else {
        this.props.answerQuestion(payload)
      }
      this.props.resetForm()
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
          <div className={this.props.otherClassName}>
            <OpenEnded />
          </div>
          <input type='submit' value='Next'/>
        </form>
      </div>
    )
  }
}

const ValueQuestion = connect(mapStateToProps, mapDispatchToProps)(ValueQuestionContainer)

export default ValueQuestion
