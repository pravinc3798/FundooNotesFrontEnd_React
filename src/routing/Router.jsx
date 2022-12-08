import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashborad from "../components/dashboard/Dashborad";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/register/SignUp";

export default function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashborad />} />
      </Routes>
    </Router>
  );
}
