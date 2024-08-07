import React from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dropdown = ({ title, itemsDropdown }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState(title);

  const handleDropdownHover = () => {
    setIsOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsOpen(false);
  };

  const handleChangeTitle = (e) => {
    setSelectedTitle(e.target.innerHTML);
  };

  const handleOptionHover = () => {
    setIsOpen(true);
  };

  const handleOptionLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex flex-col">
        <div
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownLeave}
          className="w-46 text-white font-semibold cursor-pointer flex justify-center items-center gap-2 bg-black border-white border px-4 py-2"
          typeof="button"
        >
          {selectedTitle}
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div
          onMouseEnter={handleOptionHover}
          onMouseLeave={handleOptionLeave}
          className={`z-10 ${
            isOpen ? "block" : "hidden"
          }  shadow w-44 max-h-96 absolute top-11 right-0 bg-[#0000008c] overflow-auto`}
        >
          {isOpen ? (
            <ul className="py-2 text-sm">
              {itemsDropdown.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:underline">
                  <Link
                    to="/browse/original-audio"
                    className="text-white"
                    onClick={handleChangeTitle}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
