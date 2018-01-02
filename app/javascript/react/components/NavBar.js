import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='navbar emphasize-inset'>
        <h1 className='gold-text header'>Welcome! <strong className='text-emphasis'>ConnectAfrica.io</strong> coming soon...</h1>
      </div>
    )
  }
}

export default NavBar
