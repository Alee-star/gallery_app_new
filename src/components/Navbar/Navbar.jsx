import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

const Navbar = ({ handleTabChange, handleSearch }) => {
  const [searchTerm, setSeachTerm] = useState("");

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  const onSearchChange = (event) => {
    const value = event.target.value;
    setSeachTerm(value);
    handleSearch(value);
    console.log("Search Term:", value);
  };

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
            value={searchTerm}
            onChange={onSearchChange}
          />
          <img src="/assets/search.svg" alt="Search icon" />
        </div>
        <Button className="navigation-button" label="Trending" isDisabled />
      </div>
    </nav>
  );
};

export default Navbar;
