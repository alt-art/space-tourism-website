import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

interface NavLinkStyledProps {
  active: boolean;
}

const NavLinkModalStyled = styled.button<NavLinkStyledProps>`
  display: flex;
  background: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  margin: 20px 0;
  font-size: 16px;
  transition: box-shadow 0.2s ease-in-out;
  ${({ active }) =>
    active &&
    `
    box-shadow: inset -4px 0px 0px #fff;
    `}
  &:hover {
    ${({ active }) =>
      !active &&
      `
      box-shadow: inset -4px 0px 0px #ffffff7f;
      `}
  }

  strong {
    display: block;
    width: 20px;
    margin-right: 10px;
  }
`;

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLinkModal({ to, children }: NavLinkProps) {
  const { setIsOpenedModal } = useContext(ModalContext);
  const location = useLocation();
  const navigate = useNavigate();
  const active =
    (location.pathname.startsWith(to) && !(to.length === 1)) ||
    location.pathname === to;

  function handleClick() {
    navigate(to);
    setIsOpenedModal(false);
  }

  return (
    <NavLinkModalStyled active={active} onClick={handleClick}>
      {children}
    </NavLinkModalStyled>
  );
}

export default NavLinkModal;
