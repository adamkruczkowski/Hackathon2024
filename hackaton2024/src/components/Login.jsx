import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [savedMessage, setSavedMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedMessage("Wprowadzone dane: " + JSON.stringify(formData));
    console.log(JSON.stringify(formData));
  };

  return (
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
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Logowanie
      </Typography>
      {savedMessage && (
        <Typography variant="body1" color="primary" sx={{ marginBottom: "20px" }}>
          {savedMessage}
        </Typography>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <TextField
          label="Nazwa użytkownika"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Hasło"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px 0", fontWeight: "bold" }}
        >
          Zaloguj się
        </Button>
      </form>
    </Box>
  );
};

export default Login;
