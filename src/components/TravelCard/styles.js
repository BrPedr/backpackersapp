import styled, { css } from "styled-components";

// import { FiShare } from "react-icons/fi";
// import { BsPaperclip } from "react-icons/bs";
// import { RiRouteLine } from "react-icons/ri";
// import { MdKeyboardArrowRight } from "react-icons/md";

export const Container = styled.div`
  position: relative;

  background: var(--white);
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  margin-bottom: 10px;
  padding: 15px;

  cursor: grab;

  header {
    position: absolute;

    top: -22px;
    left: 15px;
  }

  img {
    width: 20px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    line-height: 20px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      padding-top: 31px;

      background: transparent;
      border: 2px dashed rgba(0, 0, 0, 0.2);
      border-radius: 0;
      box-shadow: none;
      
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;

  display: inline-block;

  background: ${(props) => props.color};
`;

// export const Title = styled.h2`
//   margin-left: 10px;

//   font-weight: 600;
//   font-size: 20px;
// `;

// export const Calendar = styled.div`
//   width: 60%;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   div {
//     width: 78.25px;
//     height: 33.86px;

//     background: #6e6b8f;
//     border-radius: 5px;

//     white-space: nowrap;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     h3 {
//       color: var(--white);
//     }
//   }

//   h3 {
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 17px;

//     color: #aaaaaa;
//   }
// `;

// export const IconsContainer = styled.div`
//   width: 100%;
//   height: 40px;

//   display: flex;
//   align-items: center;

//   h4 {
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 17px;

//     color: #aaaaaa;

//     margin-left: -15px;
//   }
// `;

// export const StyledFiShare = styled(FiShare)`
//   width: 45px;

//   margin-left: -10px;

//   color: var(--greyVariant);
// `;

// export const StyledBsPaperclip = styled(BsPaperclip)`
//   width: 45px;

//   color: var(--greyVariant);
// `;

// export const StyledRiRouteLine = styled(RiRouteLine)`
//   width: 45px;

//   color: var(--greyVariant);
// `;

// export const StyledMdKeyboardArrowRight = styled(MdKeyboardArrowRight)`
//   width: 45px;
//   height: 25px;

//   color: var(--grey);
// `;

// export const Divider = styled.div`
//   width: calc(10px + 100%);

//   border: 1px solid #e6e6e6;
// `;

// export const Footer = styled.div`
//   display: flex;
//   align-items: center;

//   padding-bottom: 5px;

//   h3 {
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 14px;

//     color: #aaaaaa;
//   }
// `;
