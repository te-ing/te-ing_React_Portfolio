import styled from "styled-components";
import Header from "@/components/Header";
import Layout from "../Layout";
import { FlexCenter, FlexColumn } from "@/styles/commonStyles";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <Layout>
      <Wrapper>
        <Header />
        <InfoWrapper>
          <InfoImage src="/assets/resume/resume_image.jpg" />
          <InfoContents>
            <TitleWrapper>
              <Title>프론트엔드 개발자</Title>
              <BoldTitle>김태중</BoldTitle>
            </TitleWrapper>
            <ContactWrapper>
              <Contact>e-mail : hi2177@naver.com</Contact>
              <Contact>
                github :{" "}
                <ContactLink href="https://github.com/te-ing">
                  https://github.com/te-ing
                </ContactLink>
              </Contact>
              <Contact>
                blog :{" "}
                <ContactLink href="https://velog.io/@te-ing">
                  https://velog.io/@te-ing
                </ContactLink>
              </Contact>
            </ContactWrapper>
          </InfoContents>
        </InfoWrapper>
        <Contents>
          <Experience />
          <Skills />
        </Contents>
      </Wrapper>
    </Layout>
  );
};

export default Resume;

const Wrapper = styled(FlexColumn)`
  justify-content: center;
  height: 100vh;
  overflow: auto;
  padding-bottom: 40px;
  gap: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/assets/resume/resume_background.png);
  background-size: cover;
  color: white;
`;

const InfoWrapper = styled(FlexCenter)`
  width: 100%;
  gap: 30px;
`;

const InfoContents = styled(FlexColumn)`
  gap: 40px;
`;

const InfoImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
const TitleWrapper = styled.div`
  border-left: solid 5px white;
  padding-left: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const BoldTitle = styled(Title)`
  font-weight: 800;
  margin-top: 10px;
`;

const ContactWrapper = styled(FlexColumn)`
  gap: 10px;
  margin-left: 20px;
`;

const Contact = styled.div`
  font-size: 1.3rem;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Contents = styled(FlexCenter)`
  gap: 40px;
`;
