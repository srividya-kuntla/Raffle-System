import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
