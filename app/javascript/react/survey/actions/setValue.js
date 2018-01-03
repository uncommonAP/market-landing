export const SET_RADIO_VALUE = 'SET_RADIO_VALUE'
export const SET_TEXT_VALUE = 'SET_TEXT_VALUE'
export const SET_ANSWER_TYPE = 'SET_ANSWER_TYPE'

let setRadioValue = value => {
  return {
    type: SET_RADIO_VALUE,
    value
  }
}

let setTextValue = value => {
  return {
    type: SET_TEXT_VALUE,
    value
  }
}

let setAnswerType = type => {
  return {
    type: SET_ANSWER_TYPE,
    type
  }
}

let getAnswerType = questionType => dispatch => {
  if (questionType === 'OpenEnded') {
    dispatch(setAnswerType('text'))
  } else if (questionType === 'ValueQuestion') {
    dispatch(setAnswerType('radio'))
  }
}

let setValue = (type, value) => dispatch => {
  if (type === 'radio') {
    dispatch(setRadioValue(value))
  } else if (type === 'text') {
    dispatch(setTextValue(value))
  }
}

let clearValue = type => dispatch => {
  if (type === 'radio') {
    dispatch(setRadioValue(null))
  } else if (type === 'text') {
    dispatch(setTextValue(''))
  }
}

export { setValue, clearValue }
