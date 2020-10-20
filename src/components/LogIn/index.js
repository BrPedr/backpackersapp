import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/userSlice";
import Form from "../Form";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault(event);
  };

  const handleClick = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);

      await auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(
            setCurrentUser({
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
              isAnonymous: user.isAnonymous,
              uid: user.uid,
              providerData: user.providerData,
            })
          );
        }

        // createUserProfileDocument(user);
        setEmail("");
        setPassword("");
      });
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
      handleClick={handleClick}
      password={password}
      email={email}
    />
  );
};

export default SignIn;
// import React, { useState } from "react";
// import { connect } from "react-redux";

// import { auth } from "../../firebase/firebase.utils";
// import { setCurrentUser } from "../../redux/user";
// import Form from "../Form";

// const SignIn = ({ setCurrentUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await auth.signInWithEmailAndPassword(email, password);

//       await auth.onAuthStateChanged(setCurrentUser);

//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       alert(error);
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
//       <Form
//         formTitle="Welcome back"
//         bottomText="Don't have an account yet?&nbsp;"
//         url="/register"
//         linkText="Register"
//         buttonText="Log in"
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         password={password}
//         email={email}
//       />
//   );
// };

// const mapStateToProps = ({ user }) => ({ user });

// export default connect(mapStateToProps, { setCurrentUser })(SignIn);
