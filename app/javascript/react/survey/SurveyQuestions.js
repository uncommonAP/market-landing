import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions, setCurrentQuestion } from './actions/getQuestions'
import { setValue, clearValue } from './actions/setValue'
import { postAnswer } from './actions/answerQuestion'
import { NavLink } from 'react-router-dom'
import RadioButtons from './components/RadioButtons'

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion.currentQuestion,
    questionsPopulated: state.currentQuestion.questionsPopulated,
    answeredQuestions: state.answers.answeredQuestions.length,
    unansweredQuestions: state.currentQuestion.unansweredQuestions,
    lastQuestion: state.currentQuestion.lastQuestion,
    currentSurveyId: state.survey.currentSurveyId,
    radioValue: state.currentQuestion.radioValue,
    textValue: state.currentQuestion.textValue,
    answerType: state.currentQuestion.answerType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => { dispatch(getQuestions()) },
    setCurrentQuestion: (questions) => { dispatch(setCurrentQuestion(questions)) },
    postAnswer: (question, answer) => { dispatch(postAnswer(question, answer)) },
    setValue: (type, value) => { dispatch(setValue(type, value)) },
    clearValue: (type) => { dispatch(clearValue(type)) }
  }
}


class SurveyQuestionsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: ''
    }
    this.handleValue = this.handleValue.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.props.getQuestions()
    if (!this.props.currentSurveyId) {
      this.props.history.push('/survey/')
    }
  }

  componentDidUpdate() {
    if (this.props.currentQuestion.length > 0) {
      this.props.getAnswerType(this.props.currentQuestion.type)
    }
  }

  handleValue(event) {
    this.props.setValue(event.target.type, event.target.value)
  }

  handleClick() {
    if (this.props.radioValue !== null || this.props.textValue.length > 5) {
      let answer = this.createPayload()
      this.props.postAnswer(this.props.currentQuestion, answer)
      this.props.setCurrentQuestion(this.props.unansweredQuestions)
      this.props.clearValue()
    } else {
      this.setState({ errors: 'You must answer the question before proceeding' })
    }
  }

  createPayload() {
    let answerValue;
    if (this.props.currentQuestion.type === 'OpenEnded') {
      answerValue = this.props.textValue
    } else if (this.props.currentQuestion.type === 'ValueQuestion') {
      answerValue = this.props.radioValue
    }
    let payload = { question_id: this.props.currentQuestion.id, answer: answerValue, survey_id: this.props.currentSurveyId }
    return payload
  }

  render() {
    let naviButton
    if (this.props.lastQuestion) {
      naviButton = <NavLink to='/contact-us/'><button>Finish</button></NavLink>
    } else {
      naviButton = <button onClick={this.handleClick}>Next</button>
    }

    return(
      <div className='survey'>
        <div>{this.state.errors}</div>
        <div className='question'>{this.props.currentQuestion.question_body}</div>
        <RadioButtons handleValue={this.handleValue} selectedValue={this.state.selectedValue}/>
        {naviButton}<hr/>
        <div>
          <strong>Questions Remaining:</strong> {this.props.unansweredQuestions.length + 1}<br/>
          <strong>Questions Answered:</strong> {this.props.answeredQuestions}
        </div>
      </div>
    )
  }
}

const SurveyQuestions = connect(mapStateToProps, mapDispatchToProps)(SurveyQuestionsContainer)

export default SurveyQuestions
