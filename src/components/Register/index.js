import React, { useState } from "react";

import { auth } from "../../firebase/firebase.utils";
import Form from "../Form";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      console.log(error);
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
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <Form
      formTitle="Welcome to Backpackers"
      buttonGoogleText="Register with Google"
      buttonText="Register"
      bottomText="Already have an account?&nbsp;"
      url="/signin"
      linkText="Log in"
      hasConfirmPassword
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      password={password}
      email={email}
      confirmPassword={confirmPassword}
    />
  );
};

export default Register;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

// import {
//   FormButton,
//   StyledForm,
//   Divider,
//   StyledInput,
//   Checkbox,
// } from "./styles";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "email") {
//       setEmail(value);
//     }
//     if (name === "password") {
//       setPassword(value);
//     }
//     if (name === "confirmPassword") {
//       setConfirmPassword(value);
//     }
//   };

//   const handleClick = () => {
//     signInWithGoogle();
//   };

//   return (
//     <StyledForm onSubmit={(event) => handleSubmit(event)}>
//       <h2>Welcome back</h2>
//       <FormButton color="black" onClick={() => handleClick()}>
//         Register with Google
//       </FormButton>
//       <div>
//         <Divider></Divider>
//         <h3>or</h3>
//         <Divider></Divider>
//       </div>
//       <StyledInput
//         type="email"
//         name="email"
//         placeholder="Email"
//         label="Email"
//         value={email}
//         onChange={(event) => handleChange(event)}
//         required
//       />
//       <StyledInput
//         type="password"
//         name="password"
//         placeholder="Password"
//         label="Password"
//         value={password}
//         onChange={(event) => handleChange(event)}
//         required
//       />
//       <StyledInput
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         label="Confirm Password"
//         value={confirmPassword}
//         onChange={(event) => handleChange(event)}
//         required
//         style={{ marginBottom: "1em" }}
//       />
//       <div>
//         <Checkbox type="checkbox" />
//         <h3 className="checkBoxText">Keep me logged in</h3>
//         <Link to="#" className="link">
//           Forgot password
//         </Link>
//       </div>
//       <FormButton type="submit" color={"var(--white)"}>
//         Log in
//       </FormButton>
//       <Divider />
//       <h3>
//         Don't have an account yet?&nbsp;
//         <Link to="/register" className="link">
//           Register
//         </Link>
//       </h3>
//     </StyledForm>
//   );
// };

// export default Register;
