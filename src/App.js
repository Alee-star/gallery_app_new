import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import GalleryList from "./components/Banner/GalleryList";
import Heading from "./components/Header/Heading";
import Videos from "./components/Videos";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Challenges from "./components/Challenges";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <GalleryList />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
