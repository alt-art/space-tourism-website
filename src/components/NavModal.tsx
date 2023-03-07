import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/icons/icon-close.svg';
import { ModalContext } from '../context/ModalContext';
import NavLinkModal from './NavLinkModal';

const NavModalStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 254px;
  height: 100%;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.04);
  padding-left: 40px;
  z-index: 1;
`;

const NavModalCloseButton = styled.button`
  background: url(${closeIcon}) no-repeat;
  background-position: center;
  background-size: cover;
  border: none;
  width: 30px;
  height: 30px;
  margin: 40px;
`;

function NavModal() {
  const { setIsOpenedModal } = useContext(ModalContext);
  return (
    <NavModalStyle
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <NavModalCloseButton onClick={() => setIsOpenedModal(false)} />
      <NavLinkModal to="/">
        <strong>00</strong>HOME
      </NavLinkModal>
      <NavLinkModal to="/destination">
        <strong>01</strong>DESTINATION
      </NavLinkModal>
      <NavLinkModal to="/crew">
        <strong>02</strong>CREW
      </NavLinkModal>
      <NavLinkModal to="/technology">
        <strong>03</strong>TECHNOLOGY
      </NavLinkModal>
    </NavModalStyle>
  );
}

export default NavModal;
