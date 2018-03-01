export const SET_NAME_VALUE = 'SET_NAME_VALUE'
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE'
export const SET_FORM_COMPLETE = 'SET_FORM_COMPLETE'
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS'

let setNameValue = value => {
  return {
    type: SET_NAME_VALUE,
    value
  }
}

let setEmailValue = value => {
  return {
    type: SET_EMAIL_VALUE,
    value
  }
}

let setFormComplete = () => {
  return {
    type: SET_FORM_COMPLETE
  }
}

let formComplete = () => dispatch => {
  dispatch(setFormComplete())
}



let setContactValue = (id, value) => dispatch => {
  if (id === 'name') {
    dispatch(setNameValue(value))
  } else if (id === 'email') {
    dispatch(setEmailValue(value))
  }
}

let saveContactSuccess = () => {
  return {
    type: SAVE_CONTACT_SUCCESS
  }
}

let saveContact = (payload) => dispatch => {
  debugger
  return fetch('/api/v1/contacts', {
    method: 'POST',
    body: JSON.stringify(payload),
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' }
  }) .then(response => {
    response.ok ? dispatch(saveContactSuccess())
    : null
  })
}

export { setContactValue, formComplete, saveContact }
