import styled from "styled-components";

export const Container = styled.form`
  position: fixed;

  display: flex;
  justify-content: space-between;

  width: 500px;
  height: 500px;

  margin: 0 calc(35% - 100px);
  top: 15%;

  background: white;

  button {
    width: 50px;
    height: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
