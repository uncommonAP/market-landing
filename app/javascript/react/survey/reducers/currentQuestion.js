import { FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, SET_QUESTION_AS_CURRENT, LAST_QUESTION } from '../actions/getQuestions'
import { SET_RADIO_VALUE, SET_TEXT_VALUE, SET_ANSWER_TYPE } from '../actions/setValue'

let initialState = {
  unansweredQuestions: [],
  currentQuestion: {},
  isFetching: false,
  questionsPopulated: false,
  lastQuestion: false,
  radioValue: null,
  textValue: '',
  answerType: ''
}

const currentQuestion = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        unansweredQuestions: action.questions,
        questionsPopulated: true
      })
    case SET_QUESTION_AS_CURRENT:
      return Object.assign({}, state, {
        currentQuestion: action.question,
      })
    case LAST_QUESTION:
      return Object.assign({}, state, { lastQuestion: true })
    case SET_ANSWER_TYPE:
      return Object.assign({}, state, { answerType: action.type })
    case SET_RADIO_VALUE:
      return Object.assign({}, state, { radioValue: action.value })
    case SET_TEXT_VALUE:
      return Object.assign({}, state, { textValue: action.value })
    default:
      return state
  }
}

export default currentQuestion
