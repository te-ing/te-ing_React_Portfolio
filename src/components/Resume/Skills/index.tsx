import { SKILLS, SUBSKILLS } from "@/constants/skills";
import { FlexColumn } from "@/styles/commonStyles";
import styled from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <Content>
        <ContentTitle>SKILLS</ContentTitle>
        {SKILLS.reverse().map(({ skill, content, image }, idx) => {
          return (
            <SkillsWrapper key={idx}>
              <SkillsImage src={image} />
              <SkillsTextWrapper>
                <SkillTitle>{skill}</SkillTitle>
                <SkillContent>{content}</SkillContent>
              </SkillsTextWrapper>
            </SkillsWrapper>
          );
        })}
        <SubSkillTitle>그 외 사용기술</SubSkillTitle>
        <SubSkillsWrapper>
          {SUBSKILLS.map(({ skill, image }, idx) => {
            return <SubSkillsImage key={idx} src={image} />;
          })}
        </SubSkillsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled(FlexColumn)`
  width: 35vw;
  max-width: 500px;
  height: 400px;
  gap: 40px;
`;

const ContentTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

const Content = styled(FlexColumn)`
  gap: 30px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SkillsImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const SkillsTextWrapper = styled(FlexColumn)`
  gap: 4px;
`;

const SkillTitle = styled.p`
  font-size: 1.3rem;
`;

const SkillContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
`;

const SubSkillTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 20px;
`;

const SubSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SubSkillsImage = styled.img`
  display: flex;
  height: 3.5rem;
`;
