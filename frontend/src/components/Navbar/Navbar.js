import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <h1 className="navbar-title">Personal Profiler</h1>
        <ul className="navbar-list">
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item">Login</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar