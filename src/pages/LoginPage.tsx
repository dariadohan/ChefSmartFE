import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: mintcream;
`;

const Logo = styled.span`
  font-family: Archivo, serif;
  font-size: 1.75rem;
  line-height: 4rem;
  font-weight: 700;
  color: #1f1f1fff;
  margin-left: 1rem;
`;

const Description = styled.div`
  font-size: 1.2rem;
  text-align: center;
  height: 1rem;
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 6rem;
  left: 44rem;
  width: 100%;
  height: 9rem;
  font-family: Baskervville, serif;
  line-height: 3.5rem;
  font-weight: 700;
  color: #000000ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 10rem;
  left: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextbox = styled.div`
  position: relative;

  .textbox {
    position: relative;
  }

  .textbox input {
    width: 20rem;
    height: 2rem;
    padding-left: 2rem;
    padding-right: 0.75rem;
    font-family: Inter, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    background: transparent;
    border-radius: 0.375rem;
    border-width: 0.0625rem;
    border-color: #bcc1caff;
    border-style: solid;
    outline: none;
  }

  .textbox svg {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: #9095a0ff;
  }

  .textbox input:hover {
    color: #171a1fff;
    border-color: #a7adb7ff;
  }

  .textbox input:focus {
    color: #171a1fff;
    border-color: #9095a0ff;
  }

  .textbox input:disabled {
    color: #171a1fff;
    border-color: #bcc1caff;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 17rem;
  left: 42rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 7rem;
  font-weight: 400;
  color: #323842ff;
`;

const MyForm = () => {
  return (
    <FormContainer>
      <StyledTextbox>
        <div className="textbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8v12h24v-12l-12 8z" />
          </svg>
          <input type="email" placeholder="email" />
        </div>
      </StyledTextbox>
      <StyledTextbox>
        <div className="textbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <input type="password" placeholder="password" />
        </div>
      </StyledTextbox>
      <ButtonContainer>
        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '0.8rem',
            width: '48%',
          }}
          onClick={() => {}}
        >
          LOG IN
        </Button>
        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: '0.8rem',
            width: '48%',
          }}
          onClick={() => {}}
        >
          SIGN UP
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

const LoginPage = () => {
  return (
    <Container>
      <Logo>ChefSmart</Logo>
      <DescriptionContainer>
        <Description>LOG IN</Description>
      </DescriptionContainer>
      <MyForm />
      <Text>Forgot password?</Text>
    </Container>
  );
};

export default LoginPage;
