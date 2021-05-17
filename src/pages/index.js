import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const Blurb = styled.p`
  margin-bottom: 1rem;
`;

const About = styled.div`
  color: ${colors.neutral};
  font-size: 1.5rem;
`;

function IndexPage() {
  return (
    <>
      <About>
        <Blurb>Howdy, my name is Addison. I&apos;m a front end developer living in Austin, TX. I hold a math degree from the University of Texas (with a dash of computer science!).</Blurb>

        <Blurb>I have been coding since age twelve when I started making websites for whatever Nintendo game I was obsessed with at the moment. I got my first paid dev gig in my twenties which ignited that childhood spark into a career.</Blurb>

        <Blurb>I enjoy cooking tasty plant-based meals, cruising around near the lake on my bike, and learning about the world of backpacking. Sometimes, I dabble as a DJ (house and techno). I also tinker with computers and projectors for live visuals.</Blurb>
      </About>
    </>
  );
}

export default IndexPage;
