import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
    font-smooth: always;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }
`;
