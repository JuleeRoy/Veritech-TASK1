import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
    <ul>
      <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
      <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
      <li><NavLink to="/employees" activeclassname="active">Employees</NavLink></li>
    </ul>
  </nav>
  )
}

export default Navbar