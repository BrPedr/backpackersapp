import React from "react";

import Register from "../../components/Register";

import Background from "../../assets/LampPerson.png";

import { Container, StyledBackground, StyledImage } from "./styles";

const RegisterPage = () => {
  return (
      <Container>
        <StyledBackground />
        <StyledBackground className="second-circle"/>
        <StyledImage src={Background} />
        <div className="register">
          <Register />
        </div>
      </Container>
  );
};

export default RegisterPage;
