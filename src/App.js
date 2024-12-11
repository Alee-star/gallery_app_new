import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Heading from "./components/Header";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import FavouritePage from "./pages/Favourite";
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
      <Navbar handleSearch={handleSearch} searchTerm={searchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos searchTerm={searchTerm} />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/photo/:photoId" element={<PhotoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
