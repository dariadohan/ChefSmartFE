import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import IngredientsPage from '../pages/IngredientsPage.tsx';
import FavouriteRecipesPage from '../pages/FavouriteRecipesPage.tsx';
import AllRecipesPage from '../pages/AllRecipesPage.tsx';
import RecepiePage from '../pages/RecepiePage.tsx';

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/fav-recipes" element={<FavouriteRecipesPage />} />
      <Route path="/all-recipes" element={<AllRecipesPage />} />
      <Route path="/recipe/:id" element={<RecepiePage />} />
    </Routes>
  );
};

export default ApplicationRoutes;
