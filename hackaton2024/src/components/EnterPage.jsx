import React from "react";
import Navbar from "./Navbar"; // Import navbar
import EnterAppPanel from "./EnterAppPanel";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";

const EnterPage = () => {
  const navigate = useNavigate(); // Hook nawigacji

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Główna sekcja strony */}
      <Box
        sx={{
          backgroundColor: "#f5faff", // Delikatne tło
          minHeight: "calc(100vh - 64px)", // Odjęcie wysokości Navbar
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        {/* Tekst wprowadzający */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            maxWidth: "800px",
            padding: "20px",
            backgroundColor: "#ffffff", // Tło dla sekcji tekstowej
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtelny cień
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1976d2" }}>
            Znajdź swoje hobby i nadaj życiu nowy wymiar!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.8", color: "#555" }}>
            W dzisiejszym zabieganym świecie, wypełnionym obowiązkami i codziennymi wyzwaniami, łatwo zapomnieć o tym, co naprawdę sprawia nam radość. 
            Posiadanie hobby to nie tylko sposób na spędzenie wolnego czasu – to klucz do bardziej satysfakcjonującego życia. Dlaczego? Bo hobby pozwala nam:
          </Typography>
          <ul style={{ textAlign: "left", lineHeight: "1.8", padding: "0 20px", color: "#555" }}>
            <li><b>Odkryć siebie na nowo:</b> Eksplorowanie nowych pasji otwiera drzwi do kreatywności i osobistego rozwoju.</li>
            <li><b>Zrelaksować się i naładować baterie:</b> Angażowanie się w ulubione zajęcia obniża stres, poprawia nastrój i wspiera nasze zdrowie psychiczne.</li>
            <li><b>Nawiązać wartościowe relacje:</b> Wspólne pasje łączą ludzi, budując więzi i tworząc nowe przyjaźnie.</li>
            <li><b>Zwiększyć pewność siebie:</b> Zdobywanie nowych umiejętności i realizacja swoich zainteresowań buduje poczucie własnej wartości.</li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: "20px", color: "#555" }}>
            Nie czekaj, aż czas na siebie znajdzie się sam – zrób pierwszy krok już teraz. <b>Kliknij i odkryj pasję, która nada Twojemu życiu nowy wymiar!</b>
          </Typography>
        </Box>

        {/* Przekazanie funkcji nawigacji jako onPanelClick */}
        <EnterAppPanel onPanelClick={() => navigate('/page-with-navbar')} />
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EnterPage;
