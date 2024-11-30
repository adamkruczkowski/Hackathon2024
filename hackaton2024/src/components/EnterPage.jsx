import React from "react";
import Navbar from "./Navbar"; // Import navbar
import EnterAppPanel from "./EnterAppPanel";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const EnterPage = () => {
  const navigate = useNavigate(); // Hook nawigacji

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Główna sekcja strony */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "calc(100vh - 64px)", // Odjęcie wysokości Navbar
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Tekst wprowadzający */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            maxWidth: "800px",
          }}
        >
          <h1>Znajdź swoje hobby i nadaj życiu nowy wymiar!</h1>
          <p>
            W dzisiejszym zabieganym świecie, wypełnionym obowiązkami i codziennymi
            wyzwaniami, łatwo zapomnieć o tym, co naprawdę sprawia nam radość.
            Posiadanie hobby to nie tylko sposób na spędzenie wolnego czasu – to
            klucz do bardziej satysfakcjonującego życia. Dlaczego? Bo hobby
            pozwala nam:
          </p>
          <ul style={{ textAlign: "left" }}>
            <li><b>Odkryć siebie na nowo</b>: Eksplorowanie nowych pasji otwiera drzwi do kreatywności i osobistego rozwoju.</li>
            <li><b>Zrelaksować się i naładować baterie</b>: Angażowanie się w ulubione zajęcia obniża stres, poprawia nastrój i wspiera nasze zdrowie psychiczne.</li>
            <li><b>Nawiązać wartościowe relacje</b>: Wspólne pasje łączą ludzi, budując więzi i tworząc nowe przyjaźnie.</li>
            <li><b>Zwiększyć pewność siebie</b>: Zdobywanie nowych umiejętności i realizacja swoich zainteresowań buduje poczucie własnej wartości.</li>
          </ul>
          <p>
            Nie czekaj, aż czas na siebie znajdzie się sam – zrób pierwszy krok
            już teraz. <b>Kliknij i odkryj pasję, która nada Twojemu życiu nowy wymiar!</b>
          </p>
        </Box>

        {/* Przekazanie funkcji nawigacji jako onPanelClick */}
        <EnterAppPanel onPanelClick={() => navigate('/page-with-navbar')} />
      </Box>
    </div>
  );
};

export default EnterPage;
