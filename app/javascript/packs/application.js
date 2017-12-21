import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import LandingPage from '../react/LandingPage'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({

  }),
  applyMiddleware(...middlewares)
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><LandingPage /></Provider>, document.getElementById('landing')
  )
})
