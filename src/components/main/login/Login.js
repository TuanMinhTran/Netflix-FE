import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { logo } from "../../../assets/images";
import styles from "./Login.module.scss";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LIST_LINK = [
    { to: "/", title: "Câu hỏi thường gặp" },
    { to: "/", title: "Trung tâm trợ giúp" },
    { to: "/", title: "Cửa hàng Netflix" },
    { to: "/", title: "Điều khoản sử dụng" },
    { to: "/", title: "Quyền riêng tư" },
    { to: "/", title: "Tùy chọn cookie" },
    { to: "/", title: "Thông tin doanh nghiệp" },
  ];
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleSubmitLogin = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(user);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/browse");
    }
  };
  const handleChaneUser = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  const validateForm = (data) => {
    let errors = {};
    if (!data.email.trim()) {
      errors.email = "Email không được để trống";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Vui lòng nhập đúng định dạng email";
    }
    if (!data.password.trim()) {
      errors.password = "Mật khẩu không được để trống";
    } else if (data.password.length < 8) {
      errors.password = "Mật khẩu phải dài hơn 8 ký tự";
    }
    return errors;
  };
  const isValidEmail = (email) => {
    // Use a regex or any other validation logic for email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <Link>{logo}</Link>
        </div>
        <div className={cx("login-container-wrapper")}>
          <div className={cx("login-container")}>
            <div className={cx("login-form-container")}>
              <h1 className={cx("login-title")}>Đăng nhập</h1>
              <form className={cx("login-form")}>
                <div className={cx("input-container")}>
                  <input
                    type="text"
                    name="email"
                    className={cx("input")}
                    value={user.name}
                    onChange={handleChaneUser}
                    placeholder=""
                  />
                  <label className={cx("label")}>
                    Email hoặc số điện thoại
                  </label>
                </div>
                {errors.email && (
                  <p className={cx("noti-err")}>{errors.email}</p>
                )}

                <div className={cx("input-container")}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    className={cx("input")}
                    onChange={handleChaneUser}
                    placeholder=""
                  />
                  <label className={cx("label")}>Mật khẩu</label>
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                    className={cx("password-toggle-icon")}
                  />
                </div>
                {errors.password && (
                  <p className={cx("noti-err")}>{errors.password}</p>
                )}
              </form>
              <button className={cx("btn")} onClick={handleSubmitLogin}>
                Đăng nhập
              </button>
              <div className={cx("login-form-help")}>
                <div>
                  <input type="checkbox" />
                  <span>Ghi nhớ tôi</span>
                </div>
                <div>
                  <a href="/">Bạn cần trợ giúp?</a>
                </div>
              </div>
            </div>
            <div className={cx("login-signup-now")}>
              <span>
                Bạn mới tham gia Netflix{" "}
                <Link to="/register" className={cx("link")}>
                  Đăng kí ngay
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={cx("wrapper-footer")}>
          <div className={cx("footer")}>
            <p className={cx("footer-top")}>
              <a href="/">Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
            </p>
            <ul className={cx("footer-links")}>
              {LIST_LINK.map((item, index) => (
                <li key={index} className={cx("footer-link-item")}>
                  <a href={item.to} className={cx("footer-link")}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className={cx("language-selection-container")}>
              <select className={cx("langue-picked")}>
                <option value="Việt Nam">Việt Nam</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
