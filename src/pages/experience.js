import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const ExperienceList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: ${colors.neutral};
`;

const PageHeading = styled.h2`
  font-size: 2.25rem;
  color: ${colors.secondary};
  letter-spacing: 0.5rem;
`;

const experiences = [
  {
    company: "Accenture",
    roles: ["Senior Front End Engineer"],
    end: "Present",
    begin: "January 2019",
    details: [
      "Mentored junior developers (between 2-8 per project) on modern front-end technologies including React, Angular, Redux, RxJS, Git, and Azure",
      "Developed multi-pod initiative to integrate E2E testing into the solution with CucumberJS and Protractor while maintaining existing unit test suites using Jasmine",
      "Built latest React and Angular 8/9/10 front ends (both from scratch and inherited) through MVP projects, post MVP, and complete redesigns of existing applications",
      "Converted existing linting configuration from TSLint to ESLint, and implemented code style enforcement via Prettier to improve developer efficiency",
      "Trained client engineering teams on Angular/RxJS best practices and fully architected front end stacks for new projects",
    ],
  },
  {
    company: "PrimeLending",
    roles: ["Front End Developer"],
    end: "January 2019",
    begin: "September 2017",
    details: [
      "Develop and maintain an existing AngularJS app in an Agile team environment",
      "Overhaul the Sass / CSS layer, utilizing Gulp to build, drawing on OOCSS, SMACSS and BEM",
      "Re-write entire front end of consumer application, utilizing Angular (6+) framework supported by completely custom CSS / HTML framework and templating pattern",
      "Responsible for UI/UX for proof of concepts, from idea to design (Sketch) to prototype",
      "Serve as consultant for user interface and experience design for other teams throughout the company",
    ],
  },
  {
    company: "iPhotonix",
    roles: ["UI Engineer", "Team Lead"],
    end: "September 2017",
    begin: "January 2016",
    details: [
      "Develop and expand a custom SVG-centric framework built with JavaScript, CSS3, and HTML5",
      "Harness established web libraries like D3, Underscore, and jQuery to rapidly deploy new features",
      "Personally tailor modern web stack (Node.js, Grunt, Autobahn, Bower, Sass) for application",
      "Mentor UI team interns and new hires on our library and critical tech like source control (Git)",
      "Built and maintain a flexible reports API for displaying, sorting, and acting on a wide array of business data",
      "Design and write custom D3-powered graph components for richly displaying real-time traffic data",
    ],
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHeading>recent experience</PageHeading>
      <ExperienceList>
        {experiences.map((experience, index) => (
          <li key={index}>
            <div>{experience.roles.join(" / ")}</div>
            <div>{experience.company}</div>
            <div>
              {experience.begin} - {experience.end}
            </div>
            <ul>
              {experience.details.map((detail, index) => (
                <li key={`${experience.company}-detail-${index}`}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ExperienceList>
    </>
  );
}

export default ExperiencePage;
