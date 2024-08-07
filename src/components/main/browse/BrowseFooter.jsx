import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const BrowseFooter = () => {
  const iconList = [
    {
      icon: faFacebookF,
      path: "https://www.facebook.com/",
    },
    {
      icon: faInstagram,
      path: "https://www.instagram.com/",
    },
    {
      icon: faTwitter,
      path: "https://twitter.com/",
    },
    {
      icon: faYoutube,
      path: "https://www.youtube.com/",
    },
  ];
  const memberFooterLinkList = [
    {
      title: "Mô tả âm thanh",
      path: "/",
    },
    {
      title: "Trung tâm trợ giúp",
      path: "/",
    },
    {
      title: "Thẻ quà tặng",
      path: "/",
    },
    {
      title: "Trung tâm đa phương tiện",
      path: "/",
    },
    {
      title: "Quan hệ với nhà đầu tư",
      path: "/",
    },
    {
      title: "Việc làm",
      path: "/",
    },
    {
      title: "Điều khoản sử dụng",
      path: "/",
    },
    {
      title: "Quyền riêng tư",
      path: "/",
    },
    {
      title: "Thông báo pháp lý",
      path: "/",
    },
    {
      title: "Tùy chọn cookie",
      path: "/",
    },
    {
      title: "Thông tin doanh nghiệp",
      path: "/",
    },
    {
      title: "Liên hệ với chúng tôi",
      path: "/",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex flex-col gap-4 max-w-[50%]">
          <div className="text-white flex gap-6">
            {iconList.map((item, index) => (
              <a href={item.path} key={index} className="inline-block">
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
          <ul className="items-center flex flex-row flex-wrap text-[13px] my-14px p-0">
            {memberFooterLinkList.map((item, index) => (
              <li
                key={index}
                className="box-border flex-shrink-0 w-1/4 list-none mb-4 pr-22"
              >
                <Link to={item.path} className="text-[#808080] no-underline">
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>© 2023-2028 Netify, Inc.</span>
        </div>
      </div>
    </>
  );
};

export default BrowseFooter;
