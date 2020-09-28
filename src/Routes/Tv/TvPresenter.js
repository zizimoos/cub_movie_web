import React from "react";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section
          title="TopRated"
          children={topRated.map((tv) => (
            <span key={tv.id}>{tv.original_name}</span>
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((tv) => (
            <span key={tv.id}>{tv.original_name}</span>
          ))}
        ></Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="AiringToday"
          children={airingToday.map((tv) => (
            <span key={tv.id}>{tv.original_name}</span>
          ))}
        ></Section>
      )}
    </Container>
  );
};

export default TvPresenter;
