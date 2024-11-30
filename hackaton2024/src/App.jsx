import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWithNavbar from "./components/PageWithNavbar";
import Login from "./components/Login"; // Import komponentu logowania

function App() {
  return (
    <Router>
      <Routes>
        {/* Domyślna trasa */}
        <Route path="/" element={<PageWithNavbar />} />
        {/* Trasa dla logowania */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
