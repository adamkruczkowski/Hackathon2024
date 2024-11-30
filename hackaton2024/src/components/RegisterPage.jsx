import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Walidacja nazwy użytkownika
    if (formData.username.length < 5) {
      newErrors.username = "Nazwa użytkownika musi mieć co najmniej 5 znaków.";
    }

    // Walidacja hasła
    if (formData.password.length < 5) {
      newErrors.password = "Hasło musi mieć co najmniej 5 znaków.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Hasło musi zawierać co najmniej jedną dużą literę.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Tymczasowe symulowanie POST
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Otrzymano odpowiedź:", data);
        setResponseMessage("Rejestracja zakończona pomyślnie!");
      } else {
        throw new Error("Błąd rejestracji");
      }
    } catch (error) {
      console.error("Błąd:", error);
      setResponseMessage("Rejestracja nie powiodła się.");
    }
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
        Rejestracja
      </Typography>
      {responseMessage && (
        <Alert
          severity={responseMessage.includes("pomyślnie") ? "success" : "error"}
          sx={{ marginBottom: "20px" }}
        >
          {responseMessage}
        </Alert>
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
          error={!!errors.username}
          helperText={errors.username}
          required
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
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
          error={!!errors.password}
          helperText={errors.password}
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
          Zarejestruj się
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
