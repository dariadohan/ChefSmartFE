import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
}