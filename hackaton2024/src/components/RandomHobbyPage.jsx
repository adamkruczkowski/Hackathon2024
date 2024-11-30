import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar"; 
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



const RandomHobbyPage = () => {

    return(
        <div>
            <Navbar/>
        <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "calc(100vh - 64px)", 
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        </Box>
            <Footer></Footer>
        </div>
    )
};

export default RandomHobbyPage;