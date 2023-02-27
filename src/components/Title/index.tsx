import styled from "styled-components";

interface StyledTitleProps {
  heading: "h1" | "h2" | "h3" | "h4" | "h5";
}

const Title = styled.h1<StyledTitleProps>`
  font-size: ${({ heading = "h1" }) => {
    switch (heading) {
      case "h1":
        return "150px";
      case "h2":
        return "100px";
      case "h3":
        return "56px";
      case "h4":
        return "32px";
      case "h5":
        return "28px";
      default:
        return "150px";
    }
  }};
  color: #fff;
  font-family: ${({ heading = "h1" }) => {
    switch (heading) {
      case "h5":
        return "Barlow Condensed";
      default:
        return "Bellefair";
    }
  }};
`;

export default Title;
