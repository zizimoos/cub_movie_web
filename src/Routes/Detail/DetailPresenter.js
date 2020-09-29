import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: calc(100vh);
  width: 100vw;
  position: relative;
  padding: 20px 20px;
  padding-top: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0.3;
  filter: blur(3px);
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Cover = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.posterImage});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  z-index: 10;
`;

const Data = styled.div`
  width: 60%;
  padding-left: 30px;
`;

const Title = styled.span`
  display: block;
  font-size: 80px;
  color: white;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin-bottom: 10px;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0px 10px;
`;
const Overview = styled.p`
  margin-bottom: 20px;
  width: 70%;
  text-align: justify;
  line-height: 1.3;
`;

const DetailPresenter = ({ result, isMovie, loading, error }) => {
  return loading ? (
    <>
      <Loader></Loader>
      <Helmet>
        <title>CubsMovie | Loading</title>
      </Helmet>
    </>
  ) : error ? (
    <Message text={"sorry"}></Message>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | CubsMovie
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : require("../../asset/img/tessa.jpg")
        }
      ></Backdrop>
      <Content>
        <Cover
          posterImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../asset/img/tessa.jpg")
          }
        ></Cover>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date
                : result.first_air_date}
            </Item>
            <Divider> ● </Divider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.episode_run_time[0]
                ? result.episode_run_time[0]
                : `100min`}
              min
            </Item>
            <Divider> ● </Divider>
            <Item>{result.original_language}</Item>
            <Divider> ● </Divider>
            <Item>{result.status}</Item>
            <Divider> ● </Divider>
            <Item>
              {result &&
                result.genres.map((g, index) =>
                  index === result.genres.length - 1 ? g.name : `${g.name} / `
                )}
            </Item>
            <Divider> ● </Divider>
            <Item> ★ {result.vote_average ? result.vote_average : null}</Item>
            <Divider> ● </Divider>
            <Item>{result.imdb_id ? result.imdb_id : null}</Item>
          </ItemContainer>

          <Overview>{result.overview}</Overview>

          <div>
            {result &&
              result.production_companies.map((g, index) => (
                <div key={index}>
                  {g.id} / {g.name} / {g.logo_path} / {g.origin_country}
                </div>
              ))}
          </div>
          <div>
            {result &&
              result.videos.results.map((g, index) => (
                <div key={index}>
                  {g.name}/{g.id} / {g.key} / {g.type} / {g.size}
                </div>
              ))}
          </div>
        </Data>
      </Content>
    </Container>
  );
};

export default DetailPresenter;
