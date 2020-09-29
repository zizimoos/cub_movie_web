import React from "react";
import PropTypes from "prop-types";
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
const Li = styled.li`
  list-style: none;
  a {
    margin-left: 10px;
    text-decoration: none;
  }
`;
const YouTubePlay = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    width: 80%;
    height: 80%;
  }
`;

const SubMoviePresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(result.videos)}
      <Content>
        {result.videos.results.map((video) => (
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
        <YouTubePlay>
          <iframe
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${result.videos.results[0].key}?autoplay=false&amp;cc_load_policy=0&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;iv_load_policy=1&amp;modestbranding=0&amp;playsinline=0&amp;rel=1&amp;showinfo=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
          ></iframe>
        </YouTubePlay>
      </Content>
    </Container>
  );

SubMoviePresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SubMoviePresenter;
