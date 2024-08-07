import React, { useState } from "react";
import "../../scss/removeProfile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "../../scss/manage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {
  CHOOSE_PROFILE_C,
  CHOOSE_PROFILE_M,
  CHOOSE_PROFILE_U,
} from "../../../../assets/images/settings/constantImg";
import ShowListEdit from "./showListEdit";
import AddNewProfile from "./addNewProfile";

const cx = classNames.bind(styles);

export default function ChooseProfile() {
  const [componentProfile, setComponentProfile] = useState("");
  const navigate = useNavigate();

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentProfile;
  if (componentProfile === "goToShowListProfile") {
    currentProfile = <ShowListEdit />;
  } else if (componentProfile === "backBrowse") {
    navigate("/browse");
  } else if (componentProfile === "goToAddNewProfile") {
    currentProfile = <AddNewProfile />;
  }

  return (
    <>
      <div className={cx("main-box-profile")}>
        <div className={cx("box-profile")}>
          <h1 className={cx("title-profile")}>Ai đang xem?</h1>
          <ul className={cx("choose-profile")}>
            <li
              className={cx("profile")}
              onClick={() => changeProfile("backBrowse")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div
                      className={cx("detail-avatar", "choose-profile-browse")}
                    >
                      <img src={CHOOSE_PROFILE_M} alt="Choose Profile Main" />
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Main Profile</span>
                </Link>
              </div>
            </li>
            <li
              className={cx("profile")}
              onClick={() => changeProfile("backBrowse")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div
                      className={cx("detail-avatar", "choose-profile-browse")}
                    >
                      <img src={CHOOSE_PROFILE_U} alt="Choose Profile User" />
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Name Profile</span>
                </Link>
              </div>
            </li>
            <li
              className={cx("profile")}
              onClick={() => changeProfile("backBrowse")}
            >
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div
                      className={cx("detail-avatar", "choose-profile-browse")}
                    >
                      <img
                        src={CHOOSE_PROFILE_C}
                        alt="Choose Profile Children"
                      />
                    </div>
                  </div>
                  <span className={cx("profile-name")}>Children Profile</span>
                </Link>
              </div>
            </li>
            <li className={cx("profile")}>
              <div className={cx("manage-profile")}>
                <Link className={cx("profile-link")}>
                  <div className={cx("profile-avatar")}>
                    <div className={cx("detail-avatar")}>
                      <div className={cx("add-profile")}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                  </div>
                  <span
                    className={cx("profile-name")}
                    onClick={() => changeProfile("goToAddNewProfile")}
                  >
                    Thêm hồ sơ
                  </span>
                </Link>
              </div>
            </li>
          </ul>
          <div className={cx("btn-profile", "btn-chooseProfile-browse")}>
            <Link onClick={() => changeProfile("goToShowListProfile")}>
              Quản lý hồ sơ
            </Link>
          </div>
        </div>
      </div>
      {currentProfile}
    </>
  );
}
