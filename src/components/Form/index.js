import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user";

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
  buttonGoogleText,
  buttonText,
  bottomText,
  url,
  linkText,
  hasConfirmPassword,
  handleChange,
  handleSubmit,
  setCurrentUser,
  ...inputProps
}) => {
  const { email, password, confirmPassword } = inputProps;

  const handleClick = async () => {
   await signInWithGoogle();

    const user = () => {
      if (!auth.currentUser) {
        return;
      }
      setCurrentUser(auth.currentUser);
    }

    user()
  };

  return (
    <StyledForm method="post" onSubmit={(event) => handleSubmit(event)}>
      <h2>{formTitle}</h2>
      <FormButton color="black" onClick={() => handleClick()}>
        {buttonGoogleText}
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
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { setCurrentUser })(Form);

// import React from "react";
// import { Link } from "react-router-dom";

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
//   buttonGoogleText,
//   buttonText,
//   bottomText,
//   url,
//   linkText,
//   hasConfirmPassword,
//   handleChange,
//   handleSubmit,
//   ...inputProps
// }) => {
//   const { email, password, confirmPassword } = inputProps;

//   const handleClick = () => {
//     signInWithGoogle();
//   };

//   return (
//     <StyledForm method="post" onSubmit={(event) => handleSubmit(event)}>
//       <h2>{formTitle}</h2>
//       <FormButton color="black" onClick={() => handleClick()}>
//         {buttonGoogleText}
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
//       {hasConfirmPassword ? (
//         <StyledInput
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           label="Confirm Password"
//           value={confirmPassword}
//           onChange={(event) => handleChange(event)}
//           required
//           style={{ marginBottom: "1em" }}
//         />
//       ) : null}
//       {hasConfirmPassword ? null : (
//         <div>
//           <Checkbox type="checkbox" />
//           <h3 className="checkBoxText">Keep me logged in</h3>
//           <Link to="#" className="link">
//             Forgot password
//           </Link>
//         </div>
//       )}
//       <FormButton type="submit" color={"var(--white)"}>
//         {buttonText}
//       </FormButton>
//       <Divider />
//       <h3>
//         {bottomText}
//         <Link to={url} className="link">
//           {linkText}
//         </Link>
//       </h3>
//     </StyledForm>
//   );
// };

// export default Form;

// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   FormButton,
//   StyledForm,
//   Divider,
//   StyledInput,
//   Checkbox,
// } from "./styles";

// const Form = ({ confirmPassword }) => {
//   return (
//     <StyledForm>
//       <h2>Welcome back</h2>
//       <FormButton color="black">
//         {!confirmPassword ? "Login With Google" : "Register With Google"}
//       </FormButton>
//       <div>
//         <Divider></Divider>
//         <h3>or</h3>
//         <Divider></Divider>
//       </div>
//       <StyledInput type="email" placeholder="Email" required />
//       <StyledInput type="password" placeholder="Password" required />
//       {confirmPassword ? (
//         <StyledInput
//           type="password"
//           placeholder="Confirm Password"
//           style={{ marginBottom: "1em" }}
//         ></StyledInput>
//       ) : null}
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
//         Don't have an account yet?
//         <Link to="/register" className="link">
//           Register
//         </Link>
//       </h3>
//     </StyledForm>
//   );
// };

// export default Form;
