import React from "react";

import "../../../assets/css/scroll.css";

import { HEADTITLE } from "../../../constants/constant";

import Navbar from "./Navbar";
import Billboard from "./BillBoard";
import MovieList from "./MovieList";
import BrowseFooter from "./BrowseFooter";

import { useNavigate } from "react-router-dom";
import useMovieList from "../../../hooks/useMovieList";
import useBlockRightClick from "../../../hooks/useBlockRightClick";

const Browse = React.memo(() => {
  const { data: movies = [] } = useMovieList();
  const browseRef = React.useRef(null);
  const navigate = useNavigate();

  useBlockRightClick(browseRef);

  React.useEffect(() => {
    HEADTITLE.forEach((item) => {
      if (item.path === window.location.pathname) {
        document.title = `Netflix - ${item.title}`;
      }
    });
  }, [navigate]);

  return (
    <>
      <div className="bg-[#141414]" ref={browseRef}>
        <Navbar />
        <Billboard />
        <div className="pb-40 h-full">
          <MovieList title="Movies" data={movies} />
        </div>
        <BrowseFooter />
      </div>
    </>
  );
});

export default Browse;
