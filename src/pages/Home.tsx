import { motion, useAnimationControls } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  font-family: 'Barlow Condensed';
  letter-spacing: 4.72px;

  @media (max-width: 480px) {
    font-size: 16px;
    letter-spacing: 2.72px;
  }
`;

const TextContainer = styled.div`
  width: 450px;
  p {
    line-height: 32px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 300px;
    p {
      font-size: 16px;
    }
  }
`;

const CircleText = styled(motion.div)`
  width: 247px;
  height: 247px;
  border-radius: 50%;
  background-color: #fff;
  color: #0b0d17;
  font-family: 'Bellefair', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;

    h1 {
      font-size: 20px;
    }
  }
`;

function Home() {
  const navigate = useNavigate();
  const animateCircle = useAnimationControls();

  function handleCircleClick() {
    animateCircle.start({
      scale: 200,
      backgroundColor: '#0b0d17',
      transition: {
        duration: 1,
      },
    });
    setTimeout(() => {
      navigate('/destination/moon');
    }, 1300);
  }

  function handleCircleHover() {
    animateCircle.start({
      boxShadow: '0px 0px 0px 40px #ffffff68',
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }

  function handleCircleHoverEnd() {
    animateCircle.start({
      boxShadow: '0px 0px 0px 0px #fff',
      transition: {
        duration: 0.5,
      },
    });
  }

  return (
    <Container>
      <TextContainer>
        <TopTitle>SO, YOU WANT TO TRAVEL TO</TopTitle>
        <Title heading="h1">SPACE</Title>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </TextContainer>
      <CircleText
        animate={animateCircle}
        onClick={handleCircleClick}
        onHoverStart={handleCircleHover}
        onHoverEnd={handleCircleHoverEnd}
      >
        <h1>EXPLORE</h1>
      </CircleText>
    </Container>
  );
}

export default Home;
