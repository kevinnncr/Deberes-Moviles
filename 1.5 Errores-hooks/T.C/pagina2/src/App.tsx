import Inicio from "./pages/page1/inicio"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondPage from './pages/page2/SecondPage';
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <Router>
    <MainLayout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </MainLayout>
    </Router>
    
  );
};

export default App;
