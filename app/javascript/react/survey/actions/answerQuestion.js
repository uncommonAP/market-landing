export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_ANSWER_SUCCESS = 'SAVE_ANSWER_SUCCESS'
export const CREATE_ANSWER_PAYLOAD = 'CREATE_ANSWER_PAYLOAD'


let createAnswerPayload = payload => {
  return {
    type: CREATE_ANSWER_PAYLOAD,
    payload
  }
}

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

let constructAnswerPayload = (surveyId, question, content) => dispatch => {
  let payload = { survey_id: surveyId, question_id: question.id, answer: content }
  dispatch(createAnswerPayload(payload))
}

let postAnswer = (question, answer) => dispatch => {
  dispatch(saveAnswer())
  return fetch('/api/v1/answers.json', {
    method: 'POST',
    body: JSON.stringify(answer),
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(saveAnswerSuccess(question, answer))
  })
}

export { postAnswer }
