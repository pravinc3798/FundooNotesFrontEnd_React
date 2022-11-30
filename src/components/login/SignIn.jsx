import React from "react";
import "./SignIn.css";

import TextField from "@mui/material/TextField";

export default function SignIn() {
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
            />
          </div>
          <div>
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
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
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
