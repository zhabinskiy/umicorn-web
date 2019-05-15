import styled from "styled-components";
import { Type } from "../";

const Container = styled.section``;

const Block = styled.div`
  padding: 40px 24px;
  background: #6c41ae;
  color: #fff;

  @media (min-width: 1440px) {
    padding: 100px 0;
  }
`;

const Title = styled(Type.H2)`
  margin-bottom: 40px;
`;

const Description = styled.p`
  margin-bottom: 64px;

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  list-style: none;

  @media (min-width: 576px) {
    margin-top: 106px;
  }
`;

const Solution = styled.li`
  font-weight: 500;
  margin-bottom: 32px;
`;

export default () => (
  <Container>
    <div className="wrapper">
      <Block>
        <div className="row">
          <div className="col-lg-offset-1 col-sm-6 col-lg-5">
            <Title>Solutions</Title>
            <Description>
              We could be your design partner to build a better digital
              experiences together. We're okay with any startups stages, from
              your napkin-wireframes to large working product.
            </Description>
          </div>
          <div className="col-xs-12 col-sm-3 col-lg-offset-1 col-lg-2">
            <List>
              <Solution>Research</Solution>
              <Solution>UX/UI Audit</Solution>
              <Solution>Design Consulting</Solution>
            </List>
          </div>
          <div className="col-xs-12 col-sm-3 col-lg-2">
            <List>
              <Solution>UX/UI Design</Solution>
              <Solution>Visual Design</Solution>
              <Solution>Prototyping</Solution>
            </List>
          </div>
        </div>
      </Block>
    </div>
  </Container>
);
