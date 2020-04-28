import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <a href="https://lhashdevblog.wordpress.com/">Blog</a>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar;