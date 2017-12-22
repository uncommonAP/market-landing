import { SAVE_SURVEY, SAVE_SURVEY_SUCCESS } from '../actions/createSurvey'

let initialState = {
  isFetching: false,
  currentSurveyId: null
}

const survey = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SURVEY:
      return Object.assign({}, state, { isFetching: true })
    case SAVE_SURVEY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        currentSurveyId: action.surveyId
      })
    default:
      return state
  }
}

export default survey
