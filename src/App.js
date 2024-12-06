import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Videos from "./components/Videos";
import Leaderboard from "./components/Leaderboard";
import Challenges from "./components/Challenges";
import Heading from "./components/Header/Heading";
import FavouritePage from "./components/FavouritePage";
import "./App.css";
import { toggleFavourite } from "./ToggleFunction";

function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="home" element={<Videos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route
          path="/favourites"
          element={<FavouritePage toggleFavourite={toggleFavourite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
