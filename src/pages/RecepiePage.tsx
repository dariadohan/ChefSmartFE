import React from 'react';
import styled from 'styled-components';
import { recipes } from './FavouriteRecipesPage.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin: 10rem 13rem;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  width: 40rem;
  height: 40rem;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  width: 40rem;
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 4rem;
`;

const FoodPage = () => {
  const food = recipes;

  const currentUrl = window.location.pathname;
  const index = Number(currentUrl.slice(-1));

  return (
    <Container>
      <>
        <ImageContainer>
          <Image src={food[index].image} alt={food[index].title} />
        </ImageContainer>
      </>

      <div style={{ flexDirection: 'column' }}>
        <TextContainer>
          <Title>{food[index].title}</Title>
        </TextContainer>

        <TextContainer>
          <p>
            <strong>Preparation Time:</strong> {food[index].preparationTime}
          </p>
        </TextContainer>

        <TextContainer>
          <p style={{ fontSize: '1.3rem' }}>{food[index].description}</p>
        </TextContainer>
      </div>
    </Container>
  );
};

export default FoodPage;
