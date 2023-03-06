import { useState } from 'react';
import styled from 'styled-components';
import { ContainerCard, ContainerColumn } from '../components/Container';
import Title, { SubHeading } from '../components/Title';
import data from '../utils/data.json';

const Container = styled(ContainerColumn)`
  margin-right: 0;
`;

const ContainerCardStyled = styled(ContainerCard)`
  justify-content: flex-start;
`;

const TextContainer = styled.div`
  width: 490px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  margin-right: 100px;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.button<NavLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #FFFFFF;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 0.5s ease;
  cursor: pointer;
  ${({ active }) => active && `
    background: #fff;
    h1 {
      color: #000;
    }
  `}
`;

interface TechnologyImage {
  portrait: string;
  landscape: string;
}

interface TechnologyImageProps {
  image: TechnologyImage;
}

const TechnologyImage = styled.div<TechnologyImageProps>`
  position: absolute;
  background-image: url(${(props: { image: TechnologyImage }) => props.image.portrait});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  right: 0;
  width: 450px;
  height: 450px;
`;

function Technology() {
  const technology = data.technology;
  const [active, setActive] = useState(0);

  const handleClick = (number: number) => {
    setActive(number);
  };

  return (
    <Container>
      <SubHeading>
        <strong>03</strong> SPACE LAUNCH 101
      </SubHeading>
      <ContainerCardStyled>
        <Nav>
            <NavLink onClick={() => handleClick(0)} active={active === 0}><Title heading="h4">1</Title></NavLink>
            <NavLink onClick={() => handleClick(1)} active={active === 1}><Title heading="h4">2</Title></NavLink>
            <NavLink onClick={() => handleClick(2)} active={active === 2}><Title heading="h4">3</Title></NavLink>
        </Nav>
        <TextContainer>
          <p>THE TERMINOLOGY</p>
          <Title heading="h3">{technology[active].name.toUpperCase()}</Title>
          <p>
            {technology[active].description}
          </p>
        </TextContainer>
        <TechnologyImage image={technology[active].images} />
      </ContainerCardStyled>
    </Container>
  );
}

export default Technology;