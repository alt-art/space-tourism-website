import styled from 'styled-components';

interface StyledTitleProps {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
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
`;

export const SubHeading = styled.h2`
  font-size: 28px;
  color: #fff;
  font-family: 'Barlow Condensed';
  letter-spacing: 4.72px;
  strong {
    color: #ffffff3f;
  }
`;

export default Title;
