import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./components/Country";
import Continent from "./components/Continent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:code" element={<Continent />} />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
