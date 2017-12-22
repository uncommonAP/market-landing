import React, { Component } from 'react'
import { Switch, Route, Navlink } from 'react-router-dom'
import { connect } from 'react-redux'
import SurveyQuestions from './SurveyQuestions'

const mapDispatchToProps = dispatch => {
  return {

  }
}

class SurveyFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Switch>
          <Route strict path={`${this.props.match.path}questions`} component={SurveyQuestions} />
          <div>SurveyForm</div>
        </Switch>
      </div>
    )
  }
}

const SurveyForm = connect(null, mapDispatchToProps)(SurveyFormContainer)

export default SurveyFormContainer
