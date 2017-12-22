import { SAVE_ANSWER, SAVE_ANSWER_SUCCESS } from '../actions/answerQuestion'

let initialState = {
  isFetching: false,
  answeredQuestions: []
}

const answers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ANSWER:
      return Object.assign({}, state, { isFetching: true })
    case SAVE_ANSWER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        answeredQuestions: [...state.answeredQuestions, action.answerObject]
      })
    default:
      return state
  }
}

export default answers
