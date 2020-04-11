import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Arial';
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
    color: ${props => props.theme.text};
    transition: 0.2s color linear;
  }
`;

export default GlobalStyles;
