import React, {useState, useEffect, useRef} from 'react';
import './login.css';
import sillon from "../../assets/images/green-chair-login.png"
import { Navigate } from 'react-router-dom';


type Props = {}

const Login = (props: Props) => {

  const [user, setUser] = useState({userName:'', password:''});

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

  const handleSubmit = (e)=> {
    e.preventDefault();
    fetch('src/data/users.json')
      .then(res=>res.json())
      .then(clients =>{
        const client = clients.find(client => client.name === user.userName && client.Password === user.password);
        if(client){
          alert("Login correcto");
          console.log(client); //*contexto cliente
          //! no funciona <Navigate to="/homepage" /> 
        } else {
          console.log("Login incorrectooo")
        }})
  }


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
        <form className="login-form" onSubmit={e => {handleSubmit(e);console.log(user)}}>
            <label htmlFor="username" className="form-label">Username:
            <input type="text" value={user.userName} className="form-input" id="username" name="username" ref={inputName} onChange={(e) =>setNewUsername(e.target.value)} />
            <small id="error-username" className ="incorrect-user none">Please enter a correct username</small></label>
            <label htmlFor="password" className="form-label">Password:
            <input type="password" value={user.password} className="form-input" id="password" name="password" onChange={(e) => setNewPassword(e.target.value)}/>
            <small id="error-password" className ="incorrect-password none">Please enter a correct password</small></label>
        
            <button className='login-btn' >Log In</button>
        
        </form>
        
        {/* <p>Bienvenido {name}</p> */}
        
    </div>
  )
}

export default Login