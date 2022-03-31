import React from "react"

import "./Register.css"

const Register = () => {

  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordsConfirmed, setPasswordsConfirmed] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if(formData.password !== formData.confirmPassword) {
      alert("Password's don't match!")
    }
    else{
      console.log(formData)
      console.log("Success: Submitted Form")
    }
  }

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  React.useEffect( () => {
    const checkPasswords = async () => {
      if(formData.password === formData.confirmPassword) {
        setPasswordsConfirmed(true)
        console.log("passwords match!")
      } else {
        setPasswordsConfirmed(false)
        console.log("passwords don't match!!!")
      }
    }
    checkPasswords()
  },[formData.confirmPassword, formData.password])

  const confirmPasswordStyle = passwordsConfirmed ? { borderColor: "green" } : { borderColor: "red" }

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <p>Please Create An Account</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}></input>
          <input type="email" name="email" placeholder="email@email.com" value={formData.email} onChange={handleChange}></input>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}></input>
          <input type="password" name="confirmPassword" placeholder="Confirm Your Password" value={formData.confirmPassword} onChange={handleChange} style={confirmPasswordStyle}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register