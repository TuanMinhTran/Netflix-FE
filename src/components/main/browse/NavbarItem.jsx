import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ label, active, src, onClick }) => {
  return (
    <>
      <Link
        to={src}
        onClick={onClick}
        className={
          active
            ? "text-white cursor-default"
            : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
        }
      >
        {label}
      </Link>
    </>
  );
};

export default NavbarItem;
