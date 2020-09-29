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
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 24px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or Tv Shows ..."
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {loading ? (
        <>
          <Loader></Loader>
          <Helmet>
            <title>CubsMovie | Loading</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
        </>
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
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
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map((tv) => (
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
            </Section>
          )}
          {error && <Message text={error} color="#e74c3c"></Message>}
          {tvResults &&
            movieResults &&
            tvResults.length === 0 &&
            movieResults.length === 0 && (
              <Message
                text={` Sorry Nothing found for ${searchTerm}`}
                color="#95a5a6"
              ></Message>
            )}
        </>
      )}
    </Container>
  );
};

export default SearchPresenter;
