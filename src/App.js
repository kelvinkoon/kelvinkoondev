import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App container">
      <div className="small">
        <header className="App-header pt-5 pb-5">
          <Header></Header>
        </header>
        <About></About>
      </div>
    </div>
  );
}

export default App;
