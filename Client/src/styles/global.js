import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const Global = createGlobalStyle`
  ${reset}

   * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    scrollbar-width: none;
    scroll-behavior: smooth;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }
`;

export default Global;
