import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PageWithNavbar from "./components/PageWithNavbar";
import Login from "./components/Login"; // Komponent logowania
import RegisterPage from "./components/RegisterPage"; // Komponent rejestracji
import EnterPage from "./components/EnterPage"; // Komponent strony głównej
import QuizPage from './components/QuizPage';
import RandomHobbyPage from './components/RandomHobbyPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trasa dla strony głównej */}
        <Route path="/" element={<EnterPage />} />
        
        {/* Trasa dla strony z navbar */}
        <Route path="/page-with-navbar" element={<PageWithNavbar />} />
        
        {/* Trasa dla logowania */}
        <Route path="/login" element={<Login />} />
        
        {/* Trasa dla rejestracji */}
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/quiz-page" element={<QuizPage />} />
        
        <Route path="/random-hobby-page" element={<RandomHobbyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

