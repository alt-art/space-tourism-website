import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

interface NavLinkStyledProps {
  active: boolean;
}

const NavLinkStyled = styled(Link)<NavLinkStyledProps>`
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  ${({ active }) =>
    active &&
    `
    box-shadow: inset 0px -2px 0px #fff;
    `}
  &:hover {
    ${({ active }) =>
      !active &&
      `
      box-shadow: inset 0px -2px 0px #ffffff7f;
      `}
  }
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
