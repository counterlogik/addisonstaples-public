import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { media } from "../styles/breakpoints";

const ExperienceList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: ${colors.neutral};
`;

const PageHeading = styled.h2`
  font-size: 2rem;
  color: ${colors.neutral};
  text-align: right;
  letter-spacing: 0.5rem;
  margin-bottom: 2rem;

${media.small`
  font-size: 2.5rem;
`}

${media.medium`
  font-size: 3rem;
`}
`;

const Role = styled.li`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Company = styled.div`
  color: ${colors.secondary};
  font-weight: 700;
  font-size: 2em;

  a {
    color: ${colors.secondary}
  }
`;

const RoleTitle = styled.div`
  color: ${colors.neutral};
  font-size: 0.875em;
`;

const Used = styled.div`
  font-size: 0.75em;
  opacity: 0.8;

  span {
    color: ${colors.primary};
  }
`;

const Description = styled.div`
  color: ${colors.neutral};
`;

const experiences = [
  {
    company: "Accenture",
    roles: ["Senior Front End Engineer"],
    end: "Present",
    begin: "January 2019",
    link: "https://www.accenture.com/",
    details: [
      "Mentored junior developers (between 2-8 per project) on modern front-end technologies including React, Angular, Redux, RxJS, Git, and Azure",
      "Developed multi-pod initiative to integrate E2E testing into the solution with CucumberJS and Protractor while maintaining existing unit test suites using Jasmine",
      "Built latest React and Angular 8/9/10 front ends (both from scratch and inherited) through MVP projects, post MVP, and complete redesigns of existing applications",
      "Converted existing linting configuration from TSLint to ESLint, and implemented code style enforcement via Prettier to improve developer efficiency",
      "Trained client engineering teams on Angular/RxJS best practices and fully architected front end stacks for new projects",
    ],
    used: ["Angular", "RxJS", "React", "Node"],
    description: "Developed modern web applications for medium to massive corporate clients and government orgs; mentored jr devs",
  },
  {
    company: "PrimeLending",
    roles: ["Front End Developer"],
    end: "January 2019",
    begin: "September 2017",
    link: "https://www.primelending.com/",
    details: [
      "Develop and maintain an existing AngularJS app in an Agile team environment",
      "Overhaul the Sass / CSS layer, utilizing Gulp to build, drawing on OOCSS, SMACSS and BEM",
      "Re-write entire front end of consumer application, utilizing Angular (6+) framework supported by completely custom CSS / HTML framework and templating pattern",
      "Responsible for UI/UX for proof of concepts, from idea to design (Sketch) to prototype",
      "Serve as consultant for user interface and experience design for other teams throughout the company",
    ],
    used: ["AngularJS", "Angular", "Sass"],
    description: "Refactored 200K+ user-base home loans application",
  },
  {
    company: "iPhotonix",
    roles: ["UI Engineer", "Team Lead"],
    end: "September 2017",
    begin: "January 2016",
    link: "https://www.beyondedgenetworks.com/",
    details: [
      "Develop and expand a custom SVG-centric framework built with JavaScript, CSS3, and HTML5",
      "Harness established web libraries like D3, Underscore, and jQuery to rapidly deploy new features",
      "Personally tailor modern web stack (Node.js, Grunt, Autobahn, Bower, Sass) for application",
      "Mentor UI team interns and new hires on our library and critical tech like source control (Git)",
      "Built and maintain a flexible reports API for displaying, sorting, and acting on a wide array of business data",
      "Design and write custom D3-powered graph components for richly displaying real-time traffic data",
    ],
    used: ["D3", "jQuery", "Sass"],
    description: "Built SVG-centric framework/UI for exploring networks",
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHeading>recent experience</PageHeading>
      <ExperienceList>
        {experiences.map((experience, index) => (
          <Role key={index}>
            <Company>
              <a href={experience.link}>{experience.company}</a>
            </Company>
            <RoleTitle>{experience.roles.join(" / ")}</RoleTitle>
            <Used>[used: {experience.used.join(" / ")}]</Used>
            <Description>{experience.description}</Description>
          </Role>
        ))}
      </ExperienceList>
    </>
  );
}

export default ExperiencePage;
