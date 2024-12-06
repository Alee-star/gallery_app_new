import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";
import Heading from "./components/Header/Heading";
import Home from "./pages/Home/Home";
import Photos from "./pages/Photos";
import FavouritePage from "./pages/FavouritePage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { toggleFavourite } from "./ToggleFunction";

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
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
