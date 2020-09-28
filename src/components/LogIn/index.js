import React, { useState } from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user";
import Form from "../Form";

const SignIn = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      await auth.onAuthStateChanged(setCurrentUser);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
      <Form
        formTitle="Welcome back"
        bottomText="Don't have an account yet?&nbsp;"
        url="/register"
        linkText="Register"
        buttonText="Log in"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        password={password}
        email={email}
      />
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { setCurrentUser })(SignIn);