import React from "react";
import Navbar from "./Navbar"; // Import navbar z poprzedniego komponentu
import Box from "@mui/material/Box";
import ButtonPanels from "./ButtonPanels";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const PageWithNavbar = () => {
  const navigate = useNavigate();

  const handlePanelClick = (panelTitle) => {
    // Dodaj logikę na podstawie panelu, np. przekierowanie
    if (panelTitle === "Panel 1") {
      navigate("/random-hobby-page");
    } else if (panelTitle === "Panel 2") {
      navigate("/quiz-page"); // Przejście do strony QuizPage
    } else if (panelTitle === "Panel 3") {
      alert("Panel 3 został kliknięty");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Główna sekcja strony */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw", // Zajmuje pełną szerokość ekranu
          height: "100vh", // Zajmuje pełną wysokość ekranu
          padding: "20px",
          backgroundColor: "#f5f5f5", // Jasne tło
        }}
      >
       <ButtonPanels onPanelClick={handlePanelClick} />


      </Box>
      <Footer></Footer>
    </div>
  );
};

export default PageWithNavbar;
