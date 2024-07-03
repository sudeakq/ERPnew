import React from "react";
import ExtramusText from "../images/ExtramusText_image.png";

function ResetPassword() {
  return (
    <>
      <div className="container">
        <img src={ExtramusText} alt="ExtramusText" className="Extramus-image" />
        <h1>HR Platfrom</h1>
        <h1>Reset Password</h1>
        <div className="resetPassword-form">
          <input type="text" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <input type="Password" placeholder="Confirm Password" />
        </div>
        <div className="btn">
          <button>Reset</button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
