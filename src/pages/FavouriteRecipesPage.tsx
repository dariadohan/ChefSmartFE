import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.tsx';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem; /* 32px equivalent */
  font-weight: bold;
  margin: 2rem 0;
  color: #333;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

const RecipeCard = styled.div`
  width: 250px;
  height: 328px;
  margin: 1rem;
  padding: 1.25rem; /* 20px equivalent */
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: -0.5rem;
`;

const RecipeTitle = styled.h2`
  font-size: 1.25rem; /* 20px equivalent */
  font-weight: bold;
  margin-bottom: -0.4rem;
`;

const RecipeInfo = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.625rem 1.25rem; /* 10px 20px equivalent */
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const FavouriteRecipesPage = () => {
  const recipes = [
    {
      title: 'Chicken Curry',
      preparationTime: '45 mins',
      image: '/images/curry.jpg',
    },
    {
      title: 'Chicken Wrap',
      preparationTime: '40 mins',
      image: '/images/wrap.jpg',
    },
    {
      title: 'Vodka Rigatoni',
      preparationTime: '45 mins',
      image: '/images/pasta.jpg',
    },
    {
      title: 'Beef Hummus',
      preparationTime: '30 mins',
      image: '/images/hummus.jpg',
    },

    {
      title: 'Seared Salmon with Dijon',
      preparationTime: '60 mins',
      image: '/images/salmon.jpg',
    },
    {
      title: 'Herb Steak and Potatoes',
      preparationTime: '90 mins',
      image: '/images/steak.jpeg',
    },
    {
      title: 'Caesar Salad',
      preparationTime: '30 mins',
      image: '/images/caesar-salad.jpg',
    },
    {
      title: 'Pizza Funghi',
      preparationTime: '40 mins',
      image: '/images/pizza.jpg',
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container>
        <Title>Favourite Recipes</Title>
        <RecipesContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeInfo>
                Preparation Time: {recipe.preparationTime}
              </RecipeInfo>
              <Button
                onClick={() => {
                  navigate(`/recipe/13231431531`);
                }}
              >
                View Recipe
              </Button>
            </RecipeCard>
          ))}
        </RecipesContainer>
      </Container>
    </>
  );
};

export default FavouriteRecipesPage;
