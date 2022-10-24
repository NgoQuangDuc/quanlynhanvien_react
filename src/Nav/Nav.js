import React from 'react'
import './Nav.scss'
import { useEffect } from 'react';
import {NavLink,  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = (props) => {
 
  return (
<div class="topnav">
<nav>
    <NavLink  exact activeClassName="active" to={`/home`}>Home</NavLink>
    <NavLink  activeClassName="active" to="/role">News</NavLink>
    <NavLink  activeClassName="active" to="/addrole">Contact</NavLink>
    <NavLink  activeClassName="active" to="/s">About</NavLink>
    </nav>
</div>


  )
}

export default Nav