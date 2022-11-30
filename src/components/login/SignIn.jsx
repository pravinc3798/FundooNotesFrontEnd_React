import React, { useState } from "react";
import "./SignIn.css";
import { loginApi } from "../../services/UserServices";

import TextField from "@mui/material/TextField";

export default function SignIn() {
  const [inputModel, setInputModel] = useState({
    email: "",
    userPassword: "",
    emailValidation: false,
    userPasswordValidation: false,
  });

  const emailInput = (e) => {
    setInputModel({ ...inputModel, email: e.target.value });
  };

  const userPasswordInput = (e) => {
    setInputModel({ ...inputModel, userPassword: e.target.value });
  };

  const validateInput = () => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const userPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    let emailTest = emailRegex.test(inputModel.email);
    let userPasswordTest = userPasswordRegex.test(inputModel.userPassword);

    setInputModel({
        ...inputModel,
        emailValidation : emailTest ? false : true,
        userPasswordValidation : userPasswordTest ? false : true
    })

    if(emailTest && userPasswordTest){
        loginApi(inputModel).then((response) => {
          console.log(response);
          localStorage.setItem('token',response.data.data)
        })
        .catch((error) => {console.log(error)})
    }
  };

  return (
    <div className="SImainbody">
      <div className="SIsubbody">
        <h1>
          <span style={{ color: "#0F52BA" }}>F</span>
          <span style={{ color: "#FF2626" }}>U</span>
          <span style={{ color: "#FFD523" }}>N</span>
          <span style={{ color: "#00C1D4" }}>D</span>
          <span style={{ color: "#66CC66" }}>O</span>
          <span style={{ color: "#66CC66" }}>O</span>
        </h1>
        <h2>Sign in</h2>
        <h3>Use your Fundoo Account</h3>
        <div className="SIinputbody">
          <div>
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              onChange={emailInput}
              error={inputModel.emailValidation}
              helperText={inputModel.emailValidation ? "Enter a valid email address" : ''}
            />
          </div>
          <div>
            <TextField
              label="userPassword"
              variant="outlined"
              size="small"
              fullWidth
              onChange={userPasswordInput}
              error={inputModel.userPasswordValidation}
              helperText={inputModel.userPasswordValidation ? "Enter a valid userPassword" : ''}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a href="">Forgot userPassword?</a>
          </div>
          <div className="SIfooter">
            <a href="">Create Account</a>
            <button onClick={validateInput}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
