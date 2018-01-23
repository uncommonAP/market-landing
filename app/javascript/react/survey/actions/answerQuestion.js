export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_ANSWER_SUCCESS = 'SAVE_ANSWER_SUCCESS'
export const SET_OTHER_VISIBLE = 'SET_OTHER_VISIBLE'
export const SET_OTHER_HIDDEN = 'SET_OTHER_HIDDEN'
export const SET_OTHER_PAYLOAD = 'SET_OTHER_PAYLOAD'
export const UNSET_OTHER_PAYLOAD = 'UNSET_OTHER_PAYLOAD'

let saveAnswer = () => {
  return {
    type: SAVE_ANSWER
  }
}

let saveAnswerSuccess = (question, answer) => {
  let answerObject = { question: question.question_body, answer: answer.importance_value }
  return {
    type: SAVE_ANSWER_SUCCESS,
    answerObject
  }
}

let setOtherVisible = () => {
  return {
    type: SET_OTHER_VISIBLE
  }
}

let setOtherHidden = () => {
  return {
    type: SET_OTHER_HIDDEN
  }
}

let setOtherPayload = () => {
  return {
    type: SET_OTHER_PAYLOAD
  }
}

let unsetOtherPayload = () => {
  return {
    type: UNSET_OTHER_PAYLOAD
  }
}

let postAnswer = (question, answer) => dispatch => {
  dispatch(saveAnswer())
  return fetch('/api/v1/open_answers.json', {
    method: 'POST',
    body: JSON.stringify(answer),
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(saveAnswerSuccess(question, answer))
  })
}

export {
  postAnswer,
  setOtherVisible,
  setOtherHidden,
  setOtherPayload,
  unsetOtherPayload
}
