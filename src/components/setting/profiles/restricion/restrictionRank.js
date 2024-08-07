import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "../../scss/restrictions.module.scss";
import Fuse from "fuse.js";
import { AVATAR_RESTRICTION } from "../../../../assets/images/settings/constantImg";
import "../../scss/restrictionRank.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  optionsRestriction,
  CustomCheckbox,
  Checkbox,
  CheckboxWrapper,
  CustomLabel,
  searchItemResult,
} from "./constants";

export default function RestrictionsRank() {
  const cx = classNames.bind(styles);

  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const checkboxRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [selectedContents, setSelectedContents] = useState([]);
  const [ageMessage, setAgeMessage] = useState("");

  const handleRatingClick = (value) => {
    setSelectedRating((prevSelected) =>
      prevSelected === value ? null : value
    );

    const allElements = document.querySelectorAll(".pin-rating-item");

    const selectedIndex = Array.from(allElements).findIndex((element) => {
      return element.dataset.uia === `maturity-rating-${value}`;
    });

    allElements.forEach((element) => {
      element.classList.remove("selected");
      element.classList.remove("label-selected");
    });

    for (let i = 0; i <= selectedIndex; i++) {
      allElements[i].classList.add("selected");
      allElements[i].classList.add("label-selected");
    }

    if (value === "48") {
      setSelectedRating(isChecked ? null : "48");
    }

    setIsChecked(false);
    setIsClicked(!isClicked);

    let newAgeMessage = "";

    if (value === "35") {
      newAgeMessage =
        "Chỉ hiển thị các video có mức xếp hạng độ tuổi <b>Tất cả</b> cho hồ sơ này.";
    } else if (value === "66") {
      newAgeMessage =
        "Hiển thị phim và chương trình dành cho mọi độ tuổi cho hồ sơ này.";
    } else {
      const selectedOption = optionsRestriction.find(
        (option) => option.value === value
      );

      if (selectedOption) {
        newAgeMessage = `Chỉ hiển thị các video có mức xếp hạng độ tuổi từ <b>${parseInt(
          selectedOption.title,
          10
        )}+ trở xuống</b> cho hồ sơ này.`;
      }
    }

    setAgeMessage(newAgeMessage);
  };

  const handleCheckboxClick = () => {
    setIsClicked(true);
    setIsChecked(!isChecked);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsClicked(true);
    setSelectedRating(isChecked ? null : "48");
  };

  const handleDocumentClick = (event) => {
    if (checkboxRef.current && !checkboxRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const clearSearchText = () => {
    setSearchText("");
    setSearchResult(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchText(value);

    if (value.length > 2) {
      setSearchResult(true);
    } else {
      setSearchResult(false);
    }
  };

  const getFilteredMovies = () => {
    const fuse = new Fuse(searchItemResult, {
      keys: ["title"],
      includeScore: true,
      threshold: 1,
      score: 1,
    });

    const results = fuse.search(searchText);

    return results.slice(0, 5).map((result) => result.item);
  };

  const handleItemClick = (selectedItem) => {
    setSelectedContents((prevSelectedContents) => [
      ...prevSelectedContents,
      selectedItem,
    ]);
    setSearchResult(false);
    setSearchText("");
  };

  const handleItemClear = (selectedItem) => {
    setSelectedContents((prevSelectedContents) =>
      prevSelectedContents.filter((item) => item !== selectedItem)
    );
  };

  return (
    <>
      <form>
        <div className={cx("detail-content-maxWidth")}>
          <div className={cx("title-avatar")}>
            <div className={cx("title")}>
              <h1>Giới hạn xem</h1>
            </div>
            <div className={cx("avatar")}>
              <img src={AVATAR_RESTRICTION} alt="Avatar Profile Restriction" />
            </div>
          </div>
          <div className={cx("checkPwd")}>
            <div className="box-RankAge">
              <h2 className="title-restriction title-rank">
                Xếp hạng độ tuổi hồ sơ cho Main Profile
              </h2>
              <div className="options-age">
                <div className="content-age">
                  <p className="detail-content-age">
                    {ageMessage ? (
                      <span dangerouslySetInnerHTML={{ __html: ageMessage }} />
                    ) : (
                      "Hiển thị phim và chương trình dành cho mọi độ tuổi cho hồ sơ này."
                    )}
                  </p>
                </div>
                <div className="box-detail-content-age">
                  {optionsRestriction.map((rating, index) => (
                    <div
                      key={index}
                      className={`content-restrictions-input-item ${
                        selectedRating === rating.value ? "selected" : ""
                      }`}
                      data-uia={`action-select-maturity-${rating.value}`}
                      onClick={() => handleRatingClick(rating.value)}
                    >
                      <div
                        className="content-restrictions-input"
                        style={{
                          display:
                            selectedRating === rating.value ? "block" : "none",
                        }}
                      >
                        <div className="content-restrictions-radio">
                          <input
                            type="radio"
                            className="check-radio"
                            id={`rating-radio-${rating.value}`}
                            name="maturity-rating"
                            data-uia={`maturity-${rating.value}-radio`}
                            value={rating.value}
                            checked={selectedRating === rating.value}
                          />
                        </div>
                      </div>
                      <label
                        htmlFor={`rating-radio-${rating.value}`}
                        className="content-restrictions-label"
                        onClick={() => handleRatingClick(rating.value)}
                      >
                        <div className="content-restriction-description">
                          <div>
                            <ul>
                              <li
                                className="pin-rating-item"
                                data-uia={`maturity-rating-${rating.value}`}
                                data-tooltip={rating.tooltip}
                              >
                                {rating.title}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="title-restriction title-children-profile">
                Hồ sơ trẻ em
              </h2>
              <CheckboxWrapper className="experience-children">
                <Checkbox
                  type="checkbox"
                  className="profile-children"
                  id="profile-experience"
                  checked={isChecked}
                  ref={checkboxRef}
                  onChange={handleCheckboxChange}
                />
                <CustomCheckbox
                  checked={isChecked}
                  isClicked={isClicked}
                  onClick={handleCheckboxClick}
                >
                  {isChecked && (
                    <FontAwesomeIcon className="fontCheck" icon={faCheck} />
                  )}
                </CustomCheckbox>
                <CustomLabel
                  onClick={() => handleRatingClick("48")}
                  htmlFor="profile-experience"
                >
                  Hiển thị nội dung Trải nghiệm Netflix Trẻ em với các video chỉ
                  dành cho trẻ em.
                </CustomLabel>
              </CheckboxWrapper>
              <h2 className="title-restriction title-restrictions-user">
                Giới hạn video cho User
              </h2>
              <p>
                Không hiển thị một số video cụ thể cho hồ sơ này dù Độ tuổi là
                gì đi nữa
              </p>
              <div className="content-restrictions-container">
                <div className="maturity-search">
                  <div className="maturity-search-box">
                    <input
                      type="text"
                      name="pin-search"
                      placeholder="Nhập tên phim hoặc chương trình truyền hình"
                      value={searchText}
                      onChange={handleSearchChange}
                    />
                    {searchText && (
                      <FontAwesomeIcon
                        className="fontXMark"
                        icon={faXmark}
                        onClick={clearSearchText}
                      />
                    )}
                  </div>
                  {searchResult && (
                    <div className="box-list-search">
                      <ul className="search-result">
                        {getFilteredMovies().map((movie, idx) => (
                          <li
                            key={idx}
                            className="item-search"
                            onClick={() => handleItemClick(movie.title)}
                          >
                            {movie.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedContents && (
                    <div className="protected-videos">
                      {selectedContents.map((selectedItem, idx) => (
                        <div key={idx} className="selected-movie">
                          <span className="title">{selectedItem}</span>
                          <FontAwesomeIcon
                            className="fontXMark-movie"
                            icon={faXmark}
                            onClick={() => handleItemClear(selectedItem)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={cx("btn-restriction", "btn-restrictionRank")}>
            <button className={cx("next")}>Lưu</button>
            <button className={cx("cancel")}>Hủy</button>
          </div>
        </div>
      </form>
    </>
  );
}
