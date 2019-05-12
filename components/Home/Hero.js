import styled from "styled-components";
import { Type } from "../";

const Container = styled.section`
  position: relative;
  top: -72px;
  padding: 200px 0 240px;
  background: #2e2e2e url("/static/img/bg-pattern@2x.png") 50% 50% repeat;
  background-size: 30px 30px;
  color: #fff;
`;

const Title = styled(Type.H1)`
  color: #fff;
`;

export default () => (
  <Container>
    <div class="wrapper">
      <div class="row">
        <div class="col-xs-12 col-lg-offset-1 col-lg-7">
          <Title>
            UX product designers that help startups launch and growth
          </Title>
        </div>
      </div>
    </div>
  </Container>
);
