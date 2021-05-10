import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Header = styled.header`
  position: relative;
  height: 25%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Roboto Mono", sans-serif, monospace;
    font-size: 3rem;
    color: paleturquoise;
  }
`;

const About = styled.p`
  color: whitesmoke;
  font-size: 1.25rem;
  font-family: "Roboto Mono", sans-serif, monospace;
  padding: 3rem;
`;

function IndexPage() {
  return (
    <>
      <Header>
        <h1>addison staples</h1>
      </Header>
      <About>
        Hi! My name is Addison. I&apos;m an experienced front end developer with an infinite learner mentality. I have been coding since age twelve when I made websites for N64 games with the edgiest table layouts around. A continuing fascination with logic and numbers found me with a formal degree in mathematics, but my passion for the web and making functional, attractive things for the web has driven my work and ongoing education.
      </About>
      <Link to="/experience">experience</Link><br />
      <Link to="https://github.com/counterlogik">github</Link><br />
      <Link to="https://www.linkedin.com/in/addisonstaples/">LinkedIn</Link><br />
    </>
  );
}

export default IndexPage;
