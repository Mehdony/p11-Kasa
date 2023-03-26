// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Routing from "./Routing";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
