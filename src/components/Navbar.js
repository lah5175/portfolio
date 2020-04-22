import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink exact to="/">Blog</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar;