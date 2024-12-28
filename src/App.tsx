import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRoutes from "./routes/ApplicationRoutes.tsx";
import "./index.css";

const App =  () => {
    return (
        <Router>
            <ApplicationRoutes />
        </Router>
    );
};

export default App;
