import styled from "styled-components";
import Link from "next/link";
import { Type } from "../";

const Container = styled.section`
  margin-top: -100px;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const Background = styled.div`
  padding: 64px 16px;
  background: #fafbfd;

  @media (min-width: 576px) {
    padding: 116px 0 84px;
  }
`;

const Title = styled(Type.H2)`
  margin-bottom: 40px;
`;

const Description = styled.p`
  margin-bottom: 94px;
`;

const Block = styled.div`
  cursor: pointer;

  &:hover {
    span {
      color: #1270fd;
      border-color: transparent;
    }
  }
`;

const Arrow = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  margin: 0 auto 32px;
  border-radius: 100%;
  background: #1270fd;

  &:before,
  &:after {
    display: block;
    position: absolute;
    content: "";
    width: 36px;
    height: 36px;
    border-radius: 100%;
  }

  &:before {
    background: #fff;
    transform: scale(1);
    opacity: 0;
    z-index: -1;
  }

  &:after {
    background: url("/static/img/arrow.svg") 50% 50% no-repeat;
    background-size: 14px 20px;
  }
`;

const Text = styled.span`
  display: inline-block;
  position: relative;
  color: #2e2e2e;
  border-bottom: 1px solid rgba(46, 46, 46, 0.1);
  transition: 0.1s;
`;

export default () => (
  <Container>
    <div className="wrapper">
      <Background>
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-lg-8">
            <Title>Who we are</Title>
            <Description>
              We assist businesses in bringing new products to market: help
              launch, achieve success and growth by providing the best digital
              experiences. We also invest in startups we love and always have a
              special financing options.
            </Description>
            <Link href="/about">
              <Block>
                <Arrow />
                <Text>Read about Umicorn</Text>
              </Block>
            </Link>
          </div>
        </div>
      </Background>
    </div>
  </Container>
);
