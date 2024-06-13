import React from 'react';
import styled from 'styled-components';
import backgroundImage from './images/leftimage_page-0001.jpg';
 // Adjust the path according to your project structure
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
   
    <Container>
      <ImageContainer>
        <StyledImage src={backgroundImage} alt="Background" />
      </ImageContainer>
      <FormContainer>
        <Logo>EXTRAMUS</Logo>
        <Title>HR Platform</Title>
        <Subtitle>Reset Password</Subtitle>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button>Reset</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #34a853;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #3c4043;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-family: 'Arial', sans-serif;
  color: #5f6368;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #155bb5;
  }
`;

export default App;
