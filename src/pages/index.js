import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h1 {
    font-family: "Dank Mono", "Roboto Mono", sans-serif, monospace;
    font-size: 3.25rem;
    color: whitesmoke;
    box-sizing: content-box;
    text-overflow: clip;
    letter-spacing: 0.5rem;
    text-shadow: -3px 0 1px rgb(157,239,255) , 3px 0 1px rgb(255,107,98) ;
  }
`;

const About = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  font-family: "Dank Mono", "Roboto Mono", sans-serif, monospace;
`;

function IndexPage() {
  return (
    <>
      <Header>
        <h1>addison staples</h1>
      </Header>
      <About>
        <p>Howdy, my name is Addison. I&apos;m a front end developer living in Austin, TX. I hold a math degree from the University of Texas (with a dash of computer science!).</p>

        <p>I have been coding since age twelve when I started making websites for whatever Nintendo game I was obsessed with at the moment. I got my first paid dev gig in my twenties which ignited that childhood spark into a career.</p>

        <p>Lately, I enjoy cooking yummy plant-based meals, cruising around near the lake on my bike, and learning about the world of backpacking. Sometimes, I dabble as a DJ (house and techno). I also tinker with computers and projectors for live visuals.</p>
      </About>
    </>
  );
}

export default IndexPage;
