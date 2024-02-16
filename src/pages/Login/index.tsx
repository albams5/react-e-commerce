import React, {useState, useEffect, useRef} from 'react';
import './login.css';
import sillon from "../../assets/images/green-chair-login.png"
// import { Navigate, Link } from 'react-router-dom';


type Props = {}

const Login = (props: Props) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  
    const inputsValidation = () => {

      const user = data.find(user => user.name === name && user.Password === password);
      const correctUser = data.find(user => user.name === name && user.Password !== password);
      const correctPassword = data.find(user => user.name !== name && user.Password === password);
      const incorrectInfo = data.find(user => name && user.name !== name && password && user.Password !== password)
      
      const errorPassword = document.getElementById("error-password");
      const errorUsername = document.getElementById("error-username");

      if (user) {
        errorPassword?.classList.add("none");
        errorUsername?.classList.add("none");
        alert("Correct login");
        console.log(user);
       

      } else if (correctUser) {
        alert("Incorrect password");
        errorUsername?.classList.add("none");
        errorPassword?.classList.remove("none");
      } else if (correctPassword) {
        alert("Incorrect username");
        errorPassword?.classList.add("none");
        errorUsername?.classList.remove("none");
      } else if (incorrectInfo){
        errorUsername?.classList.remove("none");
        errorPassword?.classList.remove("none");
      }
    };

    inputsValidation(data);
  }, [name, password]);

  const inputName = useRef(null);

  useEffect(() => {
    inputName.current?.focus();
  }, [])

  return (
    <div className="login-container">
        <div className = "title-div">
          <img src={sillon} alt="Green Chair Login" className='login-chair'/>
          <h2 className ="shop-title">Creative Concept Design</h2>
        </div>
        <form className="login-form" onSubmit={ev => {ev.preventDefault(); setName(ev.target.username.value); setPassword(ev.target.password.value)}}>
            <label htmlFor="username" className="form-label">Username:
            <input type="text" className="form-input" id="username" name="username" ref={inputName} />
            <small id="error-username" className ="incorrect-user none">Please enter a correct username</small></label>
            <label htmlFor="password" className="form-label">Password:
            <input type="password" className="form-input" id="password" name="password"/>
            <small id="error-password" className ="incorrect-password none">Please enter a correct password</small></label>
        
            <button className='login-btn'>Log In</button>
        
        </form>
        
        {/* <p>Bienvenido {name}</p> */}
        
    </div>
  )
}

export default Login