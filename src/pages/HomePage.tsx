import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  max-width: 600px;
  text-align: center;
`;

const HomePage = () => {
    return (
        <HomePageContainer>
            <Title>Welcome to My Application</Title>
            <Description>
                This is the home page of the app. Here you can find an overview of features,
                quick navigation, or any important information about the app.
            </Description>
        </HomePageContainer>
    );
};

export default HomePage;

