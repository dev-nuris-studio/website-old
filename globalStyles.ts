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
    
  }
`;

export default GlobalStyle;
