import React from "react";
import Navbar from "./Navbar"; // Import navbar z poprzedniego komponentu
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PageWithNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Główna sekcja strony */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "100vh", // Ustawia wysokość strony na pełną wysokość okna
          padding: "20px", // Dodaje odstęp dookoła tekstu
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: "20px" }}>
          Witaj na mojej stronie!
        </Typography>
        <Typography variant="body1">
          To jest przykładowy tekst na stronie. Możesz tutaj dodać dowolne
          informacje, treść lub inne elementy, które chcesz wyświetlić.
        </Typography>
      </Box>
    </div>
  );
};

export default PageWithNavbar;
