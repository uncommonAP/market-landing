import React from 'react'

const RadioButtons = props => {
  let radioOptions = { 0: 'No Opinion', 1: 'Not Important', 2: 'Little Importance', 3: 'Moderate Importance', 4: 'Important', 5: 'Extremely Important'}

  let surveyFormButtons = Object.keys(radioOptions).map(value => {
    return(
      <label className='radio-button' id={value} key={`radio-${value}`}>
        <input type='radio' value={value} onClick={props.handleSelect} checked={props.selectedValue === value}/>
        {props.radioOptions[value]}
      </label>
    )
  })
  return(
    <form className='radio-list'>
      {surveyFormButtons}
    </form>
  )
}

export default RadioButtons
