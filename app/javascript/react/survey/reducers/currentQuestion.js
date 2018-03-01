import {
  FETCH_DEMOGRAPHIC_QUESTIONS,
  FETCH_DEMOGRAPHIC_QUESTIONS_SUCCESS,
  FETCH_CONTENT_QUESTIONS,
  FETCH_CONTENT_QUESTIONS_SUCCESS,
  FETCH_FOLLOW_UP_QUESTIONS,
  FETCH_FOLLOW_UP_QUESTIONS_SUCCESS,
  SET_QUESTION_AS_CURRENT,
  LAST_QUESTION,
  SET_ACTIVE_TYPE,
  SURVEY_QUESTIONS_COMPLETE,
  NOT_LAST
} from '../actions/getQuestions'


let initialState = {
  demographicQuestions: [],
  contentQuestions: [],
  followUpQuestions: [],
  currentQuestion: {},
  isFetching: false,
  lastQuestion: false,
  surveyComplete: false,
  activeType: 'demographic',
  previousActiveType: null,
  fetchedQuestionType: ''
}

const currentQuestion = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEMOGRAPHIC_QUESTIONS:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_DEMOGRAPHIC_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        demographicQuestions: action.questions,
      })
    case FETCH_CONTENT_QUESTIONS:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_CONTENT_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        contentQuestions: action.questions,
        fetchedQuestionType: action.questionType
      })
    case FETCH_FOLLOW_UP_QUESTIONS:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_FOLLOW_UP_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        followUpQuestions: action.questions,
        activeType: "followUp",
        previousActiveType: action.previousActiveType
      })
    case SET_QUESTION_AS_CURRENT:
      return Object.assign({}, state, {
        currentQuestion: action.question,
      })
    case LAST_QUESTION:
      return Object.assign({}, state, {
        lastQuestion: true
      })
    case NOT_LAST:
      return Object.assign({}, state, { lastQuestion: false })
    case SET_ACTIVE_TYPE:
      return Object.assign({}, state, { activeType: action.activeType })
    case SURVEY_QUESTIONS_COMPLETE:
      return Object.assign({}, state, { surveyComplete: true })
    default:
      return state
  }
}

export default currentQuestion
