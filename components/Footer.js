import styled from "styled-components";

const Container = styled.footer`
  margin-bottom: 140px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const Mail = styled.a`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 62px;
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
`;

const Links = styled.div`
  display: flex;
  position: relative;
  margin-top: 120px;
  z-index: 1;
`;

const Link = styled.a`
  color: #2e2e2e;
  border-bottom: 1px solid rgba(46, 46, 46, 0.1);
  margin-right: 40px;

  &:hover {
    color: #ff4081;
    border-color: transparent;
  }
`;

const Unicorn = styled.img`
  position: relative;
  left: -200px;
`;

export default () => (
  <Container id="contact">
    <div class="wrapper">
      <div class="row">
        <div class="col-lg-offset-1 col-lg-5">
          <Title>Chat with us</Title>
          <Mail href="mailto:hello@umicorn.io">
            hello<span>@</span>umicorn.io
          </Mail>
          <Links>
            <Link href="https://dribbble.com/umicorn" target="_blank">
              Dribbble
            </Link>
            <Link href="https://instagram.com/umicorn" target="_blank">
              Instagram
            </Link>
            <Link href="https://twitter.com/umicorn" target="_blank">
              Twitter
            </Link>
          </Links>
        </div>
        <div class="col-lg-offset-1 col-lg-5">
          <Unicorn src="https://media1.tenor.com/images/89d6eba3a5d918f56c8a4af09266a524/tenor.gif?itemid=9797934" />
        </div>
      </div>
    </div>
  </Container>
);
