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
        <div className='links gold-text'>
          <NavLink to='/'><div className=''>HOME</div></NavLink>
          <NavLink to='/about/'><div className=''>ABOUT</div></NavLink>
          <NavLink to='/mission/'><div className=''>MISSION</div></NavLink>
          <NavLink to='/members/'><div className=''>MEMBERS</div></NavLink>
          <NavLink to='/survey/'><div className=''>SURVEY</div></NavLink>
          <NavLink to='/contact-us/'><div className=''>CONTACT US</div></NavLink>
        </div>
      </div>
    )
  }
}

export default NavBar
