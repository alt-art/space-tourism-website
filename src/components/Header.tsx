import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import NavLink from "./NavLink";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px;
  padding: 24px;
  position: fixed;
  width: 100%;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const Line = styled.div`
  width: 473px;
  height: 1px;
  background-color: #979797;
  position: absolute;
  left: calc(48px + 24px + 24px);
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
      <Line />
    </HeaderStyled>
  );
}

export default Header;
