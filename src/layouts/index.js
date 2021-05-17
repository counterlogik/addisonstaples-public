import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import e6poster from "../assets/images/eastsixth.jpg";
import e6mp4 from "../assets/videos/eastsixth.mp4";
import e6webm from "../assets/videos/eastsixth.webm";
import { Link } from "gatsby";

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

const Video = styled.video.attrs({
  preload: 'auto',
  autoPlay: true,
  loop: true,
  muted: true,
})`
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
  background-image: linear-gradient(315deg, rgb(157,239,255) 0%, whitesmoke 37%, rgb(255,107,98) 100%);
  pointer-events: none;
`;

const Navigation = styled.nav`
  font-family: "Roboto Mono", sans-serif, monospace;
  color: whitesmoke;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  a {
    text-decoration: none;
    color: rgb(157,239,255);

    &[aria-current] {
      opacity: 0.5;
    }
  }
`;

const NavLink = styled.li`
font-size: 1rem;
      padding: 1.25rem 1rem;
`;

const Main = styled.div`
  padding: 0 1rem;
`;

const navItems = [
  { link: "/", name: "home" },
  { link: "/experience", name: "experience" },
  { link: "https://github.com/counterlogik", name: "github", isExternal: true },
  { link: "https://www.linkedin.com/in/addisonstaples/", name: "linkedin", isExternal: true },
];

function Layout({ path, children }) {
  return (
    <Wrapper>
      <title>addison staples</title>
      <Video poster={e6poster}>
        <source src={e6webm} type="video/webm" />
        <source src={e6mp4} type="video/mp4" />
      </Video>
      <VideoOverlay />

      <Navigation>
        <ul>
          {navItems.map(navItem =>
            <NavLink key={navItem.name}>
              {!navItem?.isExternal ?(
                <Link to={navItem.link} aria-current={path === navItem.link ? true : undefined}>{navItem.name}</Link>
               ) :(
                <a href={navItem.link}>{navItem.name}</a>
               )
              }
            </NavLink>
          )}
        </ul>
      </Navigation>
      <Main>
        {children}
      </Main>
    </Wrapper>
  );
}

Layout.propTypes = { path: PropTypes.string, children: PropTypes.node.isRequired };

export default Layout;
