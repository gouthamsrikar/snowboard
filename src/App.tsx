import React from 'react';
import Dashboard from './pages/dashboard';
import { ThemeProvider } from './utils/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="font-Inter h-screen ">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
