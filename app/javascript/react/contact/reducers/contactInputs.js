import { SET_NAME_VALUE, SET_EMAIL_VALUE, SET_FORM_COMPLETE, SAVE_CONTACT_SUCCESS } from '../actions/setContactValue'

let initialState = {
  name: '',
  email: '',
  contactSaved: false
}

const contactInputs = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return Object.assign({}, state, { name: action.value })
    case SET_EMAIL_VALUE:
      return Object.assign({}, state, { email: action.value })
    case SAVE_CONTACT_SUCCESS:
      return Object.assign({}, state, { contactSaved: true })
    default:
      return state
  }
}

export default contactInputs
