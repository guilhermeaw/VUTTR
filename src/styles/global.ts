import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FCFCFD;
    color: #170C3A;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  button {
    cursor: pointer;
  }
`;
