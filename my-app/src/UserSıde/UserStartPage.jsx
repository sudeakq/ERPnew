import React from "react";
import leftImage from "./images/UserStartPage.png";
import ExtramusText from "./images/ExtramusText_image.png";
import "./UserStartPage.css";

function UserStartPage() {
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
            <input type="text" placeholder="Email" />
            <input type="Password" placeholder="Password" />
          </div>
          <div className="bottom-sign">
            <p className="ForgotPass">Forgot password?</p>
            <div className="RememberMe">
              <p>Remember Me</p>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="btn">
            <button>Log In</button>
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

export default Example;
