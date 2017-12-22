import React, { Component } from 'react'
import { Switch, Route, Navlink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { createSurvey } from './actions/createSurvey'
import SurveyQuestions from './SurveyQuestions'

const mapStateToProps = state => {
  return {
    currentSurveyId: state.survey.currentSurveyId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSurvey: (surveyPayload) => { dispatch(createSurvey(surveyPayload)) }
  }
}

class SurveyFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      region: '',
      formComplete: false,
      updateCount: 0
    }
    this.handleCountry = this.handleCountry.bind(this)
    this.handleRegion = this.handleRegion.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate() {
    if (this.props.currentSurveyId && this.state.updateCount === 0) {
      this.setState({ updateCount: 1 })
      this.props.history.push(`${this.props.match.path}questions/`)
    }
  }

  handleCountry(event) {
    this.setState({ country: event })
  }

  handleRegion(event) {
    this.setState({ region: event, formComplete: true })
  }

  handleClick() {
    let surveyPayload = { country: this.state.country, region: this.state.region }
    this.props.createSurvey(surveyPayload)
  }

  render() {
    let continueButton
    if (this.state.formComplete) {
      continueButton = <button onClick={this.handleClick}>Continue!</button>
    }
    return(
      <div>
        <Switch>
          <Route strict path={`${this.props.match.path}questions/`} component={SurveyQuestions} />
          <div className='survey'>
            <h1>Thank you for taking our survey!</h1>
            <hr />
            <div>
              <strong>Please Select Your Country: </strong>
              <CountryDropdown id='country'
                defaultOptionLabel='Your Country'
                value={this.state.country}
                onChange={this.handleCountry} /><br/>
            </div>
            <div>
              <strong>Please Select Your Region: </strong>
              <RegionDropdown  id='region'
                defaultOptionLabel='Your Region'
                disableWhenEmpty={true}
                country={this.state.country}
                value={this.state.region}
                onChange={this.handleRegion}
              />
            </div>
            {continueButton}
          </div>
        </Switch>
      </div>
    )
  }
}

const SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyFormContainer)

export default SurveyForm
