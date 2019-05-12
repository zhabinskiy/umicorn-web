import styled from "styled-components";
import NextLink from "next/link";
import Parallax from "react-rellax";
import { Type } from "../";

const Container = styled.section`
  position: relative;
  top: -180px;
  margin-bottom: 360px;
`;

const Block = styled.div`
  position: relative;
  cursor: pointer;
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}

  &:hover {
    img {
      transform: scale(1);
    }
  }
`;

const ExternalLink = styled.a`
  color: #2e2e2e;
`;

const Cover = styled.img`
  width: 441px;
  transform: scale(0.97);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Title = styled(Type.H3)`
  padding: 24px 6px 12px;
`;

const Tags = styled.span`
  display: block;
  width: 80%;
  padding: 0 6px;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #919ead;
`;

const Dribbble = styled.a`
  display: block;
  width: 89%;
  margin-top: 40px;
  padding: 42px 0;
  text-align: center;
  overflow: hidden;

  &:hover {
    a {
      color: #fff;
      border-color: #ff4081;
    }

    div {
      transform: scale(14);
    }

    div:before {
      transform: scale(0.07);
      opacity: 1;
    }

    div:after {
      transform: scale(0.07);
      background: url("/static/img/dribbble-pink.svg") 50% 50% no-repeat;
    }
  }
`;

const Ball = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  margin: 0 auto 32px;
  border-radius: 100%;
  background: #ff4081;
  transition: 0.4s cubic-bezier(0.86, 0, 0.07, 1);

  &:before,
  &:after {
    display: block;
    position: absolute;
    content: "";
    width: 36px;
    height: 36px;
    border-radius: 100%;
    transition: 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:before {
    background: #fff;
    transform: scale(1);
    opacity: 0;
    z-index: -1;
  }

  &:after {
    background: url("/static/img/dribbble.svg") 50% 50% no-repeat;
    background-size: 18px 18px;
  }
`;

const Link = styled.a`
  display: inline-block;
  position: relative;
  color: #2e2e2e;
  border-bottom: 1px solid rgba(46, 46, 46, 0.1);
  transition: 0.4s cubic-bezier(0.86, 0, 0.07, 1);
`;

const Card = ({ href, to, png, gif, name, tags, marginTop }) =>
  href ? (
    <Parallax>
      <ExternalLink href={href} target="_blank">
        <Block marginTop={marginTop}>
          <Cover
            src={
              png
                ? `/static/img/work/${png}@2x.png`
                : gif && `/static/img/work/${gif}@2x.gif`
            }
          />
          <Title>{name}</Title>
          <Tags>{tags}</Tags>
        </Block>
      </ExternalLink>
    </Parallax>
  ) : (
    <Parallax>
      <NextLink href={to}>
        <Block marginTop={marginTop}>
          <Cover
            src={
              png
                ? `/static/img/work/${png}@2x.png`
                : gif && `/static/img/work/${gif}@2x.gif`
            }
          />
          <Title>{name}</Title>
          <Tags>{tags}</Tags>
        </Block>
      </NextLink>
    </Parallax>
  );
export default () => (
  <Container id="work">
    <div class="wrapper">
      <div class="row">
        <div class="col-lg-offset-1 col-lg-5">
          <Card
            href="https://actscope.com"
            png="actscope"
            name="Actscope"
            tags="UX Research, CJM, Web & iOS Applications"
          />
          <Card
            href="https://dribbble.com/shots/4960309-Twitch-Mobile-Clash-Royale"
            marginTop="160px"
            gif="twitch"
            name="Twitch Mobile"
            tags="Creative Concept, Interaction Design, Motion Design"
          />
          <Card
            href="https://dribbble.com/shots/4967424-Ryanair"
            marginTop="160px"
            png="ryanair"
            name="Ryanair"
            tags="UX Research, Creative Concept"
          />
        </div>
        <div class="col-lg-offset-1 col-lg-5">
          <Card
            href="https://dribbble.com/shots/4958836-Sherwood-s-Tennis-Courts-Invitation"
            marginTop="205px"
            png="sherwood"
            name="Sherwood's Tennis Courts"
            tags="Creative Concept, Interaction Design, Motion Design"
          />
          <Card
            href="https://arbidex.io"
            marginTop="160px"
            png="arbidex"
            name="Arbidex (Trading Platform)"
            tags="UX Research, Prototyping, Web Application"
          />
          <Parallax>
            <Dribbble href="https://dribbble.com/umicorn" target="_blank">
              <Ball />
              <Link>See more works on Dribbble</Link>
            </Dribbble>
          </Parallax>
        </div>
      </div>
    </div>
  </Container>
);
