import styled from "styled-components";

export const UserPhotoContainer = styled.div`
  width: 50px;
  height: 50px;

  margin: 0 1em;

  overflow: hidden;

  border-radius: 50%;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
