import styled from "styled-components";
import Header from "@/components/Header";
import Layout from "../Layout";

const Resume = () => {
  return (
    <Layout>
      <Wrapper>
        <Header />
      </Wrapper>
    </Layout>
  );
};

export default Resume;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/assets/resume_background.png);
  background-size: cover;
`;
