import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface NavLinkStyledProps {
  active: boolean;
}

const NavLinkStyled = styled(Link)<NavLinkStyledProps>`
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  ${({ active }) =>
    active &&
    `
        box-shadow: inset 0px -2px 0px #fff;
    `}
`;

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const active =
    (location.pathname.startsWith(to) && !(to.length === 1)) ||
    location.pathname === to;

  return (
    <NavLinkStyled to={to} active={active}>
      {children}
    </NavLinkStyled>
  );
}

export default NavLink;
