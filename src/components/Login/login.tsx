import React from 'react'
import './login.css'


type Props = {}

const Login = (props: Props) => {
  return (
    <div className="login-container">
        <div className = "title-div">
          <img src='../../assets/sillon-verde-portada.jpg'/>
        <h2 className ="shop-title">Creative Concept Design</h2>
        </div>
        <form className="login-form">
            <label for="username" className="form-label">Username:</label>
            <input type="text" className="form-input" id="username" name="username"  />
            <small className ="none">Please enter a correct username</small>
            <label for="password" className="form-label">Password:</label>
            <input type="text" className="form-input" id="password" name="password"/>
            <small className ="none">Please enter a correct password</small>
        </form>
        
        <button className='login-btn'>Log In</button>
        
        
    </div>
  )
}

export default Login