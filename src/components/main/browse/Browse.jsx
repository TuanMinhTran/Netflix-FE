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
import useCategories from "../../../hooks/useCategory";

const Browse = React.memo(() => {
  const browseRef = React.useRef(null);
  const navigate = useNavigate();
  const [listTitle, setListTitle] = React.useState("Danh Sách Phim");
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const { data: movies = [] } = useMovieList(selectedCategoryId);
  const { data: categories = [] } = useCategories();
  // console.log("Categories data:", categories);

  useBlockRightClick(browseRef);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    // console.log("Current path:", currentPath);
    const currentCategory = categories.find(
      (item) => item.path === currentPath
    );
    if (currentCategory) {
      document.title = `Netflix - ${currentCategory.name}`;
      setSelectedCategoryId(currentCategory.id);
      setListTitle(currentCategory.title);
    } else {
      setSelectedCategoryId(1);
      setListTitle("Danh Sách Phim");
    }
  }, [window.location.pathname, categories]);

  const handleNavbarClick = (categoryId) => {
    const selectedCategory = categories.find((item) => item.id === categoryId);
    // console.log("Handle Navbar Click, categoryId:", categoryId);
    if (selectedCategory) {
      // console.log("Selected category:", selectedCategory);
      document.title = `Netflix - ${selectedCategory.name}`;
      setSelectedCategoryId(selectedCategory.id);
      setListTitle(selectedCategory.title);
      navigate(selectedCategory.path);
      // console.log("Navigated to:", selectedCategory.path);
    }
  };

  return (
    <>
      <div className="bg-[#141414]" ref={browseRef}>
        <Navbar onItemClick={handleNavbarClick} />
        <Billboard />
        <div className="pb-40 h-full">
          {movies.length === 0 ? (
            <p className="text-white text-[24px] flex justify-center">
              Chưa có phim nào.
            </p>
          ) : (
            <MovieList title={listTitle} data={movies} />
          )}
        </div>
        <BrowseFooter />
      </div>
    </>
  );
});

export default Browse;
