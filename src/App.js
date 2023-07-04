import React from 'react';
import Home from "./Home";
import About from "./About";
import Project from './Project'
import Contact from "./Contact";
import Footer from './Component/Footer';
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { GlobalStyle } from './GlobalStyle';
import SocialMedia from './Component/SocialMedia';

const App = () => {
  const theme =
  {
   color:{

    dyBack:"#00A2E7",// blue
    // dyBack:"#FFE400",
    wbBack:"#0080FF",//dark
    // dBack:"#191D2B",
    dBack:"#091B2A",
    lback:"#FFFFFF",
    dgBack:"#454E56",

    darkbg:"#191D2B",
    darkfont:"#FFFFFF",
    lightfont:"#191D2B"
   },
   fontSize:{

    h1font: "40px",
    pfont:"20px",
    mpfont:"18px",
    mh1font:"30px"

   },
   
   fontWeight:{
    h1weight: "600",
   }
  }
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <SocialMedia/>

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
