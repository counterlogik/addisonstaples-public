import * as React from "react";
import { colors } from "../styles/variables";

function IndexPage() {
  return (
    <>
      <div style={{ color: colors.neutral, fontSize: "1.5rem" }}>
        <div style={{ marginBottom: "1rem" }}>Howdy, my name is Addison. I&apos;m a front end developer living in Austin, TX. I hold a math degree from the University of Texas (with a dash of computer science!).</div>

        <div style={{ marginBottom: "1rem" }}>I have been coding since age twelve when I started making websites for whatever Nintendo game I was obsessed with at the moment. I got my first paid dev gig in my twenties which ignited that childhood spark into a career.</div>

        <div style={{ marginBottom: "1rem" }}>I enjoy cooking tasty plant-based meals, cruising around near the lake on my bike, and learning about the world of backpacking. Sometimes, I dabble as a DJ (house and techno). I also tinker with computers and projectors for live visuals.</div>
      </div>
    </>
  );
}

export default IndexPage;
