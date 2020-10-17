import React, { useState } from "react";
import logo from "../../../Resources/images/logos/logo.png";
import googleLogo from "../../../Resources/images/logos/googleLogo.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

toast.configure();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photoURL: "",
    error: "",
    success: "",
  });
  var provider = new firebase.auth.GoogleAuthProvider();
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL,
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        toast.success(" Signed In Using google Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        // history.replace(from);
      })
      .catch(function (error) {
        const signedInUser = {
          isSignedIn: false,
        };
        signedInUser.error = error.message;
        signedInUser.success = false;
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        toast.error(error, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  return (
    <div className="login-container container">
      <Link to="/">
        <img className="logoImg" src={logo} alt="logoImage" />
      </Link>{" "}
      <div className="loginBox-container container py-5 ">
        <h5>Login With</h5>
        <button onClick={googleSignIn} className="google-button">
          <img src={googleLogo} alt="" />
        </button>
      </div>
      <p className="text-center mt-5">
        <small>copyright AhmedMasum {new Date().getFullYear()}</small>
      </p>
    </div>
  );
};

export default Login;
