import styled from 'styled-components';
import Title, { SubHeading } from '../components/Title';

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

const TextContainer = styled.div`
  width: 450px;
  p {
    line-height: 32px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CircleText = styled.div`
  width: 247px;
  height: 247px;
  border-radius: 50%;
  background-color: #fff;
  color: #0b0d17;
  font-family: 'Bellefair', serif;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: calc(247px);
    height: calc(247px);
    border-radius: 50%;
    background-color: #ffffff65;
    position: absolute;
  }

  &:hover::before {
    content: '';
    width: calc(247px);
    height: calc(247px);
    border-radius: 50%;
    background-color: #ffffff65;
    position: absolute;
    animation: circle 2s ease-in-out infinite reverse;
  }

  @keyframes circle {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
`;

function Home() {
  return (
    <Container>
      <TextContainer>
        <SubHeading>SO, YOU WANT TO TRAVEL TO</SubHeading>
        <Title heading="h1">SPACE</Title>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </TextContainer>
      <CircleText>
        <h1>EXPLORE</h1>
      </CircleText>
    </Container>
  );
}

export default Home;
