import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';

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
      <Header />
      <Outlet />
    </AppStyles>
  );
}

export default App;
