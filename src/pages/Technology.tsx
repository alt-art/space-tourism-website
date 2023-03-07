import { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import { ContainerCard, ContainerColumn } from '../components/Container';
import Title, { SubHeading } from '../components/Title';
import data from '../utils/data.json';

const Container = styled(ContainerColumn)`
  margin-right: 0;
`;

const ContainerCardStyled = styled(ContainerCard)`
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
  }
`;

const TextContainer = styled(motion.div)`
  width: 490px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  margin-right: 100px;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 60px;
    width: 300px;
    margin: 16px 0;
  }
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.button<NavLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 0.5s ease;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background: #fff;
    h1 {
      color: #000;
    }
  `}

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

interface TechnologyImage {
  portrait: string;
  landscape: string;
}

interface TechnologyImageProps {
  image: TechnologyImage;
}

const TechnologyImage = styled(motion.div)<TechnologyImageProps>`
  position: absolute;
  background-image: url(${(props: { image: TechnologyImage }) => props.image.portrait});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  right: 0;
  width: 450px;
  height: 450px;

  @media (max-width: 1190px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: static;
    display: block;
    width: 100%;
    height: 310px;
    background-image: url(${(props: { image: TechnologyImage }) => props.image.landscape});
  }
`;

function Technology() {
  const technology = data.technology;
  const [active, setActive] = useState(0);

  const animate = useAnimationControls();

  const handleClick = (number: number) => {
    if (number === active) return;
    animate.start({ y: -800, opacity: 0 }, { duration: 0.2 });
    setTimeout(() => {
      setActive(number);
      animate.start({ y: 800, opacity: 0 }, { duration: 0 });
      setTimeout(() => {
        animate.start({ y: 0, opacity: 1 }, { duration: 0.2 });
      }, 200);
    }, 200);
  };

  return (
    <Container>
      <SubHeading>
        <strong>03</strong> SPACE LAUNCH 101
      </SubHeading>
      <ContainerCardStyled>
        <TechnologyImage
          image={technology[active].images}
          animate={animate}
          transition={{ duration: 0.5 }}
        />
        <Nav>
          <NavLink onClick={() => handleClick(0)} active={active === 0}>
            <Title heading="h4">1</Title>
          </NavLink>
          <NavLink onClick={() => handleClick(1)} active={active === 1}>
            <Title heading="h4">2</Title>
          </NavLink>
          <NavLink onClick={() => handleClick(2)} active={active === 2}>
            <Title heading="h4">3</Title>
          </NavLink>
        </Nav>
        <TextContainer animate={animate} transition={{ duration: 0.5 }}>
          <p>THE TERMINOLOGY...</p>
          <Title heading="h3">{technology[active].name.toUpperCase()}</Title>
          <p>{technology[active].description}</p>
        </TextContainer>
      </ContainerCardStyled>
    </Container>
  );
}

export default Technology;
