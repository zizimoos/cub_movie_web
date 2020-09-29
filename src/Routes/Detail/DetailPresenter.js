import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Helmet } from "react-helmet";
// import InsideMenuMovie from "../InsideMenuMovie/insideMenuMovie";
// import InsideMenuTv from "../InsideMenuTv";
import { withRouter, Link, Route } from "react-router-dom";
import SubMovie from "../InsideMenu/SubMovie";
import Production from "../InsideMenu/Production";
import Country from "../InsideMenu/Country";
import Pcompany from "../InsideMenu/Pcompany";
import CreatedBy from "../InsideMenu/CreatedBy";
import Seasons from "../InsideMenu/Seasons";

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
  /* filter: blur(3px); */
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
  margin-bottom: 20px;
`;
const Item = styled.span`
  position: relative;
  line-height: 1.5;
`;
const Divider = styled.span`
  margin: 0px 10px;
`;
const Overview = styled.p`
  margin-bottom: 20px;
  width: 70%;
  text-align: justify;
  line-height: 1.3;
`;

const Imdb = styled.a`
  display: inline-block;
  position: absolute;
  top: -4px;
  right: -50px;
  width: 44px;
  height: 22px;
  border-radius: 2px;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const InsideMenu = styled("div")`
  margin: 5px 0px;
`;
const List = styled("ul")`
  margin-top: 20px;
  display: flex;
`;
const Slink = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Li = styled("li")`
  width: 150px;
  margin-right: 0px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${(props) => (props.active ? "dodgerblue" : "gray")};
  padding: 0px;

  background-color: ${(props) => (props.active ? "dodgerblue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "dodgerblue")};
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, isMovie, loading, error }) => {
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
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
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
                {result.runtime ? result.runtime : result.episode_run_time[0]}
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
              <Item>
                {" "}
                ★ {result.vote_average ? result.vote_average : null} / 10
              </Item>
              <Divider> ● </Divider>
              <Item>
                <Imdb
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                  target={"_blank"}
                  src={require("../../asset/img/logoImdb.png")}
                />
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>

            {pathname.includes("movie") ? (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/movie/${result.id}`}>
                    <Slink to={`/movie/${result.id}/subMovie`}>YouTube</Slink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/production`}>
                    <Slink to={`/movie/${result.id}/production`}>
                      Created By
                    </Slink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/country`}>
                    <Slink to={`/movie/${result.id}/country`}>Country</Slink>
                  </Li>
                </List>
              </InsideMenu>
            ) : (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/tv/${result.id}/pCompany`}>
                    <Slink to={`/tv/${result.id}/pCompany`}>
                      youtube video
                    </Slink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/createdBy`}>
                    <Slink to={`/tv/${result.id}/createdBy`}>Created By</Slink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/seasons`}>
                    <Slink to={`/tv/${result.id}/seasons`}>Seasons</Slink>
                  </Li>
                </List>
              </InsideMenu>
            )}

            <Route path="/movie/:id" component={SubMovie}></Route>
            <Route path="/movie/:id/production" component={Production}></Route>
            <Route path="/movie/:id/country" component={Country}></Route>
            <Route path="/tv/:id/pCompany" component={Pcompany}></Route>
            <Route path="/tv/:id/createdBy" component={CreatedBy}></Route>
            <Route path="/tv/:id/seasons" component={Seasons}></Route>
          </Data>
        </Content>
      </Container>
    );
  }
);

export default DetailPresenter;
