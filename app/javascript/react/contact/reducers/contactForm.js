import { TRACK_FORM_INPUT, INPUT_FILLED } from '../actions/trackContactForm'

let intialState = {
  inputs: {
    name: false,
    localPart: false,
    company: false,
    organization: false
  },
  trackedInput: null
}

const contactForm = (state = intialState, action) => {
  switch (action.type) {
    case TRACK_FORM_INPUT:
      return Object.assign({}, state, { trackedInput: action.inputId })
    case INPUT_FILLED:
      let inputValue = Object.assign({}, state.inputs, { [action.inputId]: action.value })
      return Object.assign({}, state, {inputs: inputValue} )
    default:
      return state
  }
}

export default contactForm
