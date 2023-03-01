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
      case 'h5':
        return `font-size: 24px;
                letter-spacing: 4.72px;`;
      default:
        return 'font-size: 150px';
    }
  }};
  color: #fff;
  font-family: ${({ heading = 'h1' }) => {
    switch (heading) {
      case 'h5':
        return 'Barlow Condensed';
      default:
        return 'Bellefair';
    }
  }};
`;

export default Title;
