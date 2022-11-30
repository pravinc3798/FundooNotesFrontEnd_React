import React, { useState } from "react";
import "./SignUp.css";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

export default function SignUp() {
    
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
              />
              <TextField
                className="SUtextField"
                label="Last Name"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="SUtextBox">
              <TextField
                className="SUemailField"
                label="Email"
                variant="outlined"
                size="small"
              />
            </div>
            <p>You can use letters, numbers & periods</p>
            <div className="SUtextBox">
              <TextField
                className="SUtextField"
                label="Password"
                variant="outlined"
                size="small"
              />
              <TextField
                className="SUtextField"
                label="Confirm"
                variant="outlined"
                size="small"
              />
            </div>
            <p>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <div className="SUcheckBox">
              <FormControlLabel
                className="SUcheckBoxMU"
                control={<Checkbox />}
                label="Show Password"
              />
            </div>
            <div className="SUsignInNext">
              <Button className="SUsignInButton" variant="text">
                Sign in instead
              </Button>
              <Button className="SUnextButton" variant="contained">
                Next
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
