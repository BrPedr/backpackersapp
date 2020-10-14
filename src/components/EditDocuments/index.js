import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { selectAllCards } from "../../redux/cards/cardsSlice";

import Button from "../Button";
import Upload from "../Upload";
import FilesList from "../FilesList";

import { Container, Content } from "./styles";

const EditDocuments = () => {
  const match = useRouteMatch();
  const cards = useSelector(selectAllCards);

  const hasCard = cards.find((card) => card.id === match.params.cardId);

  return (
    <Container>
      <Content>
        <Upload id={match.params.cardId} card={hasCard}>
          EditDocuments
        </Upload>
        {!!hasCard.documents && (
          <FilesList card={hasCard} id={match.params.cardId} />
        )}
      </Content>
      <Button />
    </Container>
  );
};

export default EditDocuments;
