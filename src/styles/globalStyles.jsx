import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Arial';
    background-color: ${props => props.theme.background};
    transition: 0.2s background-color linear, 0.2s color linear;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a,
  button,
  h1,
  h2,
  h3 {
    text-decoration: none;
  }
`;

export default GlobalStyles;
