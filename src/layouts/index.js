import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import e6poster from "../assets/images/eastsixth.jpg";
import e6mp4 from "../assets/videos/eastsixth.mp4";
import e6webm from "../assets/videos/eastsixth.webm";
import { GlobalStyle } from "../styles/base";
import { colors } from "../styles/variables";
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
  background-color: ${colors.secondary};
  background-image: linear-gradient(315deg, ${colors.primary} 0%, ${colors.neutral} 37%, ${colors.secondary} 100%);
  pointer-events: none;
`;

const Main = styled.div`
  padding: 2rem;
`;

export const NavItems = styled.nav`
  color: whitesmoke;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};

    &.active {
      opacity: 0.5;
    }
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  padding: 1.25rem 1rem;
`;


const navItems = [
  { link: "/", name: "home", isExternal: false },
  { link: "/experience", name: "experience", isExternal: false },
  { link: "https://github.com/counterlogik", name: "github", isExternal: true },
  { link: "https://www.linkedin.com/in/addisonstaples/", name: "linkedin", isExternal: true },
];

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <title>addison staples</title>
        <Video poster={e6poster}>
          <source src={e6webm} type="video/webm" />
          <source src={e6mp4} type="video/mp4" />
        </Video>
        <VideoOverlay />

        <NavItems>
          <ul>
            {navItems.map(navItem =>
              <NavItem key={navItem.name}>
                {navItem.isExternal ? (
                  <a href={navItem.link}>{navItem.name}</a>
                ) : (
                  <Link to={navItem.link} activeClassName="active">
                    {navItem.name}
                  </Link>
                )}
              </NavItem>
            )}
          </ul>
        </NavItems>
        <Main>
          {children}
        </Main>
      </Wrapper>
    </>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
