import React from 'react'

const RadioButtons = props => {
  let surveyFormButtons = Object.keys(props.radioOptions).map(value => {
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
