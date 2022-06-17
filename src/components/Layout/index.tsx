import styled from "@emotion/styled";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
