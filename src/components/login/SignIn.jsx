import React, { useState } from "react";
import "./SignIn.css";

import TextField from "@mui/material/TextField";

export default function SignIn() {
  const [inputModel, setInputModel] = useState({
    email: "",
    emailValidation: false,
    password: "",
    passwordValidation: false,
  });

  const emailInput = (e) => {
    setInputModel({ ...inputModel, email: e.target.value });
  };

  const passwordInput = (e) => {
    setInputModel({ ...inputModel, password: e.target.value });
  };

  const validateInput = () => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    let emailTest = emailRegex.test(inputModel.email);
    let passwordTest = passwordRegex.test(inputModel.password);

    console.log(emailTest,passwordTest)

    setInputModel({
        ...inputModel,
        emailValidation : emailTest ? false : true,
        passwordValidation : passwordTest ? false : true
    })
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
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              onChange={passwordInput}
              error={inputModel.passwordValidation}
              helperText={inputModel.passwordValidation ? "Enter a valid password" : ''}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a href="">Forgot Password?</a>
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
