import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../../../hooks/useMovie";
import useBlockRightClick from "../../../hooks/useBlockRightClick";

const Watch = () => {
  const navigate = useNavigate();
  const movieId = useParams().movieId;
  const movieRef = React.useRef(null);

  useBlockRightClick(movieRef);

  const { data, error, isLoading } = useMovie(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data...</p>;
  }

  return (
    <div ref={movieRef}>
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-opacity-70">
          <ArrowLeftIcon
            onClick={() => navigate("/browse")}
            className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            {data?.title || "Loading..."}
          </p>
        </nav>
        <div className={`h-full w-full relative`}>
          <video
            className={`h-full w-full absolute top-0 left-0 object-cover`}
            autoPlay
            src={data?.movieUrl}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Watch;
