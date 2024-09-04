import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
