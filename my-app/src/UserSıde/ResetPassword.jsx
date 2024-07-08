import React from "react";
import ExtramusText from "../images/ExtramusText_image.png";
import "./ResetPassword.css";
import { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  function handleEmail(input) {
    setEmail(input);
  }
  function handlePassword(input) {
    setPassword(input);
  }
  function handleConfirmP(input) {
    setConfirmPassword(input);
  }
  return (
    <>
      <div className="container">
        <div className="top">
          <img
            src={ExtramusText}
            alt="ExtramusText"
            className="Extramus-image"
          />
          <h2 className="title">HR Platfrom</h2>
        </div>
        <div className="resetP-form">
          <h2 className="title-2">Reset Password</h2>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              handleEmail(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Password"
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            onChange={(e) => {
              handleConfirmP(e.target.value);
            }}
          />
          <div className="btn">
            <button>
              <p>Reset</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
