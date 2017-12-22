export const SAVE_SURVEY = 'SAVE_SURVEY'
export const SAVE_SURVEY_SUCCESS = 'SAVE_SURVEY_SUCCESS'

let saveSurvey = () => {
  return {
    type: SAVE_SURVEY
  }
}

let saveSurveySuccess = surveyId => {
  return {
    type: SAVE_SURVEY_SUCCESS,
    surveyId
  }
}

let createSurvey = surveyPayload => dispatch => {
  dispatch(saveSurvey())
  return fetch('/api/v1/surveys.json', {
    method: 'POST',
    body: JSON.stringify(surveyPayload),
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(body => {
    dispatch(saveSurveySuccess(body.survey.id))
  })
}

export { createSurvey }
