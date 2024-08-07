import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import { AVATAR_RESTRICTION } from "../../../../assets/images/settings/constantImg";
import RestrictionsRank from "./restrictionRank";
import { useNavigate } from "react-router-dom";

export default function Restrictions() {
  const [restrictionsPwd, setRestrictionsPwd] = useState(true);
  const [restrictionsRank, setRestrictionsRank] = useState(true);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profiles/manage");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorInput("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setErrorInput("#b00500");
      setErrorMessage("Bạn cần nhập mật khẩu.");
      return;
    }

    if (password === "123456") {
      setRestrictionsPwd(false);
      setRestrictionsRank(false);
    } else {
      setErrorInput("#b00500");
      setErrorMessage("Mật khẩu không chính xác.");
      return;
    }

    setErrorMessage("");
  };

  return (
    <>
      {restrictionsPwd && (
        <form onSubmit={handleSubmit}>
          <div className={cx("detail-content-maxWidth")}>
            <div className={cx("title-avatar")}>
              <div className={cx("title")}>
                <h1>Giới hạn xem</h1>
              </div>
              <div className={cx("avatar")}>
                <img
                  src={AVATAR_RESTRICTION}
                  alt="Avatar Profile Restriction"
                />
              </div>
            </div>
            <div className={cx("checkPwd")}>
              <span className={cx("restriction-password")}>
                Nhập mật khẩu tài khoản để chỉnh sửa Độ tuổi và Giới hạn video
                cho hồ sơ của Username.
              </span>
              <div className={cx("input-checkPwd")}>
                <input
                  className={cx("input")}
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ borderColor: errorInput }}
                />
                <span className={cx("forgetPwd")}>Bạn quên mật khẩu?</span>
              </div>
              {errorMessage && (
                <div className={cx("message")}>{errorMessage}</div>
              )}
            </div>
            <div className={cx("btn-restriction")}>
              <button type="submit" className={cx("next")}>
                Tiếp tục
              </button>
              <button
                type="submit"
                className={cx("cancel")}
                onClick={handleNavigate}
              >
                Hủy
              </button>
            </div>
          </div>
        </form>
      )}
      {!restrictionsRank && <RestrictionsRank />}
    </>
  );
}
