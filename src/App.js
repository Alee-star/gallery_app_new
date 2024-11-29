import React from "react";
import Heading from "./components/Header/Heading";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";

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
