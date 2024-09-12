import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  AVATAR_EDIT,
  // CLASSIC,
  // IMG_TITLE_1,
} from "../../../../assets/images/settings/constantImg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/avatarEdit.scss";
import ConfirmChangeAvt from "./confirmChangeAvt";
import EditProfile from "../profilesManage/editProfile";
import axios from "axios";
import { useCarouselHandler } from "../../../../hooks/useCarouselHandler";

export default function AvatarEdit() {
  const { sliderRef, slider, handlePrev, handleNext } = useCarouselHandler();
  const [componentProfile, setComponentProfile] = useState("");
  const [titles, setTitles] = useState([]);

  const email = localStorage.getItem("userEmail");

  const changeProfile = (type) => {
    setComponentProfile(type);
  };

  let currentComponent;
  if (componentProfile === "backEditProfile") {
    currentComponent = <EditProfile />;
  } else if (componentProfile === "goToConfirmAvatar") {
    currentComponent = <ConfirmChangeAvt />;
  }

  const settings = {
    draggable: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: true,
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/titles/avatars"
        );
        setTitles(response.data);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <>
      <div className="box-mainAvatar">
        <div className="box-avatar">
          <div className="header-container"></div>
          <div className="header-bg"></div>
          <div className="header-nav">
            <div className="title">
              <div
                className="icon"
                onClick={() => changeProfile("backEditProfile")}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="title-editProfileAvatar">
                <h1>Chỉnh sửa hồ sơ</h1>
                <h2>Chọn biểu tượng cho hồ sơ.</h2>
              </div>
            </div>
            <div className="avatar">
              <div className="username">
                <h2>{email}</h2>
              </div>
              <div className="avatar-username">
                <img src={AVATAR_EDIT.src} alt={AVATAR_EDIT.alt} />
              </div>
            </div>
          </div>
          <div className="wrapper-list-avatars">
            <div className="box-avatar-container">
              <ul className="list-avatars-themed">
                {titles.map((title, index) => (
                  <li key={title.id} className="detail-list-avatars-themed">
                    <h2>{title.titleAvatar}</h2>
                    <div className="list-slider-avatars">
                      {slider ? (
                        <span
                          id="icon-left-pre"
                          className="icon-left handle-slide"
                          onClick={() => handlePrev(index)}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                      ) : null}
                      <div className="slider-avatarsEdit">
                        <div className="slider-img-avatars">
                          <Slider
                            ref={(el) => (sliderRef.current[index] = el)}
                            {...settings}
                          >
                            {title.avatars.map((avatar) => (
                              <div
                                key={avatar.id}
                                className="slide-item"
                                onClick={() =>
                                  changeProfile("goToConfirmAvatar")
                                }
                              >
                                <div className="slide-pick">
                                  <img src={avatar.avatarUrl} alt="Avatar" />
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                      <span
                        id="icon-left-next"
                        className="icon-right handle-slide icon-next"
                        onClick={() => handleNext(index)}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {currentComponent}
    </>
  );
}
