import React, { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { nanoid } from "@reduxjs/toolkit";
import filesize from "filesize";
import { useDispatch } from "react-redux";

import { updateCardDocuments } from "../../redux/cards/cardsSlice";

import { DropContainer, UploadMessage } from "./styles";

const Upload = ({ hasCard, id }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCardDocuments({ id, documents: uploadedFiles }));
  }, [uploadedFiles, dispatch, id]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png, application/pdf",
    onDropAccepted: (files) => handleUpload(files),
  });

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>Click or drag'n drop your files here</UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage isDragReject={isDragReject}>
          This type of file is not supported
        </UploadMessage>
      );
    }

    return (
      <UploadMessage isDragActive={isDragActive}>Drop your files</UploadMessage>
    );
  };

  function handleUpload(files) {
    if (!files) {
      return;
    }

    const currentUpload = files.map((file) => ({
      file,
      id: nanoid(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles(uploadedFiles.concat(currentUpload));
    // dispatch(updateCardDocuments({ id, documents: uploadedFiles }));
    //   uploadedFiles.forEach(processUpload())
  }

  // function processUpload(uploadedFile) {

  // }

  return (
    <Dropzone>
      {() => (
        <DropContainer {...getRootProps({ isDragActive, isDragReject })}>
          <input {...getInputProps()} />
          {/* {console.log(match.params.cardId)} */}
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
};

export default Upload;
