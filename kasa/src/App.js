// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Routing from "./Routing";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navigation />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
