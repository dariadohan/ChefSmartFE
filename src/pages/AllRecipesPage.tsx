import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';

const AllRecipesPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Header>
          <Title>All our Recipes</Title>
          <SubTitle>Discover delicious recipes</SubTitle>
        </Header>
        <RecipesContainer>
          <RecipeCard>
            <RecipeImage src="/images/recipe1.jpg" alt="Recipe 1" />
            <RecipeTitle>Chocolate Cake with Ganache</RecipeTitle>
            <RecipeDescription>This is a delicious recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 30 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 1 hour</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/taco.jpg" alt="Recipe 2" />
            <RecipeTitle>Cheesy Beeef Tacos</RecipeTitle>
            <RecipeDescription>This is another tasty recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 20 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 45 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/bowl.jpg" alt="Recipe 2" />
            <RecipeTitle>Burrito Bowl</RecipeTitle>
            <RecipeDescription>
              This is very healthy and tasty recipe.
            </RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 15 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 30 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/burrata.jpg" alt="Recipe 2" />
            <RecipeTitle>Caprese Burrata Pasta</RecipeTitle>
            <RecipeDescription>
              This is very healthy and tasty recipe.
            </RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 15 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 30 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/pancake.jpg" alt="Recipe 2" />
            <RecipeTitle>Chocolate Chips Pancake</RecipeTitle>
            <RecipeDescription>This is very tasty recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 15 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 30 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/shakshuka.jpg" alt="Recipe 2" />
            <RecipeTitle>Shakshuka</RecipeTitle>
            <RecipeDescription>This is very tasty recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 25 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 35 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          <RecipeCard>
            <RecipeImage src="/images/pot.jpg" alt="Recipe 2" />
            <RecipeTitle>Pot Roast</RecipeTitle>
            <RecipeDescription>This is very tasty recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 75 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 60 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>{' '}
          <RecipeCard>
            <RecipeImage src="/images/alfredo.jpg" alt="Recipe 2" />
            <RecipeTitle>Cajun Shrimp Alfredo Pasta</RecipeTitle>
            <RecipeDescription>This is very tasty recipe.</RecipeDescription>
            <RecipeDetails>
              <RecipeInfo>Prep Time: 45 mins</RecipeInfo>
              <RecipeInfo>Cook Time: 30 mins</RecipeInfo>
            </RecipeDetails>
          </RecipeCard>
          {/* Add more RecipeCards as needed */}
        </RecipesContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  width: 100%;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const RecipesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

const RecipeCard = styled.div`
  width: 20rem;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const RecipeTitle = styled.h2`
  margin-bottom: 5px;
`;

const RecipeDescription = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const RecipeDetails = styled.div`
  font-size: 0.8em;
`;

const RecipeInfo = styled.span`
  display: block;
  margin: 5px 0;
`;

export default AllRecipesPage;
