import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overflow: auto;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    vertical-align:text-bottom;
    line-height: 0;
  }

  body {
    font-family: ${fonts.normal};
  }

  p {
    margin-bottom: 15px;

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.headlines};
    margin-bottom: 20px;
    margin-top: 20px;
    display: block;
  }

  a {
    color: ${colors.black};
  }

`;

export default GlobalStyle;
