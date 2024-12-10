import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";

interface NavbarProps {
  handleSearch: (value: string) => void;
  searchTerm: string;
}

const Navbar = ({ handleSearch, searchTerm }: NavbarProps) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <nav className="flex flex-col justify-between py-5 px-5 bg-white gap-8">
      <div className="flex justify-center">
        <ul className="flex items-center p-0 gap-24 overflow-hidden overflow-x-auto list-none">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center h-48 rounded-xl text-4 font-semibold text-textGray cursor-pointer"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center h-12 bg-black text-white text-4 font-semibold px-5 border border-transparent rounded-30 cursor-pointer"
                    : "flex items-center h-12 rounded-30 text-4 font-semibold text-textGray cursor-pointer no-underline"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between text-lightBlack text-6 font-semibold tracking-tight leading-none gap-5 flex-wrap md:px-8 xl:px-20">
        <h4 className="text-2xl">Free Stock Photos</h4>
        <div className="w-full max-w-fit h-12 rounded-5 border border-black bg-white flex items-center justify-between xl:min-w-200">
          <input
            type="text"
            className="text-base border-none outline-none p-2.5 w-80 flex-grow"
            placeholder="Search Photos"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <img
            src="/assets/search.svg"
            alt="Search icon"
            className="cursor-pointer w-9 h-9 text-lightGray"
          />
        </div>
        <Button
          className="bg-white text-black cursor-pointer h-12 text-4 font-semibold border rounded-5 border-border px-5"
          label="Trending"
          isDisabled={true}
          onClick={() => {}}
        />
      </div>
    </nav>
  );
};

export default Navbar;
