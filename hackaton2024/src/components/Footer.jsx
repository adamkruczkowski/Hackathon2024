import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  const authors = [
    "Adam Kruczkowski",
    "Michał Lach",
    "Jakub Kos",
    "Dawid Wolny",
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // Kolor tła
        color: "#ffffff", // Kolor tekstu
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {/* Główne linki */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Link href="/" underline="hover" color="inherit" sx={{ fontSize: "14px" }}>
          Strona główna
        </Link>
        <Link href="/login" underline="hover" color="inherit" sx={{ fontSize: "14px" }}>
          Logowanie
        </Link>
        <Link href="/register" underline="hover" color="inherit" sx={{ fontSize: "14px" }}>
          Rejestracja
        </Link>
        
      </Box>
        
      <Divider sx={{ width: "100%", borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* Sekcja kontaktu */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} Bit Festival - Hackaton 2024
        </Typography>

        {/* Sekcja autorów */}
        <Typography variant="body2" sx={{ fontSize: "14px", marginTop: "10px" }}>
          Autorzy:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          {authors.map((author, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ fontSize: "14px", textAlign: "center" }}
            >
              {author}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
