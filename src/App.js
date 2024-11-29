import React from "react";
import Heading from "./components/Header/Heading";
import Navbar from "./components/Navbar/Navbar";
import GalleryList from "./components/Banner/GalleryList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <Navbar />
      <GalleryList />
    </div>
  );
}

export default App;
