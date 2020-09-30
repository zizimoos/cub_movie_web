import React from "react";
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
  display: flex;
  flex-wrap: wrap;
  width: 90%;
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
  background-size: cover;
  /* border: 1px solid black; */
  border-radius: 5px;
  &:hover {
    opacity: 0.5;
  }
  transition: opacity 0.2s ease-in-out;
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

const CastPresenter = ({ cast, loading }) => {
  console.log(cast);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {cast.slice(0, 15).map((c) => (
          <ProductBox key={c.id}>
            <Pname>{c.name.slice(0, 16)}</Pname>
            <Production
              bgImage={
                c.profile_path
                  ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                  : require("../../../asset/img/tessa.jpg")
              }
            />
            {/* <div>
              {c.id}
              {c.character}
              {c.name}
              {c.profile_pat}
            </div> */}
          </ProductBox>
        ))}
      </Content>
    </Container>
  );
};

export default CastPresenter;
