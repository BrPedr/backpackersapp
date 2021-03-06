import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dropzone, { useDropzone } from "react-dropzone";
import { useRouteMatch } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import filesize from "filesize";
import { useDispatch } from "react-redux";

import {
  firestore,
  storageRef,
  updateFirestoreCardsDocuments,
} from "../../firebase/firebase.utils";

import {
  updateCardDocuments,
  selectAllCards,
} from "../../redux/cards/cardsSlice";
import { selectUser } from "../../redux/user/userSlice";

import { DropContainer, UploadMessage } from "./styles";

const Upload = ({ id }) => {
  const match = useRouteMatch();
  const cards = useSelector(selectAllCards);
  const card = cards.find((id) => id.id === match.params.cardId);
  const [uploadedFiles, setUploadedFiles] = useState(hasCard(card));
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function hasCard(card) {
    if (!card.documents) {
      return [];
    }

    return card.documents;
  }

  useEffect(() => {
    dispatch(updateCardDocuments({ id, documents: uploadedFiles }));
    // updateFirestoreCardsDocuments(user.uid, id, card.documents);
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
    const uploading = () => {
      files.map(function (file) {
        const uploadTask = storageRef
          .child(`${user.uid}/${card.id}/${file.name}`)
          .put(file);

        return uploadTask.on(
          "state_changed",
          function progress(snapshot) {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            console.log(
              snapshot,
              snapshot.bytesTransferred,
              snapshot.totalBytesTransferred,
              snapshot.totalBytes
            );
          },
          function (error) {
            console.log(error);
          },
          function () {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                console.log("File available at", downloadURL);
              });
          }
        );
      });
    };
    // uploading();
    // const store = storageRef.child(`${user.uid}/${card.id}/file.name`);
    // const uploadTask = files.map((file) => store.put(file));
    // uploadTask.on('state_changed', function progress (snapshot) {
    // console.log(snapshot.totalBytesTransferred)
    // })
  }

  return (
    <Dropzone>
      {() => (
        <DropContainer {...getRootProps({ isDragActive, isDragReject })}>
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
};

export default Upload;
