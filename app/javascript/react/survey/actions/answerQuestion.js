export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_ANSWER_SUCCESS = 'SAVE_ANSWER_SUCCESS'

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
