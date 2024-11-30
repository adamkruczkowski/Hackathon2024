import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar"; // Import navbar
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./QuizPage.css"; // Styl animacji

const QuizPage = () => {
  const questions = [
    "Staram się być zawsze na bieżąco z tym, co dzieje się wokół mnie.",
    "W codziennych obowiązkach stawiam na metodyczne i konsekwentne podejście.",
    "Dzięki swojemu towarzyskiemu usposobieniu łatwo nawiązuję znajomości i utrzymuję relacje z ludźmi.",
    "Potrafię trafnie rozpoznać potrzeby osób w moim otoczeniu.",
    "W codziennych działaniach cechuje mnie matematyczna dokładność i precyzja.",
    "Chętnie wspieram bliskich i znajomych, gdy tego potrzebują.",
    "W swoich działaniach staram się być zdecydowany, odważny i pełen energii.",
    "Często odwołuję się do barwnych przykładów i anegdot w rozmowach.",
    "Nawet ważne sprawy wolę załatwiać w swobodny i nieformalny sposób.",
    "Staram się wnosić realizm i nadawać kierunek podejmowanym przedsięwzięciom w życiu codziennym.",
    "Cenię sobie stabilność i poczucie bezpieczeństwa w swoim otoczeniu.",
    "Staram się odkrywać i zrozumieć zasady rządzące codziennym życiem i sytuacjami.",
    "Duże znaczenie mają dla mnie moje osobiste przekonania i wartości.",
    "Lubię angażować się w różnorodne zajęcia i projekty w życiu codziennym.",
    "Przygotowuję plan działania w codziennych sprawach, aby uniknąć niespodziewanych problemów.",
    "Wolę działać natychmiast, niż długo rozważać – staram się rozwiązywać trudne sytuacje na bieżąco, gdy tylko się pojawią."
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleAnswerClick = () => {
    setShowQuestion(false); // Ukryj bieżące pytanie

    // Przejdź do następnego pytania z opóźnieniem, aby wywołać animację
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowQuestion(true);
    }, 500); // 500ms - czas trwania animacji
  };

  const handleDiscoverHobby = () => {
    alert("Poznaj swoje nowe hobby!"); // Dodaj logikę przekierowania lub wyświetlenia nowej treści
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#e9f7ff", // Subtelne tło
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "30px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1976d2",
          }}
        >
          Quiz Oceny Umiejętności
        </Typography>

        {currentQuestionIndex < questions.length ? (
          <CSSTransition
            in={showQuestion}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "800px",
                backgroundColor: "#ffffff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginBottom: "15px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                {questions[currentQuestionIndex]}
              </Typography>

              {/* Przycisk z odpowiedzią */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                {["Zdecydowanie się nie zgadzam", "Nie zgadzam się", "Nie mam zdania", "Zgadzam się", "Zdecydowanie się zgadzam"].map(
                  (label, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      sx={{
                        padding: "10px 20px",
                        fontWeight: "bold",
                        minWidth: "90px",
                        color: "#1976d2",
                        borderColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1976d2",
                          color: "#fff",
                        },
                      }}
                      onClick={handleAnswerClick}
                    >
                      {label || index + 1}
                    </Button>
                  )
                )}
              </Box>
            </Box>
          </CSSTransition>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleDiscoverHobby}
              sx={{
                padding: "15px 40px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#ffffff",
                backgroundColor: "#4caf50",
                borderRadius: "30px",
                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                  backgroundColor: "#45a049",
                  transform: "scale(1.05)",
                },
              }}
            >
              Poznaj swoje nowe hobby
            </Button>
          </Box>
        )}

        
      </Box>
      <Footer />
    </div>
  );
};

export default QuizPage;
