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

      const user = () => {
        if (!auth.currentUser) {
          return;
        }
        setCurrentUser(auth.currentUser);
      };

      user();

      setEmail("");
      setPassword("");
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
  };

  return (
    <Form
      formTitle="Welcome back"
      buttonGoogleText="Sign in with Google"
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

// import React, { useState } from "react";
// import {connect} from "react-redux"

// import { auth } from "../../firebase/firebase.utils";
// import Form from "../Form";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { user } = await auth.signInWithEmailAndPassword(email, password);

//       setEmail("");
//       setPassword("");
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
//   };

//   return (
//     <Form
//       formTitle="Welcome back"
//       buttonGoogleText="Sign in with Google"
//       bottomText="Don't have an account yet?&nbsp;"
//       url="/register"
//       linkText="Register"
//       buttonText="Log in"
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//       password={password}
//       email={email}
//     />
//   );
// };

// export default SignIn;
