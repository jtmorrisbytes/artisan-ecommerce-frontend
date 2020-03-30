import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BrowserRouter from "react-router-dom";
import Header from "./controllers/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
