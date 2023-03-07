import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './components/Container';
import Header from './components/Header';
import NavModal from './components/NavModal';
import { ModalContext, ModalContextProvider } from './context/ModalContext';

interface AppStylesProps {
  location: string;
}

const AppStyles = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/background/${(props: AppStylesProps) => props.location}/desktop.jpg');
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    background-image: url('/background/${(props: AppStylesProps) => props.location}/tablet.jpg');
  }
  @media (max-width: 375px) {
    background-image: url('/background/${(props: AppStylesProps) => props.location}/mobile.jpg');
  }
`;

function App() {
  const location = useLocation();
  return (
    <AppStyles
      location={location.pathname === '/' ? 'home' : location.pathname.split('/')[1]}
    >
      <ModalContextProvider>
        <Header />
        <ModalContext.Consumer>
          {({ isOpenedModal }) => (
            <AnimatePresence>{isOpenedModal && <NavModal />}</AnimatePresence>
          )}
        </ModalContext.Consumer>
        <Container>
          <Outlet />
        </Container>
      </ModalContextProvider>
    </AppStyles>
  );
}

export default App;
