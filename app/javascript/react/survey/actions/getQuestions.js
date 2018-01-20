export const FETCH_DEMOGRAPHIC_QUESTIONS = 'FETCH_DEMOGRAPHIC_QUESTIONS'
export const FETCH_DEMOGRAPHIC_QUESTIONS_SUCCESS = 'FETCH_DEMOGRAPHIC_QUESTIONS_SUCCESS'
export const FETCH_CONTENT_QUESTIONS = 'FETCH_CONTENT_QUESTIONS'
export const FETCH_CONTENT_QUESTIONS_SUCCESS = 'FETCH_CONTENT_QUESTIONS_SUCCESS'
export const FETCH_FOLLOW_UP_QUESTIONS = 'FETCH_FOLLOW_UP_QUESTIONS'
export const FETCH_FOLLOW_UP_QUESTIONS_SUCCESS = 'FETCH_FOLLOW_UP_QUESTIONS_SUCCESS'
export const SET_QUESTION_AS_CURRENT = 'SET_QUESTION_AS_CURRENT'
export const LAST_QUESTION = 'LAST_QUESTION'
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
export const SURVEY_QUESTIONS_COMPLETE = 'SURVEY_QUESTIONS_COMPLETE'
export const NOT_LAST = 'NOT_LAST'

let fetchDemographicQuestions = () => {
  return {
    type: FETCH_DEMOGRAPHIC_QUESTIONS
  }
}

let fetchDemographicQuestionsSuccess = questions => {
  return {
    type: FETCH_DEMOGRAPHIC_QUESTIONS_SUCCESS,
    questions
  }
}

let fetchContentQuestions = () => {
  return {
    type: FETCH_CONTENT_QUESTIONS
  }
}

let fetchContentQuestionsSuccess = (questionType, questions) => {
  return {
    type: FETCH_CONTENT_QUESTIONS_SUCCESS,
    questions,
    questionType
  }
}

let fetchFollowUpQuestions = () => {
  return {
    type: FETCH_FOLLOW_UP_QUESTIONS
  }
}

let fetchFollowUpQuestionsSuccess = (questions, previousActiveType) => {
  return {
    type: FETCH_FOLLOW_UP_QUESTIONS_SUCCESS,
    questions,
    previousActiveType
  }
}

let setQuestionAsCurrent = question => {
  return {
    type: SET_QUESTION_AS_CURRENT,
    question
  }
}

let notLast = () => {
  return {
    type: NOT_LAST
  }
}

let lastQuestion = () => {
  return {
    type: LAST_QUESTION
  }
}

let surveyQuestionsComplete = () => {
  return {
    type: SURVEY_QUESTIONS_COMPLETE
  }
}

let setActiveType = activeType => {
  let nextType
  if (activeType === 'demographic' || activeType === 'follow_up') {
    nextType = 'content'
  } else {
    nextType = activeType
  }
  return {
    type: SET_ACTIVE_TYPE,
    activeType: nextType
  }
}

let getDemographicQuestions = () => dispatch => {
  dispatch(fetchDemographicQuestions())
  return fetch('/api/v1/questions/demographic_questions.json', {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(setQuestionAsCurrent(body.demographic.shift()))
    dispatch(fetchDemographicQuestionsSuccess(body.demographic))
  })
}

let getContentQuestions = type => dispatch => {
  dispatch(fetchContentQuestions())
  return fetch(`/api/v1/questions/${type}_questions.json`, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(fetchContentQuestionsSuccess(type, body[type]))
  })
}

let getFollowUpQuestions = (sourceQuestionId, activeType) => dispatch => {
  dispatch(fetchFollowUpQuestions())
  return fetch(`/api/v1/questions/${sourceQuestionId}/follow_up_questions.json`, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(fetchFollowUpQuestionsSuccess(body.follow_up, activeType))
  })
}

let setCurrentQuestion = (activeType, questions) => dispatch => {
  if (questions.length === 0) {
    dispatch(surveyQuestionsComplete())
  } else {
    let currentQuestion = questions.shift()
    dispatch(setQuestionAsCurrent(currentQuestion))
  }
  if (questions.length === 1) {
    debugger
    dispatch(lastQuestion())
  } else if (questions.length > 1) {
    dispatch(notLast())
  }
}

export {
  getDemographicQuestions,
  setCurrentQuestion,
  getContentQuestions,
  getFollowUpQuestions,
  setActiveType
}
