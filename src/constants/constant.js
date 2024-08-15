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
  },
  {
    title: "Phim T.hình",
    path: "/browse/tvshows",
  },
  {
    title: "Phim",
    path: "/browse/films",
  },
  {
    title: "Duyệt theo ngôn ngữ",
    path: "/browse/original-audio",
  },
];

const PROFILE = {
  name: "networld",
  avatar: profileImg,
};

const TOP_OFFSET = 66;

// const MOVIES_API_URL = "https://cg-netflix-back-end.onrender.com/api/v1/";
const MOVIES_API_URL = "http://localhost:8080/api/";

export { LOGO, HEADTITLE, TOP_OFFSET, PROFILE, MOVIES_API_URL };
