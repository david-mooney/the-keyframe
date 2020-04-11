import { css } from 'styled-components';

const breakpoints = {
  hd: '1080px',
  mobile: '600px',
};

export default Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
