import React from "react";
import styled from "styled-components";

import Loader from "Components/Loader";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  font-size: 13px;
  line-height: 2;
`;

const ListBox = styled.div``;
const Li = styled.li`
  list-style: none;
  a {
    margin-left: 10px;
    text-decoration: none;
  }
`;
const YoutTubeCauroselContainer = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 100%;
`;
const YouTubePlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const CarouselButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;
`;
const CarouselButton = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.carouselIndex === props.id ? "white" : "dodgerblue"};
`;

const SubMoviePresenter = ({
  result,
  onClick,
  carouselIndex,
  loading,
  error,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(result.videos)}
      {console.log("carouselIndex", carouselIndex)}
      {result.videos.results.length < 1 ? null : (
        <Content>
          <ListBox></ListBox>
          {result.videos.results.slice(0, 10).map((video) => (
            <Li key={video.id}>
              <FontAwesomeIcon icon={faYoutube} size="1x" />
              <a
                href={`http://youtube.com/watch?v=${video.key}`}
                alt={video.name}
              >
                {video.name}
              </a>{" "}
            </Li>
          ))}
          <CarouselButtonContainer>
            {result.videos.results.slice(0, 10).map((yout, index) => (
              <CarouselButton
                onClick={onClick}
                key={index}
                id={index}
                carouselIndex={carouselIndex}
              >
                ●
              </CarouselButton>
            ))}
          </CarouselButtonContainer>

          <YoutTubeCauroselContainer>
            <YouTubePlay>
              <iframe
                frameBorder="0"
                allowFullScreen="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${result.videos.results[carouselIndex].key}?autoplay=false&amp;cc_load_policy=0&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;iv_load_policy=1&amp;modestbranding=0&amp;playsinline=0&amp;rel=1&amp;showinfo=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
              ></iframe>
            </YouTubePlay>

            {/* {result.videos.results.map((yout, index) => (
            <YouTubePlay>
              <iframe
                frameBorder="0"
                allowFullScreen="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${result.videos.results[index].key}?autoplay=false&amp;cc_load_policy=0&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;iv_load_policy=1&amp;modestbranding=0&amp;playsinline=0&amp;rel=1&amp;showinfo=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
              ></iframe>
            </YouTubePlay>
          ))} */}
          </YoutTubeCauroselContainer>
        </Content>
      )}
    </Container>
  );

export default SubMoviePresenter;
