import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../../scss/manage.module.scss";
import { faPen, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  CHOOSE_PROFILE_C,
  CHOOSE_PROFILE_M,
  CHOOSE_PROFILE_U,
} from "../../../../assets/images/settings/constantImg";
import AddNewProfile from "./addNewProfile";
import EditProfile from "./editProfile";
import EditProfileChildren from "./editProfileChildren";
import ProfileMain from "./profileMain";
import ChooseProfile from "./chooseProfile";

const cx = classNames.bind(styles);

export default function ShowListEdit() {
  const [componentProfile, setComponentProfile] = useState("");

  const changeComponentProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;
  if (componentProfile === "showAddNewProfile") {
    currentComponent = <AddNewProfile />;
  } else if (componentProfile === "showEditProfile") {
    currentComponent = <EditProfile />;
  } else if (componentProfile === "showEditProfileChildren") {
    currentComponent = <EditProfileChildren />;
  } else if (componentProfile === "showEditProfileMain") {
    currentComponent = <ProfileMain />;
  } else if (componentProfile === "goBackBrowse") {
    currentComponent = <ChooseProfile />;
  }

  return (
    <>
      <div className={cx("main-box-profile")}>
        <div className={cx("box-profile")}>
          <h1 className={cx("title-profile")}>Quản lý hồ sơ:</h1>
          <ul className={cx("choose-profile")}>
            <li
              className={cx("profile")}
              onClick={() => changeComponentProfile("showEditProfileMain")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <img src={CHOOSE_PROFILE_M} alt="Img Profile Main" />
                      <div className={cx("edit-profile")}>
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Main Profile</span>
                </Link>
              </div>
            </li>
            <li
              className={cx("profile")}
              onClick={() => changeComponentProfile("showEditProfile")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <img src={CHOOSE_PROFILE_U} alt="Img Profile User" />
                      <div className={cx("edit-profile")}>
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Name Profile</span>
                </Link>
              </div>
            </li>
            <li
              className={cx("profile")}
              onClick={() => changeComponentProfile("showEditProfileChildren")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <img src={CHOOSE_PROFILE_C} alt="Img Children Profile" />
                      <div className={cx("edit-profile")}>
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Children Profile</span>
                </Link>
              </div>
            </li>
            <li
              className={cx("profile")}
              onClick={() => changeComponentProfile("showAddNewProfile")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <div className={cx("add-profile")}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Thêm hồ sơ</span>
                </Link>
              </div>
            </li>
          </ul>
          <div className={cx("btn-profile")}>
            <Link onClick={() => changeComponentProfile("goBackBrowse")}>
              Hoàn tất
            </Link>
          </div>
        </div>
      </div>
      {currentComponent}
    </>
  );
}
