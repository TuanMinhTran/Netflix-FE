import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const PlayButton = ({ movieId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${movieId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" />
      Phát
    </button>
  );
};

export default PlayButton;
