import React from "react";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 50px 10px;
  padding-top: 80px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return loading ? (
    <>
      <Loader></Loader>
      <Helmet>
        <title>CubsMovie | Loading</title>
      </Helmet>
    </>
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((movie) => (
            <Poster
              isMovie={true}
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map((movie) => (
            <Poster
              isMovie={true}
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcoming"
          children={upcoming.map((movie) => (
            <Poster
              isMovie={true}
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>
  );
};

export default HomePresenter;
