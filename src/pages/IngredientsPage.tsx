import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.tsx';

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  font-family: Archivo, serif;
  margin-left: 3rem;
  margin-top: 5rem;
  font-style: bold;
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const IngredientCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 12.5rem;
`;

const IngredientImage = styled.img`
  width: 100%;
  height: 8rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const IngredientName = styled.h2`
  font-size: 1.125rem; /* 18px equivalent */
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const AddButton = styled.button`
  background-color: #333333;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.25rem; /* 10px 20px equivalent */
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;

const IngredientsPage = () => {
  const ingredients = [
    {
      name: 'Basil',
      image: '/images/basil.png',
    },
    {
      name: 'Tomato',
      image: '/images/tomatoes.png',
    },
    {
      name: 'Garlic',
      image: '/images/garlic.png',
    },
    {
      name: 'Olive Oil',
      image: '/images/oliveoil.png',
    },
    {
      name: 'Rice',
      image: '/images/rice.png',
    },
    {
      name: 'Beef',
      image: '/images/beef.jpg',
    },
    {
      name: 'Chicken Breast',
      image: '/images/breast.jpg',
    },
    {
      name: 'Carrot',
      image: '/images/carrot.jpeg',
    },
    {
      name: 'Celery',
      image: '/images/celery.jpg',
    },
    {
      name: 'Onion',
      image: '/images/onion.webp',
    },
  ];

  return (
    <>
      <NavBar />
      <Title>Choose Your Ingredients:</Title>
      <IngredientsContainer>
        {ingredients.map((ingredient, index) => (
          <IngredientCard key={index}>
            <IngredientImage src={ingredient.image} alt={ingredient.name} />
            <IngredientName>{ingredient.name}</IngredientName>
            <AddButton>Add to Recipe</AddButton>
          </IngredientCard>
        ))}
      </IngredientsContainer>
    </>
  );
};

export default IngredientsPage;
