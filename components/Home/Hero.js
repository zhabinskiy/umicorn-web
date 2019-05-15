import styled from "styled-components";
import { Type } from "../";

const Container = styled.section`
  position: relative;
  top: -72px;
  padding: 120px 0;
  background: #2e2e2e url("/static/img/bg-pattern@2x.png") 50% 50% repeat;
  background-size: 30px 30px;
  color: #fff;

  @media (min-width: 1024px) {
    padding: 200px 0 240px;
  }
`;

const Title = styled(Type.H1)`
  color: #fff;
`;

export default () => (
  <Container>
    <div className="wrapper">
      <div className="row">
        <div className="col-md-offset-1 col-md-8 col-lg-7">
          <Title>
            UX product designers that help startups launch and growth
          </Title>
        </div>
      </div>
    </div>
  </Container>
);
