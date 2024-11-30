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
          minHeight: "calc(100vh - 64px)", // Odejmujemy wysokość Navbar (64px domyślnie w Material-UI)
          width: "100%", // Rozciągnięcie na całą szerokość
          display: "flex", // Dodaje elastyczny układ
          flexDirection: "column", // Ustawia kolumnowy układ
          justifyContent: "center", // Wyśrodkowanie w pionie
          alignItems: "center", // Wyśrodkowanie w poziomie
          padding: "20px", // Dodaje odstępy
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
