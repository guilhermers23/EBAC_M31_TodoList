import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    list-style: none;
}
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 225px auto;
`;

export default GlobalStyled;
