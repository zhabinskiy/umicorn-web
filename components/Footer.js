import styled from "styled-components";

const Container = styled.footer`
  margin: 100px 0 64px;

  @media (min-width: 576px) {
    margin: 170px 0 140px;
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const Mail = styled.a`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #2e2e2e;
  border-bottom: 1px solid rgba(46, 46, 46, 0.1);
  transition: 0.1s;
  z-index: 1;

  & span {
    font-family: "Graphik LCG", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &:hover {
    color: #ff4081;
    border-color: transparent;
  }

  @media (min-width: 576px) {
    font-size: 48px;
    line-height: 62px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-top: 64px;
  z-index: 1;

  @media (min-width: 576px) {
    margin-top: 120px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Link = styled.a`
  color: #2e2e2e;
  border-bottom: 1px solid rgba(46, 46, 46, 0.1);
  margin-bottom: 16px;
  margin-right: 40px;

  &:hover {
    color: #ff4081;
    border-color: transparent;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

const Unicorn = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;
    left: -200px;
  }
`;

export default () => (
  <Container id="contact">
    <div className="wrapper">
      <div className="row center-xs start-md">
        <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-5">
          <Title>Chat with us</Title>
          <Mail href="mailto:hello@umicorn.io">
            hello<span>@</span>umicorn.io
          </Mail>
          <Links>
            <Link href="https://dribbble.com/umicorn" target="_blank">
              Follow us on Dribbble
            </Link>
            {/* <Link href="https://instagram.com/umicorn" target="_blank">
              Instagram
            </Link>
            <Link href="https://twitter.com/umicorn" target="_blank">
              Twitter
            </Link> */}
          </Links>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-5">
          <Unicorn src="https://media1.tenor.com/images/89d6eba3a5d918f56c8a4af09266a524/tenor.gif?itemid=9797934" />
        </div>
      </div>
    </div>
  </Container>
);
