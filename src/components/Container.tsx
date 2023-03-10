import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100% - 80px);
  padding-top: 160px;

  @media (max-width: 480px) {
    padding-top: 130px;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0 160px;

  @media (max-width: 1300px) {
    margin: 0 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export default Container;
