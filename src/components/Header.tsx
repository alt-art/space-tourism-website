import { useEffect, useMemo, useState } from 'react';
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import NavLink from "./NavLink";
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 40px;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const Line = styled.div`
  width: calc(100% - 910px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2515);
  position: relative;
  left: 40px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: calc(100% - 530px);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 830px;
  height: 96px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.04);
  strong {
    margin-right: 8px;
  }

  @media (max-width: 1024px) {
    width: 450px;
  }
`;

const NavModalButton = styled.button`
  background: url(${hamburgerIcon}) no-repeat;
  background-position: center;
  background-size: cover;
  border: none;
  width: 30px;
  height: 30px;
  margin-right: 40px;
`;

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize",() => setWidth(window.innerWidth));
  }, []);
  
  const isMobile = useMemo(() => width < 535, [width]);

  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" />
      <Line />
      {!isMobile ? (
      <Nav>
        <NavLink to="/">
          <strong>00</strong>HOME
        </NavLink>
        <NavLink to="/destination">
          <strong>01</strong>DESTINATION
        </NavLink>
        <NavLink to="/crew">
          <strong>02</strong>CREW
        </NavLink>
        <NavLink to="/technology">
          <strong>03</strong>TECHNOLOGY
        </NavLink>
      </Nav>
      ) : (
        <NavModalButton />
      )}
    </HeaderStyled>
  );
}

export default Header;
