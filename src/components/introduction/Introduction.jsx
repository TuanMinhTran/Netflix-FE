import React, { useState } from "react";
import { Link } from "react-router-dom";
import Emailpart from "./Emailpart";
import Navbar from "./Navbar";
import "./style.scss";

function Introduction() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (errors) => {
    setErrorMessage(errors.email || "Có lỗi xảy ra!");
  };

  return (
    <>
      {/* Banner */}
      <section className="banner">
        <Navbar />

        <div className="header-content">
          <h1>
            Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
          </h1>
          <h3>Tham gia hôm nay, hủy bất kỳ lúc nào.</h3>
          <h4>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </h4>
          <Emailpart onError={handleError} />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </section>
      {/* Features */}
      <section className="features">
        {/* Enjoy your TV */}
        <div className="row">
          <div className="text-col">
            <h2>Thưởng thức trên TV của bạn</h2>
            <p>
              Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV,
              đầu phát Blu-ray và nhiều thiết bị khác.
            </p>
          </div>
          <div className="img-col">
            <img src="./../../images/tv.png" alt="" />
          </div>
        </div>
        {/* Download */}
        <div className="row">
          <div className="img-col">
            <img src="./../../images/tv.png" alt="" />
          </div>
          <div className="text-col">
            <h2>Tải xuống nội dung để xem ngoại tuyến</h2>
            <p>
              Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ
              để xem.
            </p>
          </div>
        </div>
        {/* Watch everywhere */}
        <div className="row">
          <div className="text-col">
            <h2>Xem ở mọi nơi</h2>
            <p>
              Phát trực tuyến không giới hạn phim và chương trình truyền hình
              trên điện thoại, máy tính bảng, máy tính xách tay và TV.
            </p>
          </div>
          <div className="img-col">
            <img src="./../../images/tv.png" alt="" />
          </div>
        </div>
        {/* For children */}
        <div className="row">
          <div className="img-col">
            <img src="./../../images/tv.png" alt="" />
          </div>
          <div className="text-col">
            <h2>Tạo hồ sơ cho trẻ em</h2>
            <p>
              Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích
              trong một không gian riêng. Tính năng này đi kèm miễn phí với tư
              cách thành viên của bạn.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Part */}
      <section className="faq">
        <h2>Câu hỏi thường gặp</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label className="accordion-menu" htmlFor="first">
              Netflix là gì?
            </label>
            <div className="content">
              <p>
                Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại
                chương trình truyền hình, phim, anime, phim tài liệu đoạt giải
                thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết
                nối Internet.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label className="accordion-menu" htmlFor="second">
              Tôi phải trả bao nhiêu tiền để xem Netflix??
            </label>
            <div className="content">
              <p>
                Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông
                minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với
                một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ
                70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.{" "}
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label className="accordion-menu" htmlFor="third">
              Tôi có thể xem ở đâu?
            </label>
            <div className="content">
              <p>
                Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn
                để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc
                trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng
                dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy
                tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi
                game.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label className="accordion-menu" htmlFor="fourth">
              Làm thế nào để hủy?
            </label>
            <div className="content">
              <p>
                Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng
                buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai
                cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng
                tài khoản bất cứ lúc nào.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label className="accordion-menu" htmlFor="fifth">
              Tôi có thể xem gì trên Netflix?
            </label>
            <div className="content">
              <p>
                Netflix có một thư viện phong phú gồm các phim truyện, phim tài
                liệu, chương trình truyền hình, anime, tác phẩm giành giải
                thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn
                bất cứ lúc nào bạn muốn.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label className="accordion-menu" htmlFor="sixth">
              Netflix có phù hợp cho trẻ em không?
            </label>
            <div className="content">
              <p>
                Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn,
                trao cho phụ huynh quyền kiểm soát trong khi các em có thể
                thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại
                không gian riêng.
              </p>
            </div>
          </li>
        </ul>
        <small className="footer-content">
          <h4>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </h4>
          <Emailpart onError={handleError} />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </small>
      </section>
      {/* Footer */}
      <section className="footer">
        <h2>Bạn có câu hỏi? Liên hệ với chúng tôi.</h2>
        <div className="row">
          <div className="col">
            <Link to="#">Câu hỏi thường gặp</Link>
            <br />
            <Link to="#">Tài khoản</Link>
            <br />
            <Link to="#">Quan hệ với nhà đầu tư</Link>
            <br />
            <Link to="#">Các cách xem</Link>
          </div>
          <div className="col">
            <Link to="#">Quyền riêng tư</Link>
            <br />
            <Link to="#">Thông tin doanh nghiệp</Link>
            <br />
            <Link to="#">Kiểm tra tốc độ</Link>
            <br />
            <Link to="#">Chỉ có trên Netflix</Link>
            <br />
          </div>
          <div className="col">
            <Link to="#">Trung tâm trợ giúp</Link>
            <br />
            <Link to="#">Trung tâm đa phương tiện</Link>
            <br />
            <Link to="#">Việc làm</Link>
            <br />
            <Link to="#">Điều khoản sử dụng</Link>
            <br />
          </div>
          <div className="col">
            <Link to="#">Tùy chọn cookie</Link>
            <br />
            <Link to="#">Thông tin doanh nghiệp</Link>
            <br />
            <Link to="#">Liên hệ với chúng tôi</Link>
            <br />
            <Link to="#">Thông báo pháp lý</Link>
          </div>
        </div>
        <select name="">
          <option value="">Tiếng Việt</option>
          <option value="">English</option>
          <option value="">日本語</option>
        </select>
        <p className="copyright-txt">Netflix Việt Nam</p>
      </section>
    </>
  );
}

export default Introduction;
