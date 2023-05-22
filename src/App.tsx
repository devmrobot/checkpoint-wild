import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Continents from "./components/Continents";
import Countries from "./components/Countries";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents/:id" element={<Continents />} />
        <Route path="/countries/:id" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
