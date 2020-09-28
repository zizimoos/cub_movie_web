import React from "react";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcoming"
          children={upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
    </Container>
  );
};

export default HomePresenter;
