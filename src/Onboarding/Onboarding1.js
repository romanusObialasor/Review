import React from "react";
import styled from "styled-components";
import { ChangeIcons } from "../Icons";

const Onboarding1 = () => {
  return (
    <Container>
      <Undraw src="/images/1.png" />
      <Head>Welcome</Head>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et.
      </Text>
      <Change>
        <ChangeIcons />
      </Change>
      <Button>Get started</Button>
    </Container>
  );
};

export default Onboarding1;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Undraw = styled.img`
  width: 100%;
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 25px;
  margin-top: 20px;
`;

const Text = styled.div`
  text-align: center;
  color: #707070;
  margin-top: 10px;
`;

const Change = styled.div`
  margin-top: 20px;
`;

const Button = styled.div`
  background: #1492e6;
  height: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  border-radius: 6px;
`;
