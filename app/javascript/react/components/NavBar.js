import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='navbar'>
        <NavLink to='/'><div className=''>HOME</div></NavLink>
        <NavLink to='/about/'><div className=''>ABOUT</div></NavLink>
        <NavLink to='/mission/'><div className=''>MISSION</div></NavLink>
        <NavLink to='/members/'><div className=''>MEMBERS</div></NavLink>
        <NavLink to='/contact-us/'><div className=''>CONTACT US</div></NavLink>
      </div>
    )
  }
}

export default NavBar
