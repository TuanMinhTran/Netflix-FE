import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import {
  faCheck,
  faEye,
  faEyeSlash,
  faLaptop,
  faMobileScreenButton,
  faTabletScreenButton,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Payment from "./Payment/Payment";
import styles from "./Register.module.scss";
import Devices from "../../../assets/images/Devices.png";
import Checkmark from "../../../assets/images/Checkmark.png";

const cx = classNames.bind(styles);

function Register() {
  const { step } = useParams();
  const navigate = useNavigate();
  const [optionPayment, setOptionPayment] = useState("plandChoice0");

  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [packages, setPackages] = useState([]);

  const handleChangeOption = (e) => {
    setOptionPayment(e.target.value);
  };

  const handleChaneUser = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(user);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const isSuccess = await sendDataToApi();
      if (isSuccess) {
        navigate("/register/step2");
      }
    }
  };

  const sendDataToApi = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", user);
      console.log("API Response:", response.data);
      const { id, email } = response.data;
      setUser({ id, email });
      return true;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrors({ email: "Tài khoản với email này đã tồn tại." });
      } else {
        console.error("Error submitting data:", error);
      }
      return false;
    }
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/packages");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages", error);
      }
    };

    fetchPackages();
  }, []);

  const handleSelectPackage = async () => {
    const packageId = packages.find(
      (pack) => `plandChoice${pack.id}` === optionPayment
    )?.id;

    if (!user.id) {
      console.error("User ID is not defined.");
      return;
    }

    console.log("Selected Package ID:", packageId);
    console.log("User ID:", user.id);

    if (packageId) {
      try {
        await axios.post("http://localhost:8080/api/select", {
          userId: user.id,
          packageId,
        });
        navigate("/register/paymentPicker");
      } catch (error) {
        console.error("Failed to select package:", error);
      }
    }
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

  const getIconByDeviceName = (deviceName) => {
    switch (deviceName.toLowerCase()) {
      case "điện thoại":
        return faMobileScreenButton;
      case "máy tính bảng":
        return faTabletScreenButton;
      case "máy tính":
        return faLaptop;
      case "tv":
        return faTv;
      default:
        return null;
    }
  };

  return (
    <>
      <DefaultLayout>
        {/* trang đầu tiên */}
        {!step && (
          <div className={cx("wrapper")}>
            <img src={Devices} alt="step img" className={cx("step-img")} />
            <div className={cx("header")}>
              <span className={cx("step-indicator")}>Bước 1/3</span>
              <h1 className={cx("step-title")}>
                Hoàn thành việc cài đặt tài khoản của bạn
              </h1>
            </div>
            <div className={cx("regContext")}>
              Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem
              Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
            </div>
            <button
              className={cx("btn")}
              onClick={() => navigate("/register/regform")}
            >
              Tiếp theo
            </button>
          </div>
        )}
        {/* trang đăng kí thành viên */}
        {step === "regform" && (
          <div className={cx("wrapper", "reg-form")}>
            <div className={cx("header", "reg-form")}>
              <span className={cx("step-indicator")}>Bước 1/3</span>
              <h1 className={cx("step-title")}>
                Tạo mật khẩu để bắt đầu tư cách thành viên của bạn
              </h1>
            </div>
            <div className={cx("regContext")}>
              Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem
              Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
            </div>
            <form className={cx("form")}>
              <div className={cx("form-register")}>
                <input
                  type="text"
                  name="email"
                  value={user.name}
                  onChange={handleChaneUser}
                />
                <label className={user.email ? cx("active") : ""}>Email</label>
              </div>
              {errors.email && <p className={cx("noti-err")}>{errors.email}</p>}
              <div className={cx("form-register")}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={handleChaneUser}
                />
                <label className={user.password ? cx("active") : ""}>
                  Thêm mật khẩu
                </label>
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={() => setShowPassword(!showPassword)}
                  className={cx("password-toggle-icon")}
                />
              </div>
              {errors.password && (
                <p className={cx("noti-err")}>{errors.password}</p>
              )}
              <div>
                <input type="checkbox" className={cx("checkbox")} />
                Vui lòng không gửi các ưu đãi đặc biệt của Netflix qua email cho
                tôi
              </div>
            </form>
            <button className={cx("btn")} onClick={handleSubmitRegister}>
              Tiếp theo
            </button>
          </div>
        )}
        {/* trang chọn gói dịch vụ */}
        {step === "step2" && (
          <div className={cx("wrapper")}>
            <img
              src={Checkmark}
              alt="step img"
              className={cx("step-img", "small")}
            />
            <div className={cx("header")}>
              <span className={cx("step-indicator")}>Bước 2/3</span>
              <h1 className={cx("step-title")}>Chọn gói dịch vụ của bạn.</h1>
            </div>
            <div className={cx("regContext")}>
              <ul className={cx("checkmark-group")}>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>Không yêu cầu cam kết, hủy bất kỳ lúc nào.</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>Mọi thứ trên Netflix chỉ với mức giá thấp.</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>
                    {" "}
                    Không quảng cáo, không phụ phí. Luôn luôn như vậy.
                  </span>
                </li>
              </ul>
            </div>
            <button
              className={cx("btn")}
              onClick={() => navigate("/register/planform")}
            >
              Tiếp theo
            </button>
          </div>
        )}
        {/*  */}
        {step === "planform" && (
          <div className={cx("plan-form-container")}>
            <div className={cx("header-plan-form")}>
              <span className={cx("step-indicator")}>Bước 2/3</span>
              <h1 className={cx("step-title")}>
                Chọn gói dịch vụ phù hợp với bạn
              </h1>
            </div>
            <div className={cx("regContext")}>
              <ul className={cx("checkmark-group")}>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>Xem mọi nội dung bạn muốn. Không có quảng cáo.</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>Đề xuất dành riêng cho bạn.</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon-check")}
                  />
                  <span>
                    Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.
                  </span>
                </li>
              </ul>
            </div>
            <div className={cx("notify")}>(*)Vui lòng chọn gói phù hợp với bạn!</div>
            <div className={cx("plandGrid")}>
              <div className={cx("plandGrid-header")}>
                <div className={cx("plandGrid-selector")}>
                  {packages.map((pack, index) => (
                    <label
                      className={cx("plandGrid-selector-choice")}
                      htmlFor={`plandGrid-choice${index}`}
                      key={pack.id}
                    >
                      <input
                        type="radio"
                        name="plandChoice"
                        value={`plandChoice${index}`}
                        className={cx("plandGrid-selector-input")}
                        id={`plandGrid-choice${index}`}
                        onChange={handleChangeOption}
                      />
                      <span
                        className={cx("plandGrid-selector-label", {
                          "plandGrid-selected-label":
                            optionPayment === `plandChoice${index}`,
                        })}
                      >
                        {pack.packName}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <table className={cx("plandGrid-feature-table")}>
                <tbody className={cx("plandGrid-feature-table-body")}>
                  <tr className={cx("plandGrid-feature-table-row")}>
                    <th className={cx("plandGrid-featureCell")}>
                      Giá hàng tháng
                    </th>
                    {packages.map((pack, index) => (
                      <td
                        className={cx("plandGrid-cell", {
                          selected: optionPayment === `plandChoice${index}`,
                        })}
                        key={pack.id}
                      >
                        {pack.packPrice.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>
                    ))}
                  </tr>
                  <tr className={cx("plandGrid-feature-table-row")}>
                    <th className={cx("plandGrid-featureCell")}>
                      Chất lưọng video
                    </th>
                    {packages.map((pack, index) => (
                      <td
                        className={cx("plandGrid-cell", {
                          selected: optionPayment === `plandChoice${index}`,
                        })}
                        key={pack.id}
                      >
                        {pack.quality}
                      </td>
                    ))}
                  </tr>
                  <tr className={cx("plandGrid-feature-table-row")}>
                    <th className={cx("plandGrid-featureCell")}>
                      Độ phân giải
                    </th>
                    {packages.map((pack, index) => (
                      <td
                        className={cx("plandGrid-cell", {
                          selected: optionPayment === `plandChoice${index}`,
                        })}
                        key={pack.id}
                      >
                        {pack.resolution}
                      </td>
                    ))}
                  </tr>
                  <tr className={cx("plandGrid-feature-table-row")}>
                    <th className={cx("plandGrid-featureCell")}>
                      Các thiết bị có thể dùng xem
                    </th>
                    {packages.map((pack, index) => (
                      <td
                        className={cx("plandGrid-cell", {
                          selected: optionPayment === `plandChoice${index}`,
                        })}
                        key={pack.id}
                      >
                        {pack.deviceNames.map((deviceName, idx) => (
                          <div key={idx}>
                            <FontAwesomeIcon
                              icon={getIconByDeviceName(deviceName)}
                            />
                            <div>{deviceName}</div>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div>
                <small>
                  <span>
                    Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p),
                    Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ
                    internet và khả năng của thiết bị. Không phải tất cả nội
                    dung đều có sẵn ở mọi độ phân giải. Xem{" "}
                    <span>
                      <a href="/">Điều khoản sử dụng</a>
                    </span>{" "}
                    của chúng tôi để biết thêm chi tiết.
                  </span>
                  <div></div>
                  <span>
                    Chỉ những người sống cùng bạn mới có thể dùng tài khoản của
                    bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp,
                    2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.
                  </span>
                </small>
              </div>
            </div>
            <button className={cx("btn")} onClick={handleSelectPackage}>
              Tiếp theo
            </button>
          </div>
        )}
        {/* thanh toán */}
        {(step === "paymentPicker" ||
          step === "creditOption" ||
          step === "mobileWalletOption") && <Payment option={optionPayment} />}
      </DefaultLayout>
    </>
  );
}

export default Register;
