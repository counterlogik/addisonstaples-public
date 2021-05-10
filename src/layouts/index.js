import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import e6poster from "../assets/images/eastsixth.jpg";
import e6mp4 from "../assets/videos/eastsixth.mp4";
import e6webm from "../assets/videos/eastsixth.webm";

const Wrapper = styled.div`
  color: #232129;
  background-color: black;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.25;
  pointer-events: none;
`;

const VideoOverlay = styled.div`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.05;
  background-color: #c73e1d;
  background-image: linear-gradient(315deg, #c73e1d 0%, #a23b72 37%, #2e86ab 100%);
  pointer-events: none;
`;

const Main = styled.div`
  padding: 3rem;
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <title>addison staples</title>
      <Video playsinline muted autoPlay loop poster={e6poster} id="bgvid">
        <source src={e6webm} type="video/webm" />
        <source src={e6mp4} type="video/mp4" />
      </Video>
      <VideoOverlay />

      <Main>
        {children}
      </Main>
    </Wrapper>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
