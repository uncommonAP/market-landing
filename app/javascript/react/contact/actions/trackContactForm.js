export const TRACK_FORM_INPUT = 'TRACK_FORM_INPUT'
export const INPUT_FILLED = 'INPUT_FILLED'

let trackFormInput = inputId => {
  return {
    type: TRACK_FORM_INPUT,
    inputId
  }
}

let inputFilled = (inputId, value) => {
  return {
    type: INPUT_FILLED,
    inputId,
    value
  }
}

let validateInputPopulated = (inputId, value) => dispatch => {
  if (value !== '' && value !== ' ') {
    dispatch(inputValid(inputId, value))
  }
}

export { validateInputPopulated }
