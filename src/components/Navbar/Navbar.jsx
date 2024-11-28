import React, { useState } from "react";
import Button from "../Button";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navItems = [
    "Home",
    "Videos",
    "Leaderboard",
    "Challenges",
    "Favourites",
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navpart">
      <div className="navbar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item}
              className={`list-item ${activeTab === item ? "active" : ""}`}
              onClick={() => handleTabChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="below-nav">
        <h4>Free Stock Photos</h4>
        <Button className="nav-button" label="Trending" isDisabled={true} />
      </div>
    </nav>
  );
};

export default Navbar;
