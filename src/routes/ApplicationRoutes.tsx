import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import LoginPage from '../pages/LoginPage.tsx';

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/another" element={<LoginPage />} />
        </Routes>
    );
};

export default ApplicationRoutes;