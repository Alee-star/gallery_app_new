import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Header/Heading";
import Home from "./pages/Home/Home";
import Photos from "./pages/Photos";
import FavouritePage from "./pages/FavouritePage";
import PhotoDetail from "./PhotoDetail";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div className="App">
      <Heading />
      <Navbar handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<Photos searchTerm={searchTerm} />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/photo/:photoId" element={<PhotoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
