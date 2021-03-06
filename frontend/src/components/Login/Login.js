import React from "react"

import "./Login.css"

const Login = () => {

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    console.log("Success: Submitted Form")
  }

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Login</h1>
        <p>Login and unlock your full potential</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="email@email.com" value={formData.email} onChange={handleChange}></input>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login