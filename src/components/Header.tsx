import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import NavLink from "./NavLink";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 40px;
  width: 100%;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const Line = styled.div`
  width: calc(100% - 910px);
  height: 1px;
  background-color: #979797;
  position: relative;
  left: 40px;
  z-index: 1;
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
`;

function Header() {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" />
      <Line />
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
    </HeaderStyled>
  );
}

export default Header;
