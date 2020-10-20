import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

const FilesList = ({ card }) => {

  return (
    <Container>
      {card.documents.map((cardFile) => (
        <li key={cardFile.id}>
          <FileInfo>
            <Preview src={cardFile.preview} />
            <div>
              <strong>{cardFile.name}</strong>
              <span>
                {cardFile.readableSize}
                {!!cardFile.url && <button onClick={() => {}}>Delete</button>}
              </span>
            </div>
          </FileInfo>

          <div>
            {!cardFile.uploaded && !cardFile.error && (
              <CircularProgressbar
                styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
                strokeWidth={10}
                percentage={60}
              />
            )}

            {cardFile.url && (
              <a
                href="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {cardFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {cardFile.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default FilesList;
