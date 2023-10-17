import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, p, a {
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100vh + 1rem);
`;