import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";
import Profile from "../Profile";
import { setCurrentUser, selectUser } from "../../redux/user/userSlice";
import { auth } from "../../firebase/firebase.utils";

import {
  Container,
  LinksContainer,
  Title,
  ButtonsContainer,
  SignOutButton,
} from "./styles";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = async () => {
    await auth.signOut();

    auth.onAuthStateChanged(dispatch(setCurrentUser(null)));
  };

  return (
    <Container>
      <Title>Backpackers</Title>
      <LinksContainer>
        <Link to="#">Features</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Community</Link>
        <Link to="#">Support</Link>
      </LinksContainer>
      <ButtonsContainer hidden={!user ? null : "hidden"}>
        <Button
          hidden={!user ? null : "hidden"}
          color={"primary"}
          linkUrl="signin"
        >
          Log in
        </Button>
        <Button hidden={!user ? null : "hidden"} linkUrl="register">
          Register
        </Button>
        <Profile />
        <SignOutButton
          hidden={!user ? "hidden" : null}
          onClick={() => handleClick()}
        >
          Sign out
        </SignOutButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// import Button from "../Button";
// import Profile from "../Profile";
// import { setCurrentUser } from "../../redux/user";
// import { auth } from "../../firebase/firebase.utils";

// import {
//   Container,
//   LinksContainer,
//   Title,
//   ButtonsContainer,
//   SignOutButton,
// } from "./styles";

// const NavBar = ({ user, setCurrentUser }) => {
//   const handleClick = async () => {
//     await auth.signOut();

//     auth.onAuthStateChanged(setCurrentUser);
//   };

//   return (
//     <Container>
//       <Title>Backpackers</Title>
//       <LinksContainer>
//         <Link to="#">Features</Link>
//         <Link to="#">Pricing</Link>
//         <Link to="#">Community</Link>
//         <Link to="#">Support</Link>
//       </LinksContainer>
//       <ButtonsContainer hidden={!user ? null : "hidden"}>
//         <Button
//           hidden={!user ? null : "hidden"}
//           color={"primary"}
//           linkUrl="signin"
//         >
//           Log in
//         </Button>
//         <Button hidden={!user ? null : "hidden"} linkUrl="register">
//           Register
//         </Button>
//         <Profile />
//         <SignOutButton
//           hidden={!user ? "hidden" : null}
//           onClick={() => handleClick()}
//         >
//           Sign out
//         </SignOutButton>
//       </ButtonsContainer>
//     </Container>
//   );
// };

// const mapStateToProps = ({ user }) => ({
//   user: user.currentUser,
// });

// export default connect(mapStateToProps, { setCurrentUser })(NavBar);
