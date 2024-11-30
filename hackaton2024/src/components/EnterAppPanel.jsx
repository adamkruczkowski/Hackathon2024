import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";

const EnterAppPanel = ({ onPanelClick }) => {
  const panel = {
    title: "Panel 1",
    description: "Znajdź swoje hobby",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ButtonBase
        sx={{
          width: "500px",
          height: "200px",
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
        onClick={onPanelClick} // Wywołanie funkcji przekazanej jako prop
      >
        <img
          src={panel.img}
          alt={`${panel.title} image`}
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
    </Box>
  );
};

export default EnterAppPanel;
