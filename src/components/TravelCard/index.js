import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import {
  Container,
  Label,
  // Title,
  // Calendar,
  // IconsContainer,
  // StyledFiShare,
  // StyledBsPaperclip,
  // StyledRiRouteLine,
  // StyledMdKeyboardArrowRight,
  // Divider,
  // Footer,
} from "./styles";

const TravelCard = ({ data, index }) => {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "TRAVELCARD", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "TRAVELCARD",
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label) => (
          <Label color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="user" />}
      {/* <Calendar>
        <div>
          <h3>Mar, 07</h3>
        </div>
        <h3>In 3 days</h3>
      </Calendar>
      <IconsContainer>
        <StyledFiShare />
        <h4>2</h4>
        <StyledBsPaperclip />
        <h4>6</h4>
        <StyledRiRouteLine />
        <h4>13</h4>
      </IconsContainer>
      <Divider />
      <Footer>
        <StyledMdKeyboardArrowRight />
        <h3>See your plans</h3>
      </Footer> */}
    </Container>
  );
};

export default TravelCard;
