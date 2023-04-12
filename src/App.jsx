import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import FooterPart from "./components/Content/Footer/FooterPart";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import "./global.css"
import TyssRoute from "./routes/TyssRoute";

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <TopNavbar />
          <Navbar />
          <TyssRoute />
          <FooterPart/>
        </Router>
      </article>
    </section>
  );
};


export default App;
