import React from "react";

import "./Login.scss";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />
        <h1>Sign in to your workspace</h1>
        <p>vabs.flack.com</p>
        <Button className="signin_button" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
