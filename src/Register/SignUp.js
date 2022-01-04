import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Line>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="420.662"
          height="292.479"
          viewBox="0 0 420.662 292.479"
        >
          <path
            id="Path_19"
            data-name="Path 19"
            d="M-49.221-12.885C6.8,30.251,62.82,25.209,154.693,6.162S408.16,44.115,219.932,109.1C94.446,134.869-8.755,217.165,202.871,263.856c93.469,33.246,168.061,0,168.061,0"
            transform="translate(49.526 13.281)"
            fill="none"
            stroke="#1492e6"
            stroke-width="1"
            stroke-dasharray="10"
            opacity="0.28"
          />
        </svg>
      </Line>
      <Wrapper>
        <Back>
          <Hold>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.455"
              height="12.869"
              viewBox="0 0 12.455 12.869"
            >
              <g
                id="Icon_feather-arrow-left"
                data-name="Icon feather-arrow-left"
                transform="translate(-7 -6.793)"
              >
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M18.955,18H7.5"
                  transform="translate(0 -4.773)"
                  fill="none"
                  stroke="#1492e6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M13.227,18.955,7.5,13.227,13.227,7.5"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#1492e6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </svg>
          </Hold>
          <Img src="/images/logo.png" />
        </Back>
        <Head>
          Create <br />
          Account
        </Head>
        <Inputs>
          <InputHolder>
            <span>Your Email</span>
            <Input placeholder="example@gmail.com" />
          </InputHolder>
          <InputHolder>
            <span>Password</span>
            <Input placeholder="********************" />
          </InputHolder>
        </Inputs>
        <Check>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="17.5"
            viewBox="0 0 17.5 17.5"
          >
            <path
              id="Icon_material-check-box"
              data-name="Icon material-check-box"
              d="M20.056,4.5H6.444A1.944,1.944,0,0,0,4.5,6.444V20.056A1.944,1.944,0,0,0,6.444,22H20.056A1.944,1.944,0,0,0,22,20.056V6.444A1.944,1.944,0,0,0,20.056,4.5Zm-8.75,13.611L6.444,13.25l1.371-1.371,3.49,3.481,7.379-7.379,1.371,1.381Z"
              transform="translate(-4.5 -4.5)"
              fill="#1492e6"
            />
          </svg>
          <span>By clicking you agree to all the terms & conditions</span>
        </Check>
        <Buttons>
          <Button bg>Create account</Button>
          <Button clr>
            <span>
              <Image src="/images/google.png" />
            </span>
            <div>Sign up with Google</div>
          </Button>
        </Buttons>
        <Alt>
          <div>
            Already have an account? <span>Log in</span>
          </div>
        </Alt>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
`;

const Back = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Hold = styled.div`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  background-color: #e9f5fd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img``;

const Head = styled.div`
  margin-top: 25px;
  font-weight: 600;
  font-size: 20px;
`;

const Inputs = styled.div`
  margin-top: 25px;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  span {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  height: 45px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #e9f5fd;
  padding-left: 20px;
  ::placeholder {
    color: #707070;
    font-weight: 500;
    opacity: 0.6;
  }
`;

const Check = styled.div`
  margin-top: 35px;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: #707070;
  align-items: flex-start;
  span {
    /* background: red; */
    margin-top: -3px;
    margin-left: 15px;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const Button = styled.div`
  height: 40px;
  border-radius: 5px;
  background-color: ${({ bg }) => (bg ? "#1492e6" : "transparent")};
  color: ${({ clr }) => (clr ? "#1492e6" : "white")};
  font-size: ${({ clr }) => (clr ? "14px" : null)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 1px solid;
  border-color: ${({ bClr }) => (bClr ? "#1492e6" : null)};
  font-weight: 500;
  span {
    margin-bottom: -6px;
  }
  div {
  }
`;

const Image = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const Alt = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #707070;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  span {
    color: #1492e6;
    cursor: pointer;
  }
`;

const Line = styled.div`
  position: fixed;
  z-index: -1;
  /* width: 30px; */
  top: 45px;
`;
