import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions, setCurrentQuestion } from './actions/getQuestions'
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
    currentSurveyId: state.survey.currentSurveyId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => { dispatch(getQuestions()) },
    setCurrentQuestion: (questions) => { dispatch(setCurrentQuestion(questions)) },
    postAnswer: (question, answer) => { dispatch(postAnswer(question, answer)) }
  }
}


class SurveyQuestionsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: null,
      radioOptions: { 0: 'No Opinion', 1: 'Not Important', 2: 'Little Importance', 3: 'Moderate Importance', 4: 'Important', 5: 'Extremely Important'},
      errors: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.props.getQuestions()
    if (!this.props.currentSurveyId) {
      this.props.history.push('/survey/')
    }
  }

  handleSelect(event) {
    this.setState({ selectedValue: event.target.value })
  }

  handleClick() {
    if (this.state.selectedValue) {
      let answer = this.createPayload()
      this.props.postAnswer(this.props.currentQuestion, answer)
      this.props.setCurrentQuestion(this.props.unansweredQuestions)
      this.setState({ selectedValue: null, errors: '' })
    } else {
      this.setState({ errors: 'Please select one of the options below before proceeding.'})
    }
  }

  createPayload() {
    let payload = { question_id: this.props.currentQuestion.id, importance_value: this.state.selectedValue, survey_id: this.props.currentSurveyId }
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
        {this.state.errors}<br/>
        <div className='question'>{this.props.currentQuestion.question_body}</div>
        <RadioButtons radioOptions={this.state.radioOptions} handleSelect={this.handleSelect} selectedValue={this.state.selectedValue}/>
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
