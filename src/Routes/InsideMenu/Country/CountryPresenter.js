import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Countries = styled.div`
  font-size: 12px;
  opacity: 0.6;
  line-height: 1.5;
  width: 500px;
  margin-top: 10px;
`;

const CountryPresenter = ({ subresult, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {subresult.production_countries.map((c, index) => (
          <Countries key={index}>{c.name}</Countries>
        ))}
      </Content>
    </Container>
  );

CountryPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CountryPresenter;
