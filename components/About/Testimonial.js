import styled from "styled-components";
import { Type } from "../";

const Container = styled.section`
  margin: 140px 0;

  @media (min-width: 576px) {
    margin: 200px 0;
  }
`;

const Userpic = styled.img`
  width: 66px;
  height: 66px;
  margin-bottom: 40px;
`;

const Testimonial = styled(Type.H3)`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  @media (min-width: 576px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const Author = styled.p`
  margin-top: 32px;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #919ead;
`;

export default () => (
  <Container>
    <div className="wrapper">
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-10 col-md-8">
          <Userpic src="/static/img/reviewAuthor@2x.png" />
          <Testimonial>
            “Guys from Umicorn helped me to launch my new product to the market
            and that was an incredible experience. They've joined me on early
            stage and shipped Web and Mobile applications blastly fast.”
          </Testimonial>
          <Author>Pavel Malay, CEO @ ZipZapMac</Author>
        </div>
      </div>
    </div>
  </Container>
);
