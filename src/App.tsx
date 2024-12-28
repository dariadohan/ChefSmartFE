import React from 'react';

const App: React.FC = () => {
    return (
        <div className="container">
            <header>
                <h1>Welcome to My React App</h1>
            </header>
            <main>
                <p>This is a simple React application setup.</p>
                <p>Edit <code>App.tsx</code> to get started!</p>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;