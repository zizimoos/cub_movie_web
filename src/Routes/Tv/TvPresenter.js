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

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? (
    <>
      <Loader></Loader>
      <Helmet>
        <title>CubsMovie | Loading</title>
      </Helmet>
    </>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section
          title="TopRated"
          children={topRated.map((tv) => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((tv) => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="AiringToday"
          children={airingToday.map((tv) => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date}
            ></Poster>
          ))}
        ></Section>
      )}
      {error && <Message text={error} color="#e74c3c"></Message>}
    </Container>
  );
};

export default TvPresenter;
