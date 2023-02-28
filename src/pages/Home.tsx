import styled from "styled-components";
import Title from "../components/Title";

const HomeStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: calc(100% - (96px + 40px));
`;

const TextContainer = styled.div`
  width: 450px;
`;

const CircleText = styled.div`
  width: 247px;
  height: 247px;
  border-radius: 50%;
  background-color: #fff;
  color: #0b0d17;
  font-family: "Bellefair", serif;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: calc(247px);
    height: calc(247px);
    border-radius: 50%;
    background-color: #ffffff65;
    position: absolute;
  }

  &:hover::before {
    content: "";
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
    <HomeStyles>
      <TextContainer>
        <Title heading="h5">SO, YOU WANT TO TRAVEL TO</Title>
        <Title heading="h1">SPACE</Title>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </TextContainer>
      <CircleText>
        <h1>EXPLORE</h1>
      </CircleText>
    </HomeStyles>
  );
}

export default Home;
