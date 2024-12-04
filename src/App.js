import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Heading from "./components/Header/Heading";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import FavouritePage from "./pages/FavouritePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
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
