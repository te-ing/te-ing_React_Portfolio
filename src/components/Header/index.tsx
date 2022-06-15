import { FlexCenter } from "@/styles/commonStyles";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Circle />
      <Title>te-ing’s Portfolio</Title>
      <Circle />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(FlexCenter)`
  position: absolute;
  top: 20px;
  width: 100%;
  gap: 20px;
`;
const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border: 2px solid black;
  border-radius: 50%;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-family: "Domine", sans-serif;
`;
