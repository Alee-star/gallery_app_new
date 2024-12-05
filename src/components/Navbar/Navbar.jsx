import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";
const Navbar = ({ handleTabChange }) => {
  const navItems = ["Home", "Photos", "Favourites"];
  return (
    <nav className="navigation-part">
      <div className="navbar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item} className="list-item">
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleTabChange(item)}
              >
                {item}
              </NavLink>
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
