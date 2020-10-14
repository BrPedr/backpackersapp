import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: var(--white);
    padding-left: 20px;
  }

  form {
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    /* width: 111px; */
    height: 56px;

    background: #c1751b;
    border-radius: 5px;

    h4 {
      color: var(--white);
    }
  }

  input {
    background: none;

    padding: 0 20px;

    color: var(--white);
    font-size: 17px;
    font-family: "Montserrat", sans-serif;

    cursor: pointer;
  }
`;
