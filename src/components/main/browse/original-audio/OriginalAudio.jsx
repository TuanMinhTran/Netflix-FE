import React from "react";

import Navbar from "../Navbar";
import BrowseFooter from "../BrowseFooter";
import Dropdown from "./Dropdown";
import MovieList from "../MovieList";

import useMovieList from "../../../../hooks/useMovieList";

const itemsDropdown1 = ["Ngôn ngữ gốc", "Lồng tiếng", "Phụ đề"];
const itemsDropdown2 = ["Tiếng Anh", "Tiếng Việt", "Tiếng Nhật"];
const itemsDropdown3 = ["Đề xuất dành cho bạn", "Năm phát hành", "A-Z", "Z-A"];

const OriginalAudio = () => {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <div className="w-full h-full bg-[#141414] flex flex-col gap-8">
        <Navbar />
        <div className="w-full h-[15%] relative flex justify-center">
          <header className="w-11/12 absolute bottom-0 flex justify-between">
            <h1 className="text-white text-4xl">Duyệt theo ngôn ngữ</h1>
            <div className="flex gap-2 justify-center items-center text-white">
              <p>Điều chỉnh tùy chọn của bạn</p>
              <Dropdown title="Ngôn ngữ gốc" itemsDropdown={itemsDropdown1} />
              <Dropdown title="Tiếng anh" itemsDropdown={itemsDropdown2} />
              <p>Sắp xếp theo</p>
              <Dropdown
                title="Đề xuất dành cho bạn"
                itemsDropdown={itemsDropdown3}
              />
            </div>
          </header>
        </div>
        <div>
          <MovieList data={movies} />
        </div>
        <BrowseFooter />
      </div>
    </>
  );
};

export default OriginalAudio;
