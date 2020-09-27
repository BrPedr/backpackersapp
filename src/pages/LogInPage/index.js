import React from "react";

import SignIn from "../../components/LogIn";
import Background from "../../assets/Lamps.png";

import { Container, StyledBackground, StyledImage, Title } from "./styles";

const SignInPage = () => {
  return (
    <Container>
      <StyledBackground/>
      <StyledImage src={Background}/>
      <Title>Backpackers</Title>
      <div>
        <SignIn />
      </div>
    </Container>
  );
};

export default SignInPage;
