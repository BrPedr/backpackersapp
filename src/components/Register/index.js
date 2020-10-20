import React, { useState } from "react";

import { auth } from "../../firebase/firebase.utils";
import Form from "../Form";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleClick = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <Form
      formTitle="Welcome to Backpackers"
      buttonText="Register"
      bottomText="Already have an account?&nbsp;"
      url="/signin"
      linkText="Log in"
      hasConfirmPassword
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      password={password}
      email={email}
      confirmPassword={confirmPassword}
    />
  );
};

export default Register;
