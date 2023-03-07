import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import NavModal from './components/NavModal';
import { ModalContext, ModalContextProvider } from './context/ModalContext';

function App() {
  const location = useLocation();

  const [bodyElement, setBodyElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBodyElement(document.querySelector('body'));
  }, []);

  useEffect(() => {
    if (bodyElement) {
      bodyElement.className =
        location.pathname === '/' ? 'home' : location.pathname.split('/')[1];
    }
  }, [location, bodyElement]);

  return (
    <>
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
    </>
  );
}

export default App;
