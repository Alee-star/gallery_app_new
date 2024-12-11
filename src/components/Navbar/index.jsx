import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Navbar = ({ handleSearch, searchTerm }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  const onSearchChange = (event) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <nav className="flex flex-col justify-between py-5 px-5 gap-8 bg-white">
      <div className="flex justify-center">
        <ul className="flex items-center gap-10 p-0 list-none overflow-hidden overflow-x-auto">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center h-12 text-base font-semibold cursor-pointer text-text-gray rounded-xl"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  const baseStyle =
                    "flex items-center h-12 text-base font-semibold cursor-pointer rounded-30";
                  return `${baseStyle} ${
                    isActive
                      ? "px-5 text-white bg-black border border-transparent"
                      : "text-text-gray no-underline"
                  }`;
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between gap-5 px-5 text-6 font-semibold leading-none tracking-tight text-light-black md:px-8 xl:px-20">
        <h4 className="text-2xl">Free Stock Photos</h4>
        <div className="flex items-center justify-between h-12 max-w-fit rounded-5 border border-black bg-white xl:min-w-20 w-full">
          <input
            type="text"
            className="w-80 p-2.5 text-base border-none outline-none flex-grow"
            placeholder="Search Photos"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <img
            src="/assets/search.svg"
            alt="Search icon"
            className="w-9 h-9 text-light-gray cursor-pointer"
          />
        </div>
        <Button
          className="flex items-center justify-center h-12 px-5 text-base text-black font-semibold bg-white border border-border rounded-5 cursor-pointer"
          label="Trending"
          isDisabled
        />
      </div>
    </nav>
  );
};

export default Navbar;
