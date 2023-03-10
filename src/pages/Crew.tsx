import { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import { ContainerColumn } from '../components/Container';
import Title, { SubHeading } from '../components/Title';
import data from '../utils/data.json';

const ContainerSlide = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 160px;

  @media (max-width: 1300px) {
    margin: 0 80px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  justify-content: space-between;
  p {
    width: 444px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    p {
      width: 320px;
    }
  }
`;

const CrewImage = styled(motion.img)`
  position: fixed;
  bottom: 0;
  right: 10%;
  object-fit: contain;
  height: calc(100vh - 160px);
  @media (max-width: 1360px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: static;
    display: block;
    height: 400px;
    width: 100%;
    border-bottom: 2px solid #383B4B;
    margin-top: 32px;
  }

  @media (max-width: 480px) {
    height: 223px;
    width: 100%;
  }
`;

const RoleText = styled.h2`
  font-size: 32px;
  font-family: 'Bellefair', serif;
  color: #ffffff7f;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  width: 132px;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.button<NavLinkProps>`
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#fff' : '#979797')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;

function Crew() {
  const crew = data.crew;
  const [activeCrew, setActiveCrew] = useState(0);

  const textAnimate = useAnimationControls();
  const imageAnimate = useAnimationControls();

  function handleActiveCrew(number: number) {
    textAnimate.start({
      opacity: 0,
      x: -1000,
    });
    imageAnimate.start({
      opacity: 0,
      x: 1000,
    });

    setTimeout(() => {
      setActiveCrew(number);
      textAnimate.start({
        opacity: 1,
        x: 0,
      });
      imageAnimate.start({
        opacity: 1,
        x: 0,
      });
    }, 300);
  }

  return (
    <ContainerColumn>
      <SubHeading>
        <strong>02</strong> MEET YOUR CREW
      </SubHeading>
      <ContainerSlide>
        <CrewImage
          src={crew[activeCrew].images.webp}
          alt={crew[activeCrew].name}
          animate={imageAnimate}
          transition={{ duration: 0.2 }}
        />
        <TextContainer animate={textAnimate} transition={{ duration: 0.2 }}>
          <RoleText>{crew[activeCrew].role.toUpperCase()}</RoleText>
          <Title heading="h3">{crew[activeCrew].name.toUpperCase()}</Title>
          <p>{crew[activeCrew].bio}</p>
        </TextContainer>
        <Nav>
          <NavLink onClick={() => handleActiveCrew(0)} active={activeCrew === 0} />
          <NavLink onClick={() => handleActiveCrew(1)} active={activeCrew === 1} />
          <NavLink onClick={() => handleActiveCrew(2)} active={activeCrew === 2} />
          <NavLink onClick={() => handleActiveCrew(3)} active={activeCrew === 3} />
        </Nav>
      </ContainerSlide>
    </ContainerColumn>
  );
}

export default Crew;
