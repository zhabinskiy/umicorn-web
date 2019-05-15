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
  display: none;

  @media (min-width: 576px) {
    display: block;
    text-align: right;
  }
`;

const StyledLink = styled.span`
  color: ${props => (props.color ? props.color : "#2e2e2e")};
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

const NavLink = ({ color, href, to, children }) =>
  href ? (
    <NextLink href={href}>
      <StyledLink color={color}>{children}</StyledLink>
    </NextLink>
  ) : (
    <Link to={to} smooth={true} offset={50} duration={500}>
      <StyledLink color={color}>{children}</StyledLink>
    </Link>
  );

export default ({ color, isHome }) => (
  <Headroom>
    <Container>
      <div className="wrapper">
        <div className="row">
          <div className="col-xs-5">
            <NextLink href="/">
              <Logotype>
                <Logo color={color} />
              </Logotype>
            </NextLink>
          </div>
          <div className="col-xs-7">
            <Navigation isHome={isHome}>
              {isHome ? (
                <NavLink color={color} to="work">
                  Work
                </NavLink>
              ) : (
                <NavLink color={color} href="/#work">
                  Work
                </NavLink>
              )}
              <NavLink color={color} href="/about">
                About
              </NavLink>
              {isHome ? (
                <NavLink color={color} to="contact">
                  Contact
                </NavLink>
              ) : (
                <NavLink color={color} href="/#contact">
                  Contact
                </NavLink>
              )}
            </Navigation>
          </div>
        </div>
      </div>
    </Container>
  </Headroom>
);
