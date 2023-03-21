import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Routing from "./Routing";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
