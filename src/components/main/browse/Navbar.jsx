import React, { useCallback, useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { LOGO, TOP_OFFSET, PROFILE } from "../../../constants/constant";
import NavbarItem from "./NavbarItem";
import MobileMenu from "../mobile/MobileMenu";
import AccountMenu from "./AccountMenu";

import useScroll from "../../../hooks/useScroll";
import useCategories from "../../../hooks/useCategory";

const Navbar = ({ onItemClick }) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { data: categories = [] } = useCategories();

  const showBackground = useScroll(TOP_OFFSET);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <>
      <nav className="w-full fixed z-40">
        <div
          className={`w-full px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
            showBackground ? "bg-zinc-900 bg-opacity-90" : ""
          }`}
        >
          {LOGO.src}
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            {categories.map((category) => (
              <NavbarItem
                label={category.name}
                key={category.id}
                src={category.path}
                onClick={() => {
                  // console.log("Clicked category:", category.id);
                  onItemClick(category.id);
                }}
              />
            ))}
          </div>
          <div
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          >
            <p className="text-white text-sm">Browse</p>
            <ChevronDownIcon
              className={`w-4 text-white fill-white transition ${
                showMobileMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <MobileMenu visible={showMobileMenu} />
          </div>
          <div className="flex flex-row ml-auto gap-7 items-center">
            {isSearchOpen === false ? (
              <div
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
              >
                <MagnifyingGlassIcon className="w-6" />
              </div>
            ) : (
              <div className="border border-white flex gap-2 bg-[black]">
                <MagnifyingGlassIcon className="w-7 text-white ps-1" />
                <input
                  type="text"
                  placeholder="Phim, diễn viên, thể loại..."
                  className="p-2 bg-[#00000083] outline-none text-white"
                />
              </div>
            )}
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BellIcon className="w-6" />
            </div>
            <div
              onClick={toggleAccountMenu}
              className="flex flex-row items-center gap-2 cursor-pointer relative"
            >
              <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <img src={PROFILE.avatar} alt={PROFILE.name} />
              </div>
              <ChevronDownIcon
                className={`w-4 text-white fill-white transition ${
                  showAccountMenu ? "rotate-180" : "rotate-0"
                }`}
              />
              <AccountMenu visible={showAccountMenu} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
