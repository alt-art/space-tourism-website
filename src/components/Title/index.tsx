import styled from 'styled-components';

interface StyledTitleProps {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Title = styled.h1<StyledTitleProps>`
  ${({ heading = 'h1' }) => {
    switch (heading) {
      case 'h1':
        return 'font-size: 150px';
      case 'h2':
        return 'font-size: 100px';
      case 'h3':
        return 'font-size: 56px';
      case 'h4':
        return 'font-size: 32px';
      default:
        return 'font-size: 150px';
    }
  }};
  color: #fff;
  font-family: 'Bellefair';

  @media (max-width: 768px) {
    ${({ heading = 'h1' }) => {
      switch (heading) {
        case 'h2':
          return 'font-size: 80px';
        case 'h3':
          return 'font-size: 40px';
        case 'h4':
          return 'font-size: 28px';
        default:
          return 'font-size: 150px';
      }
    }};
  }

  @media (max-width: 480px) {
    ${({ heading = 'h1' }) => {
      switch (heading) {
        case 'h1':
          return 'font-size: 80px';
        case 'h2':
          return 'font-size: 60px';
        case 'h3':
          return 'font-size: 32px';
        case 'h4':
          return 'font-size: 24px';
        default:
          return 'font-size: 80px';
      }
    }};
  }
`;

export const SubHeading = styled.h2`
  font-size: 28px;
  color: #fff;
  font-family: 'Barlow Condensed';
  letter-spacing: 4.72px;
  margin-left: 160px;
  strong {
    color: #ffffff3f;
  }

  @media (max-width: 1300px) {
    margin-left: 80px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default Title;
