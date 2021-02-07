import React from "react";
import "./App.css";
import Navbar from "./navbar";
import Budget from "./budget/Budget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <Budget />
      </div>
    </div>
  );
}

export default App;
