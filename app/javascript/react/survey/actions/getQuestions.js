export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const SET_QUESTION_AS_CURRENT = 'SET_QUESTION_AS_CURRENT'
export const LAST_QUESTION = 'LAST_QUESTION'

let fetchQuestions = () => {
  return {
    type: FETCH_QUESTIONS
  }
}

let fetchQuestionsSuccess = questions => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    questions
  }
}

let setQuestionAsCurrent = question => {
  return {
    type: SET_QUESTION_AS_CURRENT,
    question
  }
}

let lastQuestion = () => {
  return {
    type: LAST_QUESTION
  }
}

let getQuestions = () => dispatch => {
  dispatch(fetchQuestions())
  return fetch('/api/v1/questions.json', {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(setQuestionAsCurrent(body.questions.shift()))
    dispatch(fetchQuestionsSuccess(body.questions))
  })
}

let setCurrentQuestion = questions => dispatch => {
  let currentQuestion = questions.shift()
  dispatch(setQuestionAsCurrent(currentQuestion))
  if (questions.length === 1) {
    dispatch(lastQuestion())
  }
}

export {
  getQuestions,
  setCurrentQuestion
}
