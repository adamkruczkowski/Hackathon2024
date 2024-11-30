import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Opcja 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Opcja 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Opcja 3</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            My App
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none", fontWeight: "bold" }}>
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
          >
            Rejestracja
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
