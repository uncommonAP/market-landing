import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions, setCurrentQuestion } from './actions/getQuestions'
import { postAnswer } from './actions/answerQuestion'
import { NavLink } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion.currentQuestion,
    questionsPopulated: state.currentQuestion.questionsPopulated,
    answeredQuestions: state.answers.answeredQuestions.length,
    unansweredQuestions: state.currentQuestion.unansweredQuestions,
    lastQuestion: state.currentQuestion.lastQuestion
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
    let payload = { question_id: this.props.currentQuestion.id, importance_value: this.state.selectedValue }
    return payload
  }

  render() {
    let surveyFormButtons = Object.keys(this.state.radioOptions).map(value => {
      return(
        <label id={value} key={`radio-${value}`}>
          <input type='radio' value={value} onClick={this.handleSelect} checked={this.state.selectedValue === value}/>
          {this.state.radioOptions[value]}
        </label>
      )
    })

    let naviButton
    if (this.props.lastQuestion) {
      naviButton = <NavLink to='/contact-us/'><button>Finish</button></NavLink>
    } else {
      naviButton = <button onClick={this.handleClick}>Next</button>
    }

    return(
      <div className='survey'>
        {this.state.errors}<br/>
        {this.props.currentQuestion.question_body}
        <form>
          {surveyFormButtons}
        </form>
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
