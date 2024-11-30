import React, { useState } from "react";
import { TextField, Button, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [savedMessage, setSavedMessage] = useState("");

  const navigate = useNavigate();

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
        width: "100vw",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#f5f5f5",
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

      {/* Linki do innych stron */}
      <Box sx={{ marginTop: "20px", textAlign: "center" }}>
        <Typography variant="body2">
          Nie masz konta?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/register")}
            sx={{ textDecoration: "underline", cursor: "pointer", color: "#1976d2" }}
          >
            Załóż je tutaj
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/")}
            sx={{ textDecoration: "underline", cursor: "pointer", color: "#1976d2" }}
          >
            Wróć do strony głównej
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
