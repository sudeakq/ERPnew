import React from "react";
import leftImage from "../images/UserStartPage.png";
import ExtramusText from "../images/ExtramusText_image.png";
import "./UserStartPage.css";
import { useState } from "react";

function UserStartPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState();
  function handleEmailInput(e) {
    setEmail(e);
  }
  function handlePasswordInput(e) {
    setPassword(e);
  }
  function handleCheck() {
    setIsChecked(!isChecked);
  }
  function handleSubmit() {
    setIsSubmit(true);
  }
  return (
    <>
      <div className="container">
        <div className="UserStartLeft">
          <img
            src={leftImage}
            alt="UserStartPage_Image"
            className="leftImage"
          />
        </div>
        <div className="signFormPart">
          <img
            src={ExtramusText}
            alt="ExtramusText"
            className="Extramus-image"
          />
          <h1>HR Platfrom</h1>
          <div className="sign-form">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                handleEmailInput(e.target.value);
              }}
            />
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => {
                handlePasswordInput(e.target.value);
              }}
            />
          </div>
          <div className="bottom-sign">
            <p className="ForgotPass">Forgot password?</p>
            <div className="RememberMe">
              <p>Remember Me</p>
              <input type="checkbox" name="" id="" onClick={handleCheck} />
            </div>
          </div>
          <div className="btn">
            <button onClick={handleSubmit}>Log In</button>
          </div>
          <div className="sign-up">
            <p>Don't have an account?</p>
            <p className="ForgotPass">Sign Up</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStartPage;
