import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom"; // Import hooka nawigacji

const Navbar = () => {
  const navigate = useNavigate(); // Hook nawigacji

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw", // Zajmuje pełną szerokość ekranu
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#1976d2", boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            My App
          </Typography>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "bold" }}
            onClick={() => navigate("/login")} // Przejście na stronę logowania
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              border: "1px solid white",
              borderRadius: "20px",
              padding: "5px 15px",
              marginLeft: "10px",
            }}
            onClick={() => navigate("/register")} // Przejście na stronę rejestracji
          >
            Rejestracja
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
