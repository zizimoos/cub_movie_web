import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  /* height: calc(100vh - 50px); */
  width: 100%;
  margin-top: 20px;
  position: relative;
  padding: 10px;
`;

const Content = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Production = styled.div`
  width: 100px;
  height: 148px;
  margin-right: 5px;
  background-color: white;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px;
  border: 2px solid gray;
  border-radius: 5px;
`;
const Pname = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const ProductBox = styled.div`
  width: 110px;
  height: 180px;
  margin-bottom: 20px;
`;

const SeasonsPresenter = ({ subresult, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {subresult.seasons.map((s) => (
          <ProductBox>
            <Pname>{s.name.slice(0, 16)}</Pname>
            <Production
              bgImage={
                s.poster_path
                  ? `https://image.tmdb.org/t/p/original${s.poster_path}`
                  : require("../../../asset/img/tessa.jpg")
              }
            />
          </ProductBox>
        ))}
      </Content>
    </Container>
  );

SeasonsPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SeasonsPresenter;
