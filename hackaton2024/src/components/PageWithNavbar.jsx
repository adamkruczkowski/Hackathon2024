import React from "react";
import Navbar from "./Navbar"; // Import navbar z poprzedniego komponentu
import Box from "@mui/material/Box";
import ButtonPanels from "./ButtonPanels";
import Footer from "./Footer";
const PageWithNavbar = () => {
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
        <ButtonPanels />

      </Box>
      <Footer></Footer>
    </div>
  );
};

export default PageWithNavbar;
