import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spin from "react-loader-spinner";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Loader = () => {
  return (
    <Container>
      <Spin
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </Container>
  );
};

export default Loader;
