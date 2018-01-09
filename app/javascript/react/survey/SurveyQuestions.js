import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions, setCurrentQuestion } from './actions/getQuestions'
import { setValue, clearValue } from './actions/setValue'
import { postAnswer } from './actions/answerQuestion'
import { NavLink } from 'react-router-dom'
import ValueQuestion from './components/ValueQuestion'
import OpenEnded from './components/OpenEnded'

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion.currentQuestion,
    questionsPopulated: state.currentQuestion.questionsPopulated,
    answeredQuestions: state.answers.answeredQuestions.length,
    unansweredQuestions: state.currentQuestion.unansweredQuestions,
    currentSurveyId: state.survey.currentSurveyId,
    answerType: state.currentQuestion.answerType
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
    this.answerQuestion = this.answerQuestion.bind(this)
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

  answerQuestion(payload) {
    this.props.postAnswer(this.props.currentQuestion, payload)
    this.props.setCurrentQuestion(this.props.unansweredQuestions)
  }

  render() {
    if (Object.keys(this.props.currentQuestion).length > 0) {
      const formType = {
        'OpenEnded': OpenEnded,
        'ValueQuestion': ValueQuestion
      }
      const QuestionForm = formType[this.props.currentQuestion.type]

      return(
        <QuestionForm question={this.props.currentQuestion} surveyId={this.props.currentSurveyId} answerQuestion={this.answerQuestion}/>
      )
    } else {
      return(<div>loading...</div>)
    }
  }
}

const SurveyQuestions = connect(mapStateToProps, mapDispatchToProps)(SurveyQuestionsContainer)

export default SurveyQuestions
