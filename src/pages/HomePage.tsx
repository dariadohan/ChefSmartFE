import styled from 'styled-components';
import React from 'react';
import NavBar from "../components/NavBar.tsx";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
    color: #000000FF;
    position: absolute;
    top: 180px;
    left: 97px;
    font-family: Archivo;
`

const Description = styled.div`
    font-size: 1.25rem;
    text-align: left;
    height: 1.5rem;
`;

const DescriptionContainer = styled.div`
    position: absolute;
    top: 270px;
    left: 120px;
    width: 100%;
    height: 14.4rem;
    font-family: Baskervville,serif;
    line-height: 48px;
    font-weight: 700;
    color: #000000FF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: -1rem;
`

const list = ['Your ingredients, our recipes.','Saving food one meal at a time.']
const HomePage = () => {
    return (
        <>
            <NavBar/>
            <HomePageContainer>
                <TitleContainer>
                    <Title>
                        Welcome!
                    </Title>
                </TitleContainer>
                <DescriptionContainer>
                    {list.map(listItem => (
                        <Description>
                            {listItem}
                        </Description>
                    ))
                    }
                </DescriptionContainer>
            </HomePageContainer>
        </>
    );
};

export default HomePage;

