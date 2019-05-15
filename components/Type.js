import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.02em;

  @media (min-width: 576px) {
    font-size: 64px;
    line-height: 70px;
  }
`;

export const H2 = styled(H1)`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;

  @media (min-width: 576px) {
    font-size: 48px;
    line-height: 62px;
  }
`;

export const H3 = styled(H2)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 26px;
  }
`;
