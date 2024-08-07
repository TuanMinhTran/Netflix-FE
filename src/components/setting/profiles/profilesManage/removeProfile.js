import React, { useState } from "react";
import "../../scss/removeProfile.scss";
import EditProfile from "./editProfile";
import ShowListEdit from "./showListEdit";
import { IMG_REMOVE } from "../../../../assets/images/settings/constantImg";

export default function RemoveProfile() {
  const [componentProfile, setComponentProfile] = useState("");

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;
  if (componentProfile === "backEditProfiles") {
    currentComponent = <EditProfile />;
  } else if (componentProfile === "backShowListEdit") {
    currentComponent = <ShowListEdit />;
  }

  return (
    <>
      <div className="box-mainRemove">
        <div className="box-remove">
          <div className="title">
            <h1>Xóa hồ sơ?</h1>
          </div>
          <div className="box-contentRemove">
            <div className="box-avatar">
              <img src={IMG_REMOVE} alt="Img Remove Profile" />
              <span>username</span>
            </div>
            <div className="box-content">
              <span>
                Lịch sử của hồ sơ này, bao gồm Danh sách của tôi, đánh giá và
                hoạt động, sẽ mất vĩnh viễn và bạn sẽ không thể truy cập lại.
              </span>
            </div>
          </div>
          <div className="btn-remove">
            <span
              className="retain-records"
              onClick={() => changeProfile("backEditProfiles")}
            >
              Giữ lại hồ sơ
            </span>
            <span
              className="remove-profile"
              onClick={() => changeProfile("backShowListEdit")}
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
