import React, { useState, useEffect, useRef, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import loginChair from "../../../public/assets/images/green-chair-login.png";
import { useAuthDispatch } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import {
  Errors,
  User,
  UserContextType,
  UserInput,
} from "../../interfaces/interfaces";

const Login = () => {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [userData, setUserData] = useState([] as User[]);
  const [errors, setErrors] = useState({} as Errors);
  const userInfo: UserContextType = useContext(UserContext);
  const navigate = useNavigate();

  const dispatch = useAuthDispatch();
  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    navigate("/homepage");
  };

  const setNewUsername = (newName: string) => {
    setUser((user) => ({
      ...user,
      userName: newName,
    }));
  };

  const setNewPassword = (newPassword: string) => {
    setUser((user) => ({
      ...user,
      password: newPassword,
    }));
  };

  const Validation = (user: UserInput) => {
    const errors: Errors = {
      name: "",
      password: "",
    };
    const correctUserAndPassword = userData.find(
      (usuario) =>
        usuario.name === user.userName && usuario.Password === user.password
    );
    const correctUser = userData.find(
      (usuario) => usuario.name === user.userName
    );
    const correctPassword = userData.find(
      (usuario) => usuario.Password === user.password
    );

    if (user.userName === "" || user.password === "") {
      errors.name = "Username and Password are required";
    }
    if (correctUser) {
      errors.name = "";
      errors.password = "Incorrect or empty password";
    }
    if (correctPassword) {
      errors.name = "Incorrect or empty username";
      errors.password = "";
    }

    if (correctUserAndPassword) {
      window.localStorage.setItem("isLogged", JSON.stringify(true));
      errors.name = "";
      errors.password = "";
      handleLogin();
      userInfo.setUserData(correctUserAndPassword);
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(Validation(user));
  };

  useEffect(() => {
    fetch("./data/users.json")
      .then((res) => res.json())
      .then((clients) => {
        setUserData(clients);
      });
  }, [user]);

  const inputName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputName.current) {
      inputName.current.focus();
    }
  }, []);

  return (
    <div className="login-container">
      <div className="title-div">
        <img src={loginChair} alt="Green Chair Login" className="login-chair" />
        <h2 className="shop-title">Creative Concept Design</h2>
      </div>
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="username" className="form-label">
          Username:
          <input
            type="text"
            value={user.userName}
            className="form-input"
            id="username"
            name="username"
            ref={inputName}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          {errors.name && <p className="error-message-user">{errors.name}</p>}
        </label>
        <label htmlFor="password" className="form-label">
          Password:
          <input
            type="password"
            value={user.password}
            className="form-input"
            id="password"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error-message-password">{errors.password}</p>
          )}
        </label>

        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
