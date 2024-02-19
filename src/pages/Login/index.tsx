import React, {useState, useEffect, useRef} from 'react';
import './login.css';
import sillon from "../../assets/images/green-chair-login.png"
import { Navigate } from 'react-router-dom';
import { loginChair } from '../../assets/images';


type Props = {}

const Login = (props: Props) => {

  const [user, setUser] = useState({userName:'', password:''});
  const [userData, setUserData] = useState([])
  const [errors, setErrors] = useState({})

  const setNewUsername = (newName:string) => {
    console.log("dentro de setNewUsername")
    setUser(user => ({
      ...user,
      userName: newName
    }))
    
  }

  const setNewPassword = (newPassword:string) => {
    console.log("dentro de setNewPassword")
    setUser(user => ({
      ...user,
      password: newPassword
    }))
    
  }

  const Validation = (user) => {
    const errors = {}
    const correctUserAndPassword = userData.find(usuario => usuario.name === user.userName && usuario.Password === user.password);
    const correctUser = userData.find(usuario => usuario.name === user.userName)
    const correctPassword = userData.find(usuario => usuario.Password === user.password);
    const incorrectUserAndPassword = userData.find(usuario => usuario.name !== user.userName && usuario.Password !== user.password)

  if(user.userName === "" || user.password === ""){
    errors.name = "Username and Password are required"
  }
  if(correctUser){
    errors.name = "";
    errors.password = "Incorrect or empty password"
  }
  if(correctPassword){
    errors.name = "Incorrect or empty username"
    errors.password = ""
  }

    if(correctUserAndPassword){
      errors.name = "";
      errors.password = "";
      alert("Correct login");
      <Navigate to="/homepage" />
    }

    return errors;

  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    setErrors(Validation(user))
  }

  useEffect(() => {
    fetch('src/data/users.json')
      .then(res=>res.json())
      .then(clients =>{setUserData(clients)}
        )
        console.log(userData)
  }, [user]);


  const inputName = useRef(null);

  useEffect(() => {
    inputName.current?.focus();
  }, [])

  return (
    <div className="login-container">
        <div className = "title-div">
          <img src={loginChair} alt="Green Chair Login" className='login-chair'/>
          <h2 className ="shop-title">Creative Concept Design</h2>
        </div>
        <form className="login-form" onSubmit={e => {handleSubmit(e);console.log(user)}}>
            <label htmlFor="username" className="form-label">Username:
            <input type="text" value={user.userName} className="form-input" id="username" name="username" ref={inputName} onChange={(e) =>setNewUsername(e.target.value)} />
            {errors.name && <p className="error-message">{errors.name}</p>}</label>
            <label htmlFor="password" className="form-label">Password:
            <input type="password" value={user.password} className="form-input" id="password" name="password" onChange={(e) => setNewPassword(e.target.value)}/>
            {errors.password && <p className="error-message">{errors.password}</p>}</label>

        
            <button className='login-btn' >Log In</button>
        
        </form>
        
    </div>
  )
}

export default Login