import styled from "styled-components";
import { Type } from "../";

const Container = styled.section`
  position: relative;
  top: -72px;
  padding: 120px 0 24px;

  @media (min-width: 1024px) {
    padding: 200px 0 120px;
  }
`;

const Title = styled(Type.H1)`
  margin-bottom: 48px;
`;

const Description = styled.p``;

export default () => (
  <Container>
    <div className="wrapper">
      <div className="row">
        <div className="col-xs-12 col-lg-offset-1 col-lg-7">
          <Title>We're Umicorn</Title>
          <Description>
            We assist businesses in bringing new products to market: help
            launch, achieve success and growth through the best digital
            experiences. We also invest in startups we love and always have a
            special financing options.
          </Description>
        </div>
      </div>
    </div>
  </Container>
);
