import React from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { listSupports } from "./constants";
import RestrictionPwd from "./restrictionPwd.js";
import HeaderRestrictions from "./headerRestrictions";

export default function Restrictions() {
  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  const handleNavigateContactUs = () => {
    navigate("/contactus");
  };

  return (
    <>
      <div className={cx("box-mainRestrictions")}>
        <div className={cx("box-restrictions")}>
          <div className={cx("nav-restrictionProfile")}>
            <HeaderRestrictions />
          </div>

          <div className={cx("content-restrictionProfile")}>
            <RestrictionPwd />
          </div>

          <div className={cx("question-contactUs-restrictionProfile")}>
            <div className={cx("max-width")}>
              <h1
                className={cx("title-question")}
                onClick={handleNavigateContactUs}
              >
                Bạn có câu hỏi? Liên hệ với chúng tôi.
              </h1>
              <ul className={cx("link-support")}>
                {listSupports.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <span className={cx("code-service")}>Mã dịch vụ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
