import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerCard, ContainerColumn } from '../components/Container';
import NavLink from '../components/NavLink';
import Title, { SubHeading } from '../components/Title';

const PlanetStyles = styled.img`
  width: 445px;
  height: 445px;
  margin-right: 50px;

  @media (max-height: 700px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 960px) {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const TextContainer = styled.div`
  width: 445px;
  height: 344px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 70px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 250px;
  a {
    padding: 16px 0;
  }
`;

const Line = styled.hr`
  color: #383b4b;
  margin: 32px 0;
`;

const Analytics = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AnalyticsLabel = styled.p`
  font-size: 14px;
  color: #d0d6f9;
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
    <ContainerColumn>
      <SubHeading>
        <strong>01</strong> PICK YOUR DESTINATION
      </SubHeading>
      <ContainerCard>
        <PlanetStyles src={`/${planet.images.webp}`} alt={planet.name} />
        <TextContainer>
          <Nav>
            <NavLink to="/destination/moon">MOON</NavLink>
            <NavLink to="/destination/mars">MARS</NavLink>
            <NavLink to="/destination/europa">EUROPA</NavLink>
            <NavLink to="/destination/titan">TITAN</NavLink>
          </Nav>
          <Title heading="h2">{planet.name.toUpperCase()}</Title>
          <p>{planet.description}</p>
          <Line />
          <Analytics>
            <AnalyticsContainer>
              <AnalyticsLabel>AVG. DISTANCE</AnalyticsLabel>
              <Title heading="h4">{planet.distance.toUpperCase()}</Title>
            </AnalyticsContainer>
            <AnalyticsContainer>
              <AnalyticsLabel>EST. TRAVEL TIME</AnalyticsLabel>
              <Title heading="h4">{planet.travel.toUpperCase()}</Title>
            </AnalyticsContainer>
          </Analytics>
        </TextContainer>
      </ContainerCard>
    </ContainerColumn>
  );
}

export default Destination;
