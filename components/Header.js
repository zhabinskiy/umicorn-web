import styled from "styled-components";
import NextLink from "next/link";
import { Link } from "react-scroll";
import Headroom from "react-headroom";
import { Logo } from "./";

const Container = styled.header`
  width: 100%;
  top: 24px;
  padding: 12px 0;
`;

const Logotype = styled.div`
  display: inline-block;
  position: relative;
  top: 4px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Navigation = styled.nav`
  text-align: right;
`;

const StyledLink = styled.a`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin-left: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLink = ({ href, to, children }) =>
  href ? (
    <NextLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  ) : (
    <Link to={to} smooth={true} offset={50} duration={500}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );

export default () => (
  <Headroom>
    <Container>
      <div class="wrapper">
        <div class="row">
          <div class="col-xs-8">
            <NextLink href="/">
              <Logotype>
                <Logo />
              </Logotype>
            </NextLink>
          </div>
          <div class="col-xs-4">
            <Navigation>
              <NavLink to="work">Work</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </Navigation>
          </div>
        </div>
      </div>
    </Container>
  </Headroom>
);
