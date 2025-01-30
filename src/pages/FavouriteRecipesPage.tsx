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
  font-size: 2rem;
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

export const recipes = [
  {
    title: 'Chicken Curry',
    preparationTime: '45 mins',
    image: '/images/curry.jpg',
    description:
      '500g chicken, 1/2 cup yogurt, 1 tsp turmeric powder, 1 tsp red chili powder, 1/2 tsp salt, 1 tbsp lemon juice, 2 tbsp oil, 1 large onion, 2 tomatoes, 1 tbsp ginger-garlic paste, 2 green chilies, 1 tsp cumin seeds, 1 tsp garam masala, 1 tsp coriander powder, 1/2 tsp black pepper, 1/2 cup coconut milk (optional), 1/2 tsp kasuri methi (optional), fresh coriander leaves.',
  },
  {
    title: 'Chicken Wrap',
    preparationTime: '40 mins',
    image: '/images/wrap.jpg',
    description:
      '2 boneless chicken breasts (500g), 2 tbsp olive oil, 1 tsp garlic powder, 1 tsp paprika, 1/2 tsp cumin powder, 1/2 tsp salt, 1/2 tsp black pepper, 4 large flour tortillas, 1 cup shredded lettuce, 1/2 cup diced tomato, 1/2 cup sliced cucumber, 1/4 cup thinly sliced red onion, 1/2 cup shredded cheddar cheese (optional), 1/4 cup ranch dressing or sour cream (optional).',
  },
  {
    title: 'Vodka Rigatoni',
    preparationTime: '45 mins',
    image: '/images/pasta.jpg',
    description:
      '1 lb rigatoni pasta, 2 tbsp olive oil, 1 medium onion (chopped), 3 cloves garlic (minced), 1/2 cup vodka, 1 can (14.5 oz) crushed tomatoes, 1/2 cup heavy cream, 1/4 cup grated Parmesan cheese, 1/2 tsp red pepper flakes, salt and black pepper to taste, fresh basil (optional, for garnish).',
  },
  {
    title: 'Beef Hummus',
    preparationTime: '30 mins',
    image: '/images/hummus.jpg',
    description:
      '1 lb ground beef, 2 tbsp olive oil, 1 medium onion (chopped), 3 cloves garlic (minced), 1 tsp ground cumin, 1 tsp ground paprika, 1/2 tsp ground cinnamon, salt and black pepper to taste, 1 cup hummus, 1/4 cup chopped parsley (for garnish), 2 tbsp pine nuts (optional, for garnish).',
  },

  {
    title: 'Seared Salmon with Dijon',
    preparationTime: '60 mins',
    image: '/images/salmon.jpg',
    description:
      '4 salmon fillets, 2 tbsp olive oil, 2 tbsp Dijon mustard, 1 tbsp honey, 1 tbsp lemon juice, 1 clove garlic (minced), salt and black pepper to taste, fresh parsley (optional, for garnish).',
  },
  {
    title: 'Herb Steak and Potatoes',
    preparationTime: '90 mins',
    image: '/images/steak.jpeg',
    description:
      '2 rib-eye steaks (about 1 lb), 4 medium potatoes (cubed), 2 tbsp olive oil, 2 cloves garlic (minced), 1 tbsp fresh rosemary (chopped), 1 tbsp fresh thyme (chopped), 1 tbsp butter, salt and black pepper to taste.',
  },
  {
    title: 'Caesar Salad',
    preparationTime: '30 mins',
    image: '/images/caesar-salad.jpg',
    description:
      '4 cups romaine lettuce (chopped), 1/2 cup Caesar dressing, 1/4 cup grated Parmesan cheese, 1 cup croutons, 1 tbsp olive oil, 1 clove garlic (minced), salt and black pepper to taste.',
  },
  {
    title: 'Pizza Funghi',
    preparationTime: '40 mins',
    image: '/images/pizza.jpg',
    description:
      '1 pizza dough (prepared), 1/2 cup tomato sauce, 2 cups mozzarella cheese (shredded), 200g mushrooms (sliced), 2 tbsp olive oil, 1 tsp dried oregano, salt and black pepper to taste, fresh basil (optional, for garnish).',
  },
];

const FavouriteRecipesPage = () => {
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
                  navigate(`/recipe/${index}`);
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
