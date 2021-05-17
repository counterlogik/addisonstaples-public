import { createGlobalStyle } from "styled-components";
import { media } from '../styles/breakpoints';
import { colors } from "../styles/variables";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 12px;

    ${media.medium`
      font-size: 16px;
    `}

    ${media.large`
      font-size: 20px;
    `}

    ${media.extraLarge`
      font-size: 24px;
    `}
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: "Dank Mono", "Roboto Mono", sans-serif, monospace;
    color: ${colors.neutral};
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.neutral};
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;