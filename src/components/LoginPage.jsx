import React from "react";
import './LoginPage.css'
export default function LoginPage() {
  return (
    <div className="loginPageContainer">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </div>
    </div>
  );
}
