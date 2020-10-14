import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({ className: "dropzone" })`
  border: 1px dashed #ddd;
  border-radius: 4px;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};

  cursor: pointer;
`;

const messageColors = {
  default: "var(--grey)",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  color: ${(props) =>
    props.isDragActive
      ? messageColors.success
      : props.isDragReject
      ? messageColors.error
      : messageColors.default};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
