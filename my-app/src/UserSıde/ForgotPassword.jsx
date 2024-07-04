import React from "react";
import ExtramusText from "../images/ExtramusText_image.png";
import "./ForgotPassword.css";
import { useState } from "react";
function ForgotPassword() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(true);
  }
  return (
    <>
      <div className="container">
        <div className="ExtramusTextImg">
          <img src={ExtramusText} alt="" />
        </div>
        <h1>HR Platform</h1>
        <h1>Password Reset</h1>
        <p className="desc first">
          Seems like you forgot password for Extramus account. if this is
          true,click below to reset your password.
        </p>
        <div className="btn">
          <button onClick={handleClick}>
            <p>Reset My Password</p>
          </button>
        </div>
        <p className="desc">
          You will receive an email where you can reset your password
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
