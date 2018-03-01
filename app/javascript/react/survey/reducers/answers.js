import { SAVE_ANSWER, SAVE_ANSWER_SUCCESS, SET_OTHER_VISIBLE, SET_OTHER_HIDDEN, SET_OTHER_PAYLOAD, UNSET_OTHER_PAYLOAD } from '../actions/answerQuestion'
import { SET_RADIO_VALUE, SET_TEXT_VALUE, RESET_FORM } from '../actions/setValue'

let initialState = {
  isFetching: false,
  answeredQuestions: [],
  otherClassName: 'hidden',
  otherPayload: false,
  radioValue: null,
  textValue: '',
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
    case SET_OTHER_VISIBLE:
      return Object.assign({}, state, { otherClassName: 'visible' })
    case SET_OTHER_HIDDEN:
      return Object.assign({}, state, { otherClassName: 'hidden' })
    case SET_OTHER_PAYLOAD:
      return Object.assign({}, state, { otherPayload: true })
    case UNSET_OTHER_PAYLOAD:
      return Object.assign({}, state, { otherPayload: false })
    case SET_RADIO_VALUE:
      return Object.assign({}, state, { radioValue: action.value })
    case SET_TEXT_VALUE:
      return Object.assign({}, state, { textValue: action.value })
    case RESET_FORM:
      return Object.assign({}, state, {
        textValue: '',
        radioValue: null,
        otherPayload: false,
        otherClassName: 'hidden'
      })
    default:
      return state
  }
}

export default answers
