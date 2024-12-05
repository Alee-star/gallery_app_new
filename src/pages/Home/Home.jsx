import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="banner">
          <div className="banner-content">
            <h1>Gallery App</h1>
            <p>Explore the contents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
