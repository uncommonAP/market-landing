export const SET_RADIO_VALUE = 'SET_RADIO_VALUE'
export const SET_TEXT_VALUE = 'SET_TEXT_VALUE'
export const SET_ANSWER_TYPE = 'SET_ANSWER_TYPE'
export const RESET_FORM = 'RESET_FORM'

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

let resetForm = () => {
  return {
    type: RESET_FORM
  }
}

export { resetForm, setTextValue, setRadioValue }
