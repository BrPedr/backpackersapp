import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 30px;
  padding: 20px;

  background: var(--white);
  border-radius: 4px;
  border: 1px solid var(--greyLight);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`;
