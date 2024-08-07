import React from "react";
import "../scss/header.scss";
import useScroll from "../../../hooks/useScroll";

const Header = () => {
  const isScrolled = useScroll(60);
  
  return (
    <>
      <div className={`header ${isScrolled ? "visible" : "visible"}`}></div>;
    </>
  );
};

export default Header;
