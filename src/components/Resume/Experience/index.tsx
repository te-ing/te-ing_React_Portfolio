import { EXPERIENCE } from "@/constants/experience";
import { FlexColumn } from "@/styles/commonStyles";
import styled from "styled-components";

const Experience = () => {
  return (
    <Wrapper>
      <Title>EXPERIENCE</Title>
      <Content>
        {EXPERIENCE.reverse().map(({ period, work }, idx) => {
          return (
            <ExperienceWrapper key={idx}>
              <Period>{period}</Period>
              <Work>{work}</Work>
            </ExperienceWrapper>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled(FlexColumn)`
  width: 35vw;
  max-width: 500px;
  height: 400px;
  gap: 40px;
`;

const Title = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

const Content = styled(FlexColumn)`
  gap: 20px;
`;

const ExperienceWrapper = styled(FlexColumn)`
  gap: 4px;
`;

const Period = styled.p`
  font-size: 1.2rem;
`;

const Work = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
`;
