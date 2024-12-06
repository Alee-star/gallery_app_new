import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

const Navbar = ({ handleTabChange }) => {
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  return (
    <nav className="navigation-part">
      <div className="navbar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="list-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleTabChange?.(item)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="below-navigation">
        <h4>Free Stock Photos</h4>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Photos"
          />
          <img src="/assets/search.svg" alt="Search icon" />
        </div>
        <Button className="navigation-button" label="Trending" isDisabled />
      </div>
    </nav>
  );
};

export default Navbar;
