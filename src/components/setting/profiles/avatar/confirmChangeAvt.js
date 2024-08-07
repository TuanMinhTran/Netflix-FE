import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../scss/confirmChangeAvt.scss";
import {
  CHANGE_AVT,
  CURRENT_AVT,
} from "../../../../assets/images/settings/constantImg";
import AvatarEdit from "./avatarEdit";
import EditProfile from "../profilesManage/editProfile";

export default function ConfirmChangeAvt() {
  const [componentProfile, setComponentProfile] = useState("");

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;

  if (componentProfile === "backAvatarEdit") {
    currentComponent = <AvatarEdit />;
  } else if (componentProfile === "backEditProfile") {
    currentComponent = <EditProfile />;
  }

  return (
    <>
      <div className="box-mainConfirmChange">
        <div className="box-confirmChange">
          <div className="title">
            <h3>Bạn muốn thay đổi biểu tượng hồ sơ?</h3>
          </div>
          <div className="change-avatar">
            <div className="avatar-current">
              <img src={CURRENT_AVT.src} alt={CURRENT_AVT.alt} />
              <span>Hiện tại</span>
            </div>
            <div className="icon-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="avatar-change">
              <img src={CHANGE_AVT.src} alt={CHANGE_AVT.alt} />
              <span>Mới</span>
            </div>
          </div>
          <div className="btn-ConfirmChange">
            <button
              className="btn-agree"
              onClick={() => changeProfile("backEditProfile")}
            >
              Đồng ý
            </button>
            <button
              className="btn-notYet"
              onClick={() => changeProfile("backAvatarEdit")}
            >
              Vẫn chưa
            </button>
          </div>
        </div>
      </div>
      {currentComponent}
    </>
  );
}
