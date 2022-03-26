import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Mulish", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
