import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  display: grid;
  align-self: center;
  font-family: "Franklin Gothic Medium", sans-serif;
  background-image: url("${background}");
  background-size: cover;
  margin: auto;
  font-size: large;
  color: black;
}

`;