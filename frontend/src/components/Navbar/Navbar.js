import React from 'react'

import { FaSignInAlt, FaClipboard, FaUser } from "react-icons/fa" 

import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <h1 className="navbar-title"><Link to="/">Personal Profiler</Link></h1>
        <ul className="navbar-list">
          <li className="navbar-list-item"><Link to="/"><FaUser />Home</Link></li>
          <li className="navbar-list-item"><Link to="/login"><FaSignInAlt />Login</Link></li>
          <li className="navbar-list-item"><Link to="/register"><FaClipboard />Register</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar