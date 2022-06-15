import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Layout from "../Layout";
import { FlexCenter } from "@/styles/commonStyles";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        {/* <img src="assets/home_background.png" alt="home_background" /> */}
        <Header />
        <Intro>
          <Title>
            프론트엔드 개발자<Bold>김태중</Bold>
          </Title>
          <Content>
            광고회사에서 더 성장하고 인정받고 싶은 마음에 <br /> 개발을
            시작했습니다.
            <br /> <br />
            항상 부족함을 느끼며 안주하지 않습니다.
            <br /> <br />
            개발을 사랑하는 사람들과 이야기하며 개발에 대한 태도를 배우는 것을
            좋아합니다.
          </Content>
        </Intro>
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(/assets/home_background.png);
  background-size: cover;
`;

const Intro = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 80px;
  margin-top: -5vh;
  margin-left: -5vw;
`;
const Title = styled.h1`
  display: flex;
  gap: 1rem;
  padding-left: 20px;
  border-left: solid white 5px;
  color: white;
  font-size: 3rem;
`;

const Content = styled.p`
  display: flex;
  width: 500px;
  margin-left: -40px;
  color: white;
  font-size: 1.3rem;
  line-height: 1.2;
`;

const Bold = styled.div`
  font-weight: 800;
`;

const StressBold = styled(Bold)`
  font-size: 1.5rem;
`;
