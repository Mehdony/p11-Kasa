import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement/Logement";
import Error from "./components/Error/Error";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      {/* path="*" fonctionne si jamais l'url correspond à rien de déclaré au dessus */}
      {/* <Route path="*" element={<Home />} /> */}
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
