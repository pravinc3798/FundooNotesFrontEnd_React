import React, { useState } from "react";
import "./SignUp.css";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { registerApi } from "../../services/UserServices";

export default function SignUp() {

    const [userModel, setUserModel] = useState({
        firstName : '',
        lastName : '',
        email : '',
        userPassword : '',
        confirmPassword : '',
        firstNameValidation : false,
        lastNameValidation : false,
        emailValidation : false,
        passwordValidation : false,
        confirmPasswordCheck : false,
        showPassword : false
    })

    const fieldUpdate = (field,value) => {
        setUserModel({
            ...userModel,
            [field] : value
        })
    }

    const showPassword = (event) => {
        setUserModel({
            ...userModel,
            showPassword : event.target.checked
        })
    }

    const validate = () => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        const userPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
        const nameRegex = /^[A-Z]{1,}[a-z]{2,}$/;

        let firstNameTest = nameRegex.test(userModel.firstName)
        let lastNameTest = nameRegex.test(userModel.lastName)
        let emailTest = emailRegex.test(userModel.email)
        let passwordTest = userPasswordRegex.test(userModel.userPassword)
        let passwordCheck = (userModel.userPassword === userModel.confirmPassword)

        setUserModel({
            ...userModel,
            firstNameValidation : firstNameTest ? false : true,
            lastNameValidation : lastNameTest ? false : true,
            emailValidation : emailTest ? false : true,
            passwordValidation : passwordTest ? false : true,
            confirmPasswordCheck : passwordCheck ? false : true
        })

        if(firstNameTest && lastNameTest && emailTest && passwordTest && passwordCheck){
            registerApi(userModel).then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }


  return (
    <div className="SUmainBody">
      <div className="SUcontainer">
        <div className="SUleftHalf">
          <h1>
            <span style={{ color: "#0F52BA" }}>F</span>
            <span style={{ color: "#FF2626" }}>U</span>
            <span style={{ color: "#FFD523" }}>N</span>
            <span style={{ color: "#00C1D4" }}>D</span>
            <span style={{ color: "#66CC66" }}>O</span>
            <span style={{ color: "#66CC66" }}>O</span>
          </h1>
          <h2>Create your Fundoo Account</h2>
          <div className="SUformBody">
            <div className="SUtextBox">
              <TextField
                className="SUtextField"
                label="First Name"
                variant="outlined"
                size="small"
                onChange={(event) => fieldUpdate('firstName',event.target.value)}
                error={userModel.firstNameValidation}
                helperText={userModel.firstNameValidation ? 'Invalid Name' : ''}
              />
              <TextField
                className="SUtextField"
                label="Last Name"
                variant="outlined"
                size="small"
                onChange={(event) => fieldUpdate('lastName',event.target.value)}
                error={userModel.lastNameValidation}
                helperText={userModel.lastNameValidation ? 'Invalid Name' : ''}
              />
            </div>
            <div className="SUtextBox">
              <TextField
                className="SUemailField"
                label="Email"
                variant="outlined"
                size="small"
                onChange={(event) => fieldUpdate('email',event.target.value)}
                error={userModel.emailValidation}
                helperText={userModel.emailValidation ? 'Invalid email' : ''}
              />
            </div>
            <p>You can use letters, numbers & periods</p>
            <div className="SUtextBox">
              <TextField
                type={userModel.showPassword ? 'text' : 'password'}
                className="SUtextField"
                label="Password"
                variant="outlined"
                size="small"
                onChange={(event) => fieldUpdate('userPassword',event.target.value)}
                error={userModel.passwordValidation}
                helperText={userModel.passwordValidation ? 'Invalid password' : ''}
              />
              <TextField
                type={userModel.showPassword ? 'text' : 'password'}
                className="SUtextField"
                label="Confirm"
                variant="outlined"
                size="small"
                onChange={(event) => fieldUpdate('confirmPassword',event.target.value)}
                error={userModel.confirmPasswordCheck}
                helperText={userModel.confirmPasswordCheck ? 'Password does not match' : ''}
              />
            </div>
            <p>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <div className="SUcheckBox">
              <FormControlLabel
                className="SUcheckBoxMU"
                control={<Checkbox onChange={showPassword}/>}
                label="Show Password"
              />
            </div>
            <div className="SUsignInNext">
              <Button className="SUsignInButton" variant="text">
                Sign in instead
              </Button>
              <Button className="SUnextButton" variant="contained" onClick={validate}>
                Register
              </Button>
            </div>
          </div>
        </div>
        <div className="SUrightHalf">
          <img
            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
            alt=""
            width="244"
            height="244"
          />
          <p>One account. All of the Fundoo services working for you.</p>
        </div>
      </div>
    </div>
  );
}
