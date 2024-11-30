import React from "react";
import Navbar from "./Navbar"; // Import navbar z poprzedniego komponentu
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonPanels from "./ButtonPanels";
const PageWithNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Główna sekcja strony */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "calc(100vh - 64px)", 
          width: "100%", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center",
          padding: "20px",
        }}
      >
       <ButtonPanels></ButtonPanels>
      </Box>
    </div>
  );
};

export default PageWithNavbar;
