import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  /* height: calc(100vh - 50px); */
  width: 100%;
  position: relative;
  padding: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Production = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 5px;
  background-color: white;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
  margin: 0 auto;
`;
const Pname = styled.div`
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;

const ProductBox = styled.div`
  width: 210px;
  height: 210px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CreateByPresenter = ({ subresult, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {subresult.production_companies.map((production) => (
          <ProductBox key={production.id}>
            <Pname>{production.name.slice(0, 16)}</Pname>
            <Production
              bgImage={
                production.logo_path
                  ? `https://image.tmdb.org/t/p/original${production.logo_path}`
                  : require("../../../asset/img/tessa.jpg")
              }
            />
          </ProductBox>
        ))}
      </Content>
    </Container>
  );

CreateByPresenter.propTypes = {
  subresult: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CreateByPresenter;
