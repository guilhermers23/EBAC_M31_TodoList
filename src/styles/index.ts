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

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  display: block;
  margin: 48px 0;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

export const SaveButton = styled(Button)`
  background-color: var(--color-green);
`;

export const RedButton = styled(Button)`
  background-color: var(--color-red);
`;

export default GlobalStyled;
