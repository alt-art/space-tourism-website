import { useEffect, useState } from 'react';
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
`;

const TextContainer = styled(motion.div)`
  display: flex;
  margin-top: 2rem;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  p {
    width: 444px;
  }
`;

const CrewImage = styled(motion.img)`
  position: fixed;
  bottom: 0;
  right: 10%;
  height: calc(100vh - 10rem);
`;

const RoleText = styled.h2`
  font-size: 32px;
  font-family: 'Bellefair', serif;
  color: #ffffff7f;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
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
`;

function Crew() {
  const crew = data.crew;
  const [activeCrew, setActiveCrew] = useState(0);

  const textAnimate = useAnimationControls();
  const imageAnimate = useAnimationControls();

  useEffect(() => {
    textAnimate.start({
      opacity: 1,
      x: 0,
    });
    imageAnimate.start({
      opacity: 1,
      x: 0,
    });
  }, []);

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
        <TextContainer
          animate={textAnimate}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.2 }}
        >
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
        <CrewImage src={crew[activeCrew].images.webp} alt={crew[activeCrew].name} animate={imageAnimate} initial={{ opacity: 0, x: 1000 }} transition={{ duration: 0.2 }} />
      </ContainerSlide>
    </ContainerColumn>
  );
}

export default Crew;
