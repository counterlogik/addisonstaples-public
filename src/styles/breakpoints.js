import { css } from 'styled-components';

const sizes = {
  extraExtraLarge: 1400,
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
