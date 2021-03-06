import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <div className="small">
        <header className="pt-5 pb-3">
          <Header />
        </header>
        <About />
        <Work />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
