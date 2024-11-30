import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar"; // Import navbar
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";

const marks = [
  {
    value: 1,
    label: "Bardzo Słabo",
  },
  {
    value: 2,
    label: "Słabo",
  },
  {
    value: 3,
    label: "Średnio",
  },
  {
    value: 4,
    label: "Dobrze",
  },
  {
    value: 5,
    label: "Bardzo dobrze",
  },
];

function valuetext(value) {
  return `${value}`;
}

const QuizPage = () => {
  const questions = [
    "Staram się być zawsze na bieżąco z tym, co dzieje się wokół mnie.",
    "W codziennych obowiązkach stawiam na metodyczne i konsekwentne podejście. - N",
    "Jak oceniasz swoją znajomość Material-UI?",
  ];

  return (
    <div>
        <Navbar />
    
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", fontWeight: "bold", textAlign: "center" }}
      >
        Quiz Oceny Umiejętności
      </Typography>
      {questions.map((question, index) => (
        <Box
          key={index}
          sx={{
            width: "80%",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            {index + 1}. {question}
          </Typography>
          <Slider
            aria-label={`Question ${index + 1}`}
            defaultValue={3}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            min={1}
            max={5}
            valueLabelDisplay="off"
          />
        </Box>
      ))}
    </Box>
    </div>
    
  );
};

export default QuizPage;
