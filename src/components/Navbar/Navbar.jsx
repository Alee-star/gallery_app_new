import React from "react";
import Button from "../Button";
import "./Navbar.css";

const Navbar = ({ selectedNavItem, handleTabChange }) => {
  const navItems = [
    "Home",
    "Videos",
    "Leaderboard",
    "Challenges",
    "Favourites",
  ];

  return (
    <nav className="navigation-part">
      <div className="navbar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item}
              className={`list-item ${
                selectedNavItem === item ? "active" : ""
              }`}
              onClick={() => handleTabChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="below-navigation">
        <h4>Free Stock Photos</h4>
        <Button className="navigation-button" label="Trending" isDisabled />
      </div>
    </nav>
  );
};

export default Navbar;
