import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";

const ButtonPanels = () => {
  const panels = [
    {
      title: "Panel 1",
      description: "Opis pierwszego panelu",
      img: "https://via.placeholder.com/150", // Tymczasowy obrazek
    },
    {
      title: "Panel 2",
      description: "Opis drugiego panelu",
      img: "https://via.placeholder.com/150", // Tymczasowy obrazek
    },
    {
      title: "Panel 3",
      description: "Opis trzeciego panelu",
      img: "https://via.placeholder.com/150", // Tymczasowy obrazek
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap", // Dostosowuje panele do mniejszych ekranów
        padding: "20px",
        width: "100vw", // Zajmuje pełną szerokość ekranu
        height: "100vh", // Zajmuje pełną wysokość ekranu
      }}
    >
      {panels.map((panel, index) => (
        <ButtonBase
          key={index}
          sx={{
            width: "350px",
            height: "500px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "#e0e0e0",
            },
          }}
          onClick={() => alert(`Kliknięto ${panel.title}`)} // Działanie przycisku
        >
          <img
            src={panel.img}
            alt={panel.title}
            style={{
              width: "80px",
              height: "80px",
              marginBottom: "10px",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {panel.title}
          </Typography>
          <Typography variant="body2">{panel.description}</Typography>
        </ButtonBase>
      ))}
    </Box>
  );
};

export default ButtonPanels;
