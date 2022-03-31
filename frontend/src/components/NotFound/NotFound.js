import React from 'react'
import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <>
      <div className="notfound-container">
        <div className="notfound-title">
          <h1>Sorry, it looks like this link doesn't work...</h1>
          <button><Link to="/">Return Home</Link></button>
        </div>
      </div>
    </>
  )
}

export default NotFound