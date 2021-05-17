import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { media } from "../styles/breakpoints";

const Header = styled.header`
  position: relative;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h1 {
    font-size: 2rem;
    color: ${colors.neutral};
    box-sizing: content-box;
    text-overflow: clip;
    letter-spacing: 0.5rem;
    text-shadow: -2px 0 1px ${colors.primary}, 2px 0 1px ${colors.secondary};
    margin-bottom: 2rem;

    ${media.small`
      font-size: 2.5rem;
      text-shadow: -2.5px 0 1px rgb(157,239,255), 2.5px 0 1px rgb(255,107,98);
    `}

    ${media.medium`
      font-size: 3rem;
      text-shadow: -3px 0 1px rgb(157,239,255), 3px 0 1px rgb(255,107,98);
    `}
  }
`;

const Blurb = styled.p`
  margin-bottom: 1rem;
`;

const About = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
`;

function IndexPage() {
  return (
    <>
      <Header>
        <h1>addison staples</h1>
      </Header>
      <About>
        <Blurb>Howdy, my name is Addison. I&apos;m a front end developer living in Austin, TX. I hold a math degree from the University of Texas (with a dash of computer science!).</Blurb>

        <Blurb>I have been coding since age twelve when I started making websites for whatever Nintendo game I was obsessed with at the moment. I got my first paid dev gig in my twenties which ignited that childhood spark into a career.</Blurb>

        <Blurb>I enjoy cooking tasty plant-based meals, cruising around near the lake on my bike, and learning about the world of backpacking. Sometimes, I dabble as a DJ (house and techno). I also tinker with computers and projectors for live visuals.</Blurb>
      </About>
    </>
  );
}

export default IndexPage;
