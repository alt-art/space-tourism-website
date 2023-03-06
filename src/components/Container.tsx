import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  padding-top: 10rem;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 10rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export default Container;
