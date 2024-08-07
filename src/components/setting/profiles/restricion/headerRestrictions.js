import React from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  AVATAR_RESTRICTION,
  logoImg,
} from "../../../../assets/images/settings/constantImg";
import AccountManage from "./accountManage";

export default function HeaderRestrictions() {
  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  return (
    <>
      <div className={cx("max-width")}>
        <div
          className={cx("logo-restrictionProfile")}
          onClick={() => navigate("/browse")}
        >
          {logoImg}
        </div>
        <div className={cx("avatar-restrictionProfile")}>
          <img src={AVATAR_RESTRICTION} alt="Avatar Profile Restriction" />
          <FontAwesomeIcon icon={faCaretDown} />
          <div className={cx("list-profileRestriction")}>
            <AccountManage />
          </div>
        </div>
      </div>
    </>
  );
}
