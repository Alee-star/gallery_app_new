import React from "react";
import "./App.css";
import Heading from "./components/Header/Heading";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Heading />
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
