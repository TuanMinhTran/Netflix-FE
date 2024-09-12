import { logo } from "../assets/images/index.js";
import profileImg from "../assets/images/default-profile.jpg";

const LOGO = {
  src: logo,
  alt: "logo",
};

const HEADTITLE = [
  {
    title: "Trang Chủ",
    path: "/browse",
    categoryId: null,
    listTitle: "Danh Sách Phim",
  },
  {
    title: "Phim T.hình",
    path: "/browse/tvshows",
    categoryId: 1,
    listTitle: "Danh Sách Phim T.hình",
  },
  {
    title: "Phim Kinh dị",
    path: "/browse/films",
    categoryId: 2,
    listTitle: "Danh Sách Phim Kinh dị",
  },
  {
    title: "Duyệt theo ngôn ngữ",
    path: "/browse/original-audio",
    categoryId: null,
    listTitle: "Danh Sách Phim Theo Ngôn Ngữ",
  },
];

const PROFILE = {
  name: "networld",
  avatar: profileImg,
};

const TOP_OFFSET = 66;

// const MOVIES_API_URL = "https://cg-netflix-back-end.onrender.com/api/v1/";
const MOVIES_API_URL = "http://localhost:8080/api/";
const CATEGORY_API_URL = "http://localhost:8080/api/categories";

export { LOGO, HEADTITLE, TOP_OFFSET, PROFILE, MOVIES_API_URL, CATEGORY_API_URL };
