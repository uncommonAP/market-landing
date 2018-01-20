import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDemographicQuestions, setCurrentQuestion, getContentQuestions } from './actions/getQuestions'
import { setValue, clearValue } from './actions/setValue'
import { postAnswer } from './actions/answerQuestion'
import { NavLink } from 'react-router-dom'
import ValueQuestion from './components/ValueQuestion'
import OpenEnded from './components/OpenEnded'

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion.currentQuestion,
    demographicQuestions: state.currentQuestion.demographicQuestions,
    contentQuestions: state.currentQuestion.contentQuestions,
    followUpQuestions: state.currentQuestion.followUpQuestions,
    activeType: state.currentQuestion.activeType,
    previousActiveType: state.currentQuestion.previousActiveType,
    currentSurveyId: state.survey.currentSurveyId,
    surveyComplete: state.currentQuestion.surveyComplete,
    fetchedQuestionType: state.currentQuestion.fetchedQuestionType,
    lastQuestion: state.currentQuestion.lastQuestion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDemographicQuestions: () => { dispatch(getDemographicQuestions()) },
    getContentQuestions: (type) => { dispatch(getContentQuestions(type)) },
    setCurrentQuestion: (activeType, questions) => { dispatch(setCurrentQuestion(activeType, questions)) },
    postAnswer: (question, answer) => { dispatch(postAnswer(question, answer)) }
  }
}


class SurveyQuestionsContainer extends Component {
  constructor(props) {
    super(props)
    this.answerQuestion = this.answerQuestion.bind(this)
  }

  componentWillMount() {
    this.props.getDemographicQuestions()
    if (!this.props.currentSurveyId) {
      this.props.history.push('/survey/')
    }
  }

  componentDidUpdate() {
    if (this.props.lastQuestion && this.props.fetchedQuestionType !== 'general_population' && this.props.contentQuestions.length === 0) {
      this.props.getContentQuestions('general_population')
    }
    if (this.props.surveyComplete) {
      this.props.history.push('/contact/')
    }
  }

  answerQuestion(payload) {
    this.props.postAnswer(this.props.currentQuestion, payload)
    this.props.setCurrentQuestion(this.props.activeType, this.props[`${this.props.activeType}Questions`])
  }

  render() {
    if (Object.keys(this.props.currentQuestion).length > 0) {
      return(
        <ValueQuestion question={this.props.currentQuestion} surveyId={this.props.currentSurveyId} answerQuestion={this.answerQuestion} questionsLength={this.props[`${this.props.activeType}Questions`].length}/>
      )
    } else {
      return(<div>loading...</div>)
    }
  }
}

const SurveyQuestions = connect(mapStateToProps, mapDispatchToProps)(SurveyQuestionsContainer)

export default SurveyQuestions
