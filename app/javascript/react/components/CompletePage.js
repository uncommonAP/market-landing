import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    surveyParticipant: state.contactInputs.name
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const CompletePageContainer = props => {
  return(
    <div>
      <h3>Thank you {props.surveyParticipant} for your input!</h3>
    </div>
  )
}

const CompletePage = connect(mapStateToProps, mapDispatchToProps)(CompletePageContainer)

export default CompletePage
