import React from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { Link } from "react-router-dom";
import TextComponent from "../textComponent";
import { listManagement, listUser } from "./constants";

export default function AccountManage() {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("wrapper-lists")}>
        <ul className={cx("list-profileUsers")}>
          {listUser.map((data, idx) => (
            <li className={cx("listItem-profileUser")} key={idx}>
              <Link to={data.url}>
                <img src={data.img} alt={data.username} />
                <span>
                  <TextComponent text={data.username} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={cx("list-profileSettings")}>
          {listManagement.map((item, idx) => (
            <li key={idx} className={cx("listItem-profileSetting")}>
              <Link to={item.url}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={cx("checkOut-restrictions")}>
          <span>
            <Link to={"/"}>Đăng xuất khỏi Netflix</Link>
          </span>
        </div>
      </div>
    </>
  );
}
