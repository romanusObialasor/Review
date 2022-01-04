import React from "react";
import styled from "styled-components";
import { Profile, ChangeIcons2 } from "../Icons";

const Onboarding2 = () => {
  const [image, setImage] = React.useState("");

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const fileRef = URL.createObjectURL(file);
    setImage(fileRef);
    console.log("this is image", image);
  };
  return (
    <Container>
      <Head>Set your profile</Head>
      <ImageHolder>
        {image === "" ? (
          <Overlay>
            <Profile />
          </Overlay>
        ) : (
          <Image src={image} />
        )}
      </ImageHolder>
      <input
        style={{
          display: "none",
        }}
        type="file"
        id="upload"
        onChange={imageUpload}
      />
      <Label htmlFor="upload">set a profile picture</Label>
      <InputHolder>
        <span>set a profile name</span>
        <Input />
      </InputHolder>
      <Change>
        <ChangeIcons2 />
      </Change>
      <Button>Next</Button>
    </Container>
  );
};

export default Onboarding2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const Head = styled.div`
  color: #dcb000;
  margin-top: 30px;
  font-size: 20px;
`;

const ImageHolder = styled.div`
  height: 240px;
  width: 240px;
  border-radius: 150px;
  border: 1px dashed #1492e6;
  margin-top: 20px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 150px;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 150px;
  object-fit: cover;
`;

const Label = styled.label`
  background: #dceffc;
  color: #1492e6;
  font-size: 13px;
  border-radius: 40px;
  padding: 5px 15px;
  margin-top: 20px;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  width: 100%;
  span {
    color: #1492e6;
    font-size: 13px;
  }
`;

const Input = styled.input`
  width: 75%;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: 1px solid #1492e6;
  background: #dceffc;
  margin-top: 10px;
  padding-left: 10px;
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
