import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root {
  --font-rubik: "Rubik", sans-serif;
  --font-mono: "Share Tech Mono", monospace;

  --color-red: #C23616;
  --color-green: #44BD32;
  --color-warning: #F0C11A;
  --color-yellow: #E1A32A;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-rubik);
    list-style: none;
    text-decoration: none;
}
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 225px auto;
`;

export default GlobalStyled;
