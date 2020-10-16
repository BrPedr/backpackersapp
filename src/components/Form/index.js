import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { auth, firestore } from "../../firebase/firebase.utils";
import { setCurrentUser, selectUser } from "../../redux/user/userSlice";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import {
  FormButton,
  StyledForm,
  Divider,
  StyledInput,
  Checkbox,
} from "./styles";

const Form = ({
  formTitle,
  buttonText,
  bottomText,
  url,
  linkText,
  hasConfirmPassword,
  handleChange,
  handleSubmit,
  ...inputProps
}) => {
  const { email, password, confirmPassword } = inputProps;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = async () => {
    try {
      await signInWithGoogle();

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
        return;
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {!user ? null : <Redirect to={`/user/${user.uid}`} />}
      <StyledForm method="post" onSubmit={(event) => handleSubmit(event)}>
        <h2>{formTitle}</h2>
        <FormButton color="black" onClick={() => handleClick()}>
          Log in with Google
        </FormButton>
        <div>
          <Divider></Divider>
          <h3>or</h3>
          <Divider></Divider>
        </div>
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(event) => handleChange(event)}
          required
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
          value={password}
          onChange={(event) => handleChange(event)}
          required
        />
        {hasConfirmPassword ? (
          <StyledInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(event) => handleChange(event)}
            required
            style={{ marginBottom: "1em" }}
          />
        ) : null}
        {hasConfirmPassword ? null : (
          <div>
            <Checkbox type="checkbox" />
            <h3 className="checkBoxText">Keep me logged in</h3>
            <Link to="#" className="link">
              Forgot password
            </Link>
          </div>
        )}
        <FormButton type="submit" color={"var(--white)"}>
          {buttonText}
        </FormButton>
        <Divider />
        <h3>
          {bottomText}
          <Link to={url} className="link">
            {linkText}
          </Link>
        </h3>
      </StyledForm>
    </>
  );
};

export default Form;
// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

// import { auth, firestore } from "../../firebase/firebase.utils";
// import { setCurrentUser } from "../../redux/user";

// import { signInWithGoogle } from "../../firebase/firebase.utils";

// import {
//   FormButton,
//   StyledForm,
//   Divider,
//   StyledInput,
//   Checkbox,
// } from "./styles";

// const Form = ({
//   formTitle,
//   buttonText,
//   bottomText,
//   url,
//   linkText,
//   hasConfirmPassword,
//   handleChange,
//   handleSubmit,
//   setCurrentUser,
//   user,
//   ...inputProps
// }) => {
//   const { email, password, confirmPassword } = inputProps;

//   const handleClick = async () => {
//     await signInWithGoogle();
//     console.log(signInWithGoogle());
//     auth.onAuthStateChanged(setCurrentUser);
//   };

//   return (
//     <>
//       {!user.currentUser ? null : (
//         <Redirect to={`/user/${user.currentUser.uid}`} />
//       )}
//       <StyledForm method="post" onSubmit={(event) => handleSubmit(event)}>
//         <h2>{formTitle}</h2>
//         <FormButton color="black" onClick={() => handleClick()}>
//           Log in with Google
//         </FormButton>
//         <div>
//           <Divider></Divider>
//           <h3>or</h3>
//           <Divider></Divider>
//         </div>
//         <StyledInput
//           type="email"
//           name="email"
//           placeholder="Email"
//           label="Email"
//           value={email}
//           onChange={(event) => handleChange(event)}
//           required
//         />
//         <StyledInput
//           type="password"
//           name="password"
//           placeholder="Password"
//           label="Password"
//           value={password}
//           onChange={(event) => handleChange(event)}
//           required
//         />
//         {hasConfirmPassword ? (
//           <StyledInput
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             label="Confirm Password"
//             value={confirmPassword}
//             onChange={(event) => handleChange(event)}
//             required
//             style={{ marginBottom: "1em" }}
//           />
//         ) : null}
//         {hasConfirmPassword ? null : (
//           <div>
//             <Checkbox type="checkbox" />
//             <h3 className="checkBoxText">Keep me logged in</h3>
//             <Link to="#" className="link">
//               Forgot password
//             </Link>
//           </div>
//         )}
//         <FormButton type="submit" color={"var(--white)"}>
//           {buttonText}
//         </FormButton>
//         <Divider />
//         <h3>
//           {bottomText}
//           <Link to={url} className="link">
//             {linkText}
//           </Link>
//         </h3>
//       </StyledForm>
//     </>
//   );
// };

// const mapStateToProps = ({ user }) => ({ user });

// export default connect(mapStateToProps, { setCurrentUser })(Form);
