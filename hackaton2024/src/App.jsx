import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import EnterPage from './components/EnterPage';
import PageWithNavbar from './components/PageWithNavbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnterPage />} />
        
        <Route path="/page-with-navbar" element={<PageWithNavbar />} />
      </Routes>
    </Router>
  );
}

export default App;
