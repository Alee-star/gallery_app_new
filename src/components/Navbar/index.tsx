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
        <ul className="flex items-center p-0 gap-10 overflow-hidden overflow-x-auto list-none">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center h-[48px] rounded-xl text-[16px] font-semibold text-[#4a4a4a] cursor-pointer"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center h-[48px] bg-black text-white text-[16px] font-semibold px-5 border border-transparent rounded-[30px] cursor-pointer"
                    : "flex items-center h-[48px] rounded-[30px] text-[16px] font-semibold text-[#4a4a4a] cursor-pointer no-underline"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between text-[#2c343e] text-[23px] font-semibold tracking-tight leading-none gap-[20px] flex-wrap md:px-[30px] xl:px-[80px]">
        <h4>Free Stock Photos</h4>
        <div className="w-full max-w-fit h-[50px] rounded-[5px] border border-black bg-white flex items-center justify-between xl:min-w-[800px]">
          <input
            type="text"
            className="text-base border-none outline-none p-2.5 w-[350px] flex-grow"
            placeholder="Search Photos"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <img
            src="/assets/search.svg"
            alt="Search icon"
            className="cursor-pointer w-[35px] h-[35px] text-[#7f7f7f]"
          />
        </div>
        <Button
          className="bg-white text-black cursor-pointer h-[50px] text-[16px] font-semibold border rounded-[6px] border-[#dfdfe0] px-5"
          label="Trending"
          isDisabled={true}
          onClick={() => {}}
        />
      </div>
    </nav>
  );
};

export default Navbar;
