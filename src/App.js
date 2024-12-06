import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Heading from "./components/Header/Heading";
import Navbar from "./components/Navbar/Navbar";
import FavouritePage from "./pages/FavouritePage";
import Home from "./pages/Home/Home";
import Photos from "./pages/Photos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
}

export default App;
