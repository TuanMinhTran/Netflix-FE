import {
  CHOOSE_PROFILE_M,
  CHOOSE_PROFILE_C,
  CHOOSE_PROFILE_U,
} from "../../../../assets/images/settings/constantImg";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  position: relative;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

const CustomCheckbox = styled.div`
  width: 27px;
  height: 27px;
  border: 1px solid #b3b3b3;
  background-color: #fff;
  margin-right: 10px;
  display: inline-block;
  box-shadow: ${(props) => (props.isClicked ? "0 0 3px #0080ff" : "none")};
`;

const CustomLabel = styled.label`
  cursor: default;
  font-size: 1.2em;
`;

const listUser = [
  {
    img: CHOOSE_PROFILE_M,
    username: "Main Profile",
    url: "/browse",
  },
  {
    img: CHOOSE_PROFILE_U,
    username: "User Profile",
    url: "/browse",
  },
  {
    img: CHOOSE_PROFILE_C,
    username: "Children Profile",
    url: "/browse",
  },
];

const listSupports = [
  {
    title: "Âm thanh và phụ đề",
    url: "/",
  },
  {
    title: "Trung tâm trợ giúp",
    url: "/",
  },
  {
    title: "Thẻ quà tặng",
    url: "/",
  },
  {
    title: "Quan hệ với nhà đầu tư",
    url: "/",
  },
  {
    title: "Trung tâm đa phương tiện",
    url: "/",
  },
  {
    title: "Việc làm",
    url: "/",
  },
  {
    title: "Tùy chọn cookie",
    url: "/",
  },
  {
    title: "Điều khoản sử dụng",
    url: "/",
  },
  {
    title: "Tuyên bố về quyền riêng tư",
    url: "/",
  },
];

const listManagement = [
  {
    title: "Quản lý hồ sơ",
    url: "/profiles/manage",
  },
  {
    title: "Chuyển hồ sơ",
    url: "/",
  },
  {
    title: "Tài khoản",
    url: "/",
  },
  {
    title: "Trung tâm trợ giúp",
    url: "/",
  },
];

const optionsRestriction = [
  {
    title: "Tất cả",
    tooltip: "Đề xuất cho mọi đối tượng khán giả",
    value: "35",
  },
  {
    title: "7+",
    tooltip: "Đề xuất cho độ tuổi từ 7 trở lên",
    value: "42",
  },
  {
    title: "10+",
    tooltip: "Đề xuất cho độ tuổi từ 10 trở lên",
    value: "48",
  },
  {
    title: "13+",
    tooltip: "Đề xuất cho độ tuổi từ 13 trở lên",
    value: "54",
  },
  {
    title: "16+",
    tooltip: "Phù hợp với độ tuổi từ 16 trở lên",
    value: "60",
  },
  {
    title: "18+",
    tooltip: "Phù hợp với độ tuổi từ 18 trở lên",
    value: "66",
  },
];

const searchItemResult = [
  {
    title: "Phim 1",
  },
  {
    title: "Phim 2",
  },
  {
    title: "Phim 3",
  },
  {
    title: "Phim 4",
  },
  {
    title: "Phim 5",
  },
  {
    title: "Phim 6",
  },
  {
    title: "Phim 7",
  },
  {
    title: "Phim 8.1",
  },
  {
    title: "Phim 8.2",
  },
  {
    title: "Phim 8.3",
  },
  {
    title: "Phim 8.4",
  },
  {
    title: "Phim 8.5",
  },
  {
    title: "Phim 8.6",
  },
];

export {
  listSupports,
  listUser,
  listManagement,
  optionsRestriction,
  Checkbox,
  CustomCheckbox,
  CheckboxWrapper,
  CustomLabel,
  searchItemResult,
};
