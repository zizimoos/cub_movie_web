import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";

import { Route, Link, withRouter, Redirect } from "react-router-dom";
import SubMovie from "../InsideMenu/SubMovie";
import Production from "../InsideMenu/Production";
import Cast from "../InsideMenu/Cast";
import Pcompany from "../InsideMenu/Pcompany";
import CreatedBy from "../InsideMenu/CreatedBy";
import Seasons from "../InsideMenu/Seasons";

const Container = styled.div`
  height: calc(100vh);
  width: 100vw;
  position: relative;
  padding: 80px 10px 0px 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 160vh;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  z-index: 0;
  filter: blur(0px);
  opacity: 0.4;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Cover = styled.div`
  width: 40%;
  height: 100%;
  /* margin-left: 50px; */

  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  z-index: 1;
`;

const Data = styled.div`
  width: 60%;
  height: 70%;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;
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
const Overview = styled.p`
  margin-bottom: 20px;
  width: 100%;
  text-align: justify;
  line-height: 1.3;
`;

const InsideMenu = styled("div")`
  margin: 5px 0px;
`;
const List = styled("ul")`
  margin-top: 20px;
  display: flex;
`;
const SLink = styled(Link)`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const Li = styled("li")`
  width: 250px;
  margin-right: 0px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${(props) => (props.active ? "dodgerblue" : "gray")};
  padding: 0px;
  margin-right: 100px;
  background-color: ${(props) => (props.active ? "dodgerblue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "dodgerblue")};
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, isMovie, error, loading }) =>
    loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <Helmet>
          <title>{result.title ? result.title : result.name} | BCflix</title>
        </Helmet>
        <Backdrop
          bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        ></Backdrop>
        <Content>
          <Cover
            bgUrl={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          ></Cover>
          <Data>
            <Title>{isMovie ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {isMovie ? result.release_date : result.first_air_date}
              </Item>
              <Divider> ● </Divider>
              <Item>
                {isMovie ? result.runtime : result.episode_run_time[0]}
                min
              </Item>
              <Divider> ● </Divider>
              <Item>
                {isMovie
                  ? result.spoken_languages.length > 0
                    ? result.spoken_languages[0].name
                    : result.original_language
                  : result.languages[0]}
              </Item>
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
            {isMovie ? (
              <Redirect to={`/movie/${result.id}/subMovie`}></Redirect>
            ) : (
              <Redirect to={`/tv/${result.id}/pCompany`}></Redirect>
            )}
            {pathname.includes("movie") ? (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/movie/${result.id}/subMovie`}>
                    <SLink to={`/movie/${result.id}/subMovie`}>YouTube</SLink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/cast`}>
                    <SLink to={`/movie/${result.id}/cast`}>cast</SLink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/production`}>
                    <SLink to={`/movie/${result.id}/production`}>
                      Created By
                    </SLink>
                  </Li>
                </List>
              </InsideMenu>
            ) : (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/tv/${result.id}/pCompany`}>
                    <SLink to={`/tv/${result.id}/pCompany`}>
                      youtube video
                    </SLink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/createdBy`}>
                    <SLink to={`/tv/${result.id}/createdBy`}>Created By</SLink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/seasons`}>
                    <SLink to={`/tv/${result.id}/seasons`}>Seasons</SLink>
                  </Li>
                </List>
              </InsideMenu>
            )}

            <Route path="/movie/:id/subMovie" component={SubMovie}></Route>
            <Route path="/movie/:id/production" component={Production}></Route>
            <Route path="/movie/:id/cast" component={Cast}></Route>
            <Route path="/tv/:id/pCompany" component={Pcompany}></Route>
            <Route path="/tv/:id/createdBy" component={CreatedBy}></Route>
            <Route path="/tv/:id/seasons" component={Seasons}></Route>
          </Data>
        </Content>
      </Container>
    )
);

export default DetailPresenter;
