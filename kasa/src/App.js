import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* path="*" fonctionne si jamais l'url correspond à rien de déclaré au dessus */}
      {/* <Route path="*" element={<Home />} /> */}
      <Route path="/*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
