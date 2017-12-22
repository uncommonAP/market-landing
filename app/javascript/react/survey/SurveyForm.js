import React, { Component } from 'react'
import { Switch, Route, Navlink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import SurveyQuestions from './SurveyQuestions'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

class SurveyFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      region: '',
      formComplete: false
    }
    this.handleCountry = this.handleCountry.bind(this)
    this.handleRegion = this.handleRegion.bind(this)
  }

  handleCountry(event) {
    this.setState({ country: event })
  }

  handleRegion(event) {
    this.setState({ region: event, formComplete: true })
  }

  render() {
    let continueButton
    if (this.state.formComplete) {
      continueButton = <button>Continue!</button>
    }
    return(
      <div>
        <Switch>
          <Route strict path={`${this.props.match.path}questions`} component={SurveyQuestions} />
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

export default SurveyFormContainer
