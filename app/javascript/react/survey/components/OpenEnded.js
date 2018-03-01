import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTextValue } from '../actions/setValue'
import { setOtherPayload, unsetOtherPayload } from '../actions/answerQuestion'

const mapStateToProps = state => {
  return {
    textValue: state.answers.textValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTextValue: (value) => { dispatch(setTextValue(value)) },
    setOtherPayload: () => { dispatch(setOtherPayload()) },
    unsetOtherPayload: () => { dispatch(unsetOtherPayload()) }
  }
}

class OpenEndedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate() {
    if (this.props.textValue.length >= 3) {
      this.props.setOtherPayload()
    } else {
      this.props.unsetOtherPayload()
    }
  }

  handleChange(event) {
    this.props.setTextValue(event.target.value)
  }

  render(){
    return(
      <div>
        <div>{this.state.error}</div>
        <label className='answer-input'>Please provide an answer below: <br/>
          <input type='text' value={this.props.textValue} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

const OpenEnded = connect(mapStateToProps, mapDispatchToProps)(OpenEndedContainer)

export default OpenEnded
