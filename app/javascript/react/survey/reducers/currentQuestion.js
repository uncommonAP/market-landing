import { FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, SET_QUESTION_AS_CURRENT } from '../actions/getQuestions'

let initialState = {
  unansweredQuestions: [],
  currentQuestion: {},
  isFetching: false,
  questionsPopulated: false,
  questionCount: 1
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
        questionCount: state.questionCount++
      })
    default:
      return state
  }
}

export default currentQuestion
