import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../../scss/manage.module.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../../scss/removeProfile.scss";
import { Link, useNavigate } from "react-router-dom";
import { CHOOSE_PROFILE_C } from "../../../../assets/images/settings/constantImg";
import ShowListEdit from "./showListEdit";
import RemoveProfile from "./removeProfile";
import AvatarEdit from "../avatar/avatarEdit";
import Header from "../headerProfile";

const cx = classNames.bind(styles);

export default function EditProfileChildren() {
  const [isCheckedNext, setIsCheckedNext] = useState(true);
  const [isCheckedPreview, setIsCheckedPreview] = useState(true);
  const [componentProfile, setComponentProfile] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;
  if (componentProfile === "backShowList") {
    currentComponent = <ShowListEdit />;
  } else if (componentProfile === "goToRemoveProfile") {
    currentComponent = <RemoveProfile />;
  } else if (componentProfile === "goToAvatarEdit") {
    currentComponent = <AvatarEdit />;
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(value.trim() !== "");
  };

  // handle checkBox
  const checkNext = cx("marker-checkAuto-next", { checkedNext: isCheckedNext });
  const checkPreview = cx("marker-checkAuto-preview", {
    checkedPreview: isCheckedPreview,
  });

  const handleCheckboxChangeNext = () => {
    setIsCheckedNext((prevChecked) => !prevChecked);
  };

  const handleCheckboxChangePreview = () => {
    setIsCheckedPreview((prevCheckedPrw) => !prevCheckedPrw);
  };

  return (
    <>
      <div className={cx("box-mainEditProfile")}>
        <div className={cx("header")}></div>
        <div className={cx("box-actionEditProfile", "box-childrenEditProfile")}>
          <Header />
          <h1 className={cx("title-editProfile")}>Chỉnh sửa hồ sơ</h1>
          <div className={cx("content-editProfile")}>
            <div className={cx("img-editProfile")}>
              <img
                className={cx("position-imgEdit")}
                src={CHOOSE_PROFILE_C}
                alt="Img Edit Profile Children"
              />
              <Link onClick={() => changeProfile("goToAvatarEdit")}>
                <FontAwesomeIcon
                  className={cx("actionEditAvatar-editProfile")}
                  icon={faPen}
                />
              </Link>
            </div>
            <div className={cx("profile-editParent")}>
              <div className={cx("input-editProfile")}>
                <input
                  className={cx("name-editProfile", "checkInput-editProfile")}
                  type="text"
                  placeholder="Tên"
                  value={inputValue}
                  style={{ borderColor: isValid ? "" : "red" }}
                  onChange={handleInputChange}
                />
                {!isValid && (
                  <p className={cx("checkName-editProfile")}>
                    Vui lòng nhập tên
                  </p>
                )}
              </div>

              <div className={cx("dropdown-editProfile")}>
                <h2 className={cx("title-editProfile")}>Ngôn ngữ</h2>
                <select className={cx("select-langue")} id="langue-editProfile">
                  <option value={"Tiếng Việt"}>Tiếng Việt</option>
                  <option value={"English"}>English</option>
                </select>
              </div>

              <div className={cx("settingAge-editProfile")}>
                <h2 className={cx("title-editProfile")}>Cài đặt độ tuổi:</h2>
                <button className={cx("allAge")}>Trẻ em</button>
                <button className={cx("ageChildren")}>10+</button>
                <p className={cx("display")}>
                  Chỉ hiển thị các video có mức xếp hạng độ tuổi từ
                  <b>10+ trở xuống</b> cho hồ sơ này.
                </p>
                <button
                  className={cx("btn-settingEditAge")}
                  onClick={() => navigate("/settings/restrictions")}
                >
                  Chỉnh sửa
                </button>
              </div>

              <div className={cx("autoPlay-editProfile")}>
                <h2 className={cx("title-editProfile")}>
                  Điều chỉnh tự động phát
                </h2>
                <div className={cx("marker-next")}>
                  <span
                    className={checkNext}
                    onClick={handleCheckboxChangeNext}
                  ></span>
                  <span
                    id="markerCheckNext"
                    className={cx("content-autoPlay-next")}
                    onClick={handleCheckboxChangeNext}
                  >
                    Tự động phát tập tiếp theo của một loạt phim trên tất cả các
                    thiết bị.
                  </span>
                </div>
                <div className={cx("marker-preview")}>
                  <span
                    className={checkPreview}
                    onClick={handleCheckboxChangePreview}
                  ></span>
                  <span
                    className={cx("content-autoPlay-preview")}
                    onClick={handleCheckboxChangePreview}
                  >
                    Tự động phát nội dung xem trước trong khi duyệt tìm trên tất
                    cả các thiết bị.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("btn-editUpdate")}>
            <span
              className={cx("btn-saveEditProfile")}
              onClick={() => changeProfile("backShowList")}
            >
              Lưu
            </span>
            <span
              className={cx("btn-cancelEditProfile")}
              onClick={() => changeProfile("backShowList")}
            >
              Hủy
            </span>
            <span
              className={cx("btn-deleteEditProfile")}
              onClick={() => changeProfile("goToRemoveProfile")}
            >
              Xóa hồ sơ
            </span>
          </div>
        </div>
      </div>
      {currentComponent}
    </>
  );
}
