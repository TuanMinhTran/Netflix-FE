import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { miniLogo } from "../../assets/images";
import styles from "./ContactUs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBan,
  faBarsStaggered,
  faCaretDown,
  faCreditCard,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ContactUs() {
  const navigate = useNavigate();
  const LIST_LINK = [
    { to: "/", title: "Điều khoản sử dụng" },
    { to: "/", title: "Quyền riêng tư" },
    { to: "/", title: "Tùy chọn cookie" },
    { to: "/", title: "Thông tin doanh nghiệp" },
  ];
  const isLogin = false;
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header-wrapper")}>
          <div className={cx("header")}>
            <div className={cx("left-header")}>
              <div className={cx("logo")}>{miniLogo}</div>
              <div className={cx("help-center")}>
                <a href="/">Trung tâm trợ giúp</a>
              </div>
            </div>
            {isLogin ? (
              <div className={cx("right-header")}>
                <button
                  className={cx("btn", "btn-text")}
                  onClick={navigate("/register")}
                >
                  Tham gia netflix
                </button>
                <button
                  className={cx("btn", "btn-primary")}
                  onClick={() => navigate("/login")}
                >
                  Đăng nhập
                </button>
              </div>
            ) : (
              <div className={cx("right-header")}>
                <div className={cx("user-name")}>Hoangduc56199</div>
                <div className={cx("carret-icon")}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className={cx("tooltip")}>
                  <p className={cx("tooltip-item")}>Tài khoản</p>
                  <p className={cx("tooltip-item")}>Đăng xuất khỏi netflix</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cx("content")}>
          <h1 className={cx("content-header")}>Liên hệ với chúng tôi</h1>
          <div className={cx("description-problem")}>
            <p className={cx("lable-input")}>
              Hãy chia sẻ thêm và chúng tôi sẽ tìm giải pháp tốt nhất cho bạn
            </p>
            <div className={cx("wrapper-input")}>
              <input
                placeholder="Mô tả sự cố của bạn"
                className={cx("input")}
              />
              <div className={cx("icon-submit")}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className={cx("quick-connect")}>
            <p className={cx("lable-input")}>Liên kết nhanh</p>
            <ul>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="/">Yêu cầu chương trình truyền hình hoặc phim</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="/">Cập nhật email</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faLock} />
                <a href="/">Cập nhật mật khẩu</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faLock} />
                <a href="/">Cập nhật mật khẩu</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faCreditCard} />
                <a href="/">Cập nhật phương thức thanh toán</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faBan} />
                <a href="/">Hủy tài khoản</a>
              </li>
              <li className={cx("quick-connect-item")}>
                <FontAwesomeIcon icon={faBarsStaggered} />
                <a href="/">Xem lại lịch sử thanh toán</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("wrapper-footer")}>
          <div className={cx("footer")}>
            <div className={cx("language-selection-container")}>
              <select className={cx("langue-picked")}>
                <option value="Việt Nam">Việt Nam</option>
                <option value="English">English</option>
              </select>
            </div>
            <ul className={cx("footer-links")}>
              {LIST_LINK.map((item, index) => (
                <li key={index} className={cx("footer-link-item")}>
                  <a href={item.to} className={cx("footer-link")}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
