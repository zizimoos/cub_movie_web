import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const Message = ({ text, color }) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

export default Message;
