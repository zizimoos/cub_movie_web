import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Image = styled.div`
  height: 200px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-size: cover;
  background-image: url(${(props) => props.bgUrl});
  transition: opacity 0.1s ease-in-out;
`;
const Rating = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
`;
const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imgUrl
                ? `https://image.tmdb.org/t/p/w500${imgUrl}`
                : require("../asset/img/tessa.jpg")
            }
          ></Image>
          <Title>
            {title.length < 20 ? title : `${title.substring(0, 18)} ...`}
          </Title>

          <Year>{year && year.substring(0, 7)}</Year>
          <Rating>
            {" "}
            <span role="img" aria-label="rating">
              ★
            </span>{" "}
            {rating} /10{" "}
          </Rating>
        </ImageContainer>
      </Container>
    </Link>
  );
};

export default Poster;
