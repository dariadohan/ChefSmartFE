import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/another" element={<AnotherPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default ApplicationRoutes;