import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import LandingPage from '../react/LandingPage'
import currentQuestion from '../react/survey/reducers/currentQuestion'
import answers from '../react/survey/reducers/answers'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({
    currentQuestion,
    answers
  }),
  applyMiddleware(...middlewares)
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><LandingPage /></Provider>, document.getElementById('landing')
  )
})
