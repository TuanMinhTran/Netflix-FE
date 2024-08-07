import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  AVATAR,
  avatarRank,
  iconNickname,
} from "../../../../assets/images/settings/constantImg";
import "../../scss/modalProfile.scss";

export default function ModalProfile({ isOpen, onClose }) {
  const [isHover, setIsHover] = useState();
  const [currentBox, setCurrentBox] = useState(1);

  const handleContinue = () => {
    setCurrentBox(currentBox + 1);
  };

  const handleGoBack = () => {
    setCurrentBox(currentBox - 1);
  };

  return (
    <>
      {currentBox === 1 && (
        <div className={`box-mainInstruct ${isOpen ? "open" : "closed"}`}>
          <div className="align-self">
            <div className="box-instruct">
              <div className="close">
                <button
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  onClick={onClose}
                >
                  <FontAwesomeIcon icon={faXmark} />
                  {isHover && <div className="des-close">đóng</div>}
                </button>
              </div>
              <div className="content-instruct">
                <div className="avatar">
                  <img src={AVATAR.src} alt={AVATAR.alt} />
                  <span className="name">Alex</span>
                  <span className="nickname">
                    {iconNickname}
                    <span>SassyCat</span>
                  </span>
                </div>
                <div className="title-nickname">
                  <h1 className="title">Tên của bạn trong trò chơi</h1>
                  <span className="description">
                    Biệt hiệu trong trò chơi sẽ đại diện cho bạn trên Trò chơi
                    Netflix.
                  </span>
                </div>
                <div className="btn-instruct">
                  <div className="marker-active">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                  </div>
                  <button onClick={handleContinue}>Tiếp theo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentBox === 2 && (
        <div className="box-mainInstructSt2">
          <div className="align-self">
            <div className="box-instruct">
              <div className="close">
                <button
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  onClick={onClose}
                >
                  <FontAwesomeIcon icon={faXmark} />
                  {isHover && <div className="des-close">đóng</div>}
                </button>
              </div>
              <div className="content-instruct">
                <div className="avatar">
                  <span className="nickname">
                    {iconNickname}
                    <span>SassyCat muốn chơi</span>
                  </span>
                  <span className="nickname">
                    {iconNickname}
                    <span>SassyCat đã gửi lời mời</span>
                  </span>
                  <span className="nickname">
                    {iconNickname}
                    <span>SassyCa đang trực tuyến</span>
                  </span>
                </div>
                <div className="title-nickname">
                  <h1 className="title">Chơi cùng người khác</h1>
                  <span className="description">
                    Biệt hiệu duy nhất của bạn trong trò chơi sẽ được sử dụng
                    khi bạn chơi cùng các thành viên khác.
                  </span>
                </div>
                <div className="btn-instruct">
                  <button onClick={handleGoBack}>Quay lại</button>
                  <div className="marker-active">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                  </div>
                  <button onClick={handleContinue}>Tiếp theo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentBox === 3 && (
        <div className="box-mainInstructSt3">
          <div className="align-self">
            <div className="box-instruct">
              <div className="close">
                <button
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  onClick={onClose}
                >
                  <FontAwesomeIcon icon={faXmark} />
                  {isHover && <div className="des-close">đóng</div>}
                </button>
              </div>
              <div className="content-instruct">
                <div className="avatar">
                  <span className="nickname">
                    {avatarRank}
                    <span>SassyCat</span>
                  </span>
                  <span className="nickname">
                    {avatarRank}
                    <span>SassyCat</span>
                  </span>
                  <span className="nickname">
                    {avatarRank}
                    <span>SassyCat</span>
                  </span>
                </div>
                <div className="title-nickname">
                  <h1 className="title">Chinh phục bảng xếp hạng</h1>
                  <span className="description">
                    Biệt hiệu trong trò chơi sẽ cho phép bạn thấy vị trí của
                    mình trên bảng xếp hạng.
                  </span>
                </div>
                <div className="btn-instruct">
                  <button onClick={handleGoBack}>Quay lại</button>
                  <div className="marker-active">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                  </div>
                  <button onClick={onClose}>Hoàn tất</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
