import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import NavLink from '../components/NavLink';
import Title, { SubHeading } from '../components/Title';

const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 10rem;
  p {
    line-height: 32px;
    font-size: 20px;
  }
`;

const PlanetStyles = styled.img`
  width: 445px;
  height: 445px;
`;

const PlanetsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4rem 0;
`;

const TextContainer = styled.div`
  width: 445px;
  height: 344px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 34px;
  width: 250px;
`;

const Line = styled.hr`
  color: #383B4B;
  margin: 2rem 0;
`;

const Analytics = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AnalyticsLabel = styled.p`
  font-size: 14px;
  color: #D0D6F9;
`;

const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface PlanetImages {
  png: string;
  webp: string;
}

interface Planet {
  name: string;
  images: PlanetImages;
  description: string;
  distance: string;
  travel: string;
}

function Destination() {
  const planet = useLoaderData() as Planet;

  return (
    <Container>
      <ContainerBase>
        <SubHeading>
          <strong>01</strong> PICK YOUR DESTINATION
        </SubHeading>
        <PlanetsContainer>
          <PlanetStyles src={`/${planet.images.webp}`} alt={planet.name} />
          <TextContainer>
            <Nav>
              <NavLink to="/destination/moon">MOON</NavLink>
              <NavLink to="/destination/mars">MARS</NavLink>
              <NavLink to="/destination/europa">EUROPA</NavLink>
              <NavLink to="/destination/titan">TITAN</NavLink>
            </Nav>
            <Title heading='h2'>{planet.name.toUpperCase()}</Title>
            <p>{planet.description}</p>
            <Line />
            <Analytics>
              <AnalyticsContainer>
                <AnalyticsLabel>AVG. DISTANCE</AnalyticsLabel>
                <Title heading='h4'>{planet.distance.toUpperCase()}</Title>
              </AnalyticsContainer>
              <AnalyticsContainer>
                <AnalyticsLabel>EST. TRAVEL TIME</AnalyticsLabel>
                <Title heading='h4'>{planet.travel.toUpperCase()}</Title>
              </AnalyticsContainer>
            </Analytics>
          </TextContainer>
        </PlanetsContainer>
      </ContainerBase>
    </Container>
  );
}

export default Destination;
