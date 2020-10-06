import styled from "styled-components";

export const Container = styled.div`
  grid-area: SB;

  background: ${(props) => props.color};

  border-right: 2px solid;
  border-color: var(--greyLight);

  display: flex;
  flex-direction: column;
  align-items: center;

  .help-center {
    width: 100%;
    min-height: 150px;
    margin-top: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .react-icons {
      margin: 1em 0;

      stroke: var(--greyVariant);
      stroke-width: 1.5;
      fill: white;

      &:hover {
        opacity: 0.7;
      }
    }

    hr {
      width: 100%;
      border: 1px solid var(--greyLight);
    }

    h4 {
      color: var(--greyVariant);
    }
  }
`;

export const Menu = styled.aside`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.button`
  width: 52px;
  height: 52px;

  background: ${(props) => props.color};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  margin: 1em 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
