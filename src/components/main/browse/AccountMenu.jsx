import React from "react";
import { Link } from "react-router-dom";

// image
import avatar1 from "../../../assets/images/settings/classic/classic-1.jpg";
import avatar2 from "../../../assets/images/settings/classic/classic-2.jpg";
import avatar3 from "../../../assets/images/settings/classic/classic-3.jpg";
import avatar4 from "../../../assets/images/settings/classic/classic-4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faFaceSmileBeam,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TextComponent from "../../setting/profiles/textComponent";

const AccountMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const email = localStorage.getItem("userEmail");

  const itemsAccount = [
    {
      title: "Profile 1",
      icon: avatar1,
    },
    {
      title: "Profile 2",
      icon: avatar2,
    },
    {
      title: "Profile 3",
      icon: avatar3,
    },
    {
      title: "Profile 4",
      icon: avatar4,
    },
  ];

  const items = [
    {
      title: "Quản lý hồ sơ",
      icon: faPencil,
      url: "/profiles/manage",
    },
    {
      title: "Chuyển hồ sơ",
      icon: faFaceSmileBeam,
      url: "/profile",
    },
    {
      title: "Tài khoản",
      icon: faUser,
      url: "/profile",
    },
    {
      title: "Trung tâm trợ giúp",
      icon: faCircleQuestion,
      url: "/profile",
    },
  ];

  return (
    <div className="bg-[#000000a2] w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3 text-xs font-semibold">
        {/* {itemsAccount.map((item, index) => ( */}
        <div className="px-3 flex gap-3 items-center">
          <img
            className="w-8 h-8 object-cover rounded"
            // src={item.icon}
            // alt={item.title}
          />
          {email && (
            <div className="text-white hover:underline">
              <TextComponent text={email} maxLength={15}/>
            </div>
          )}
        </div>
        {/* ))} */}
        {items.map((item, index) => (
          <div key={index} className="px-3 flex gap-3 items-center">
            <FontAwesomeIcon
              icon={item.icon}
              className="px-2 py-1 text-white text-lg"
            />
            <Link to={item.url} className="text-white hover:underline">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div className="px-3 text-center text-white text-sm hover:underline">
        Sign out of Netflix
      </div>
    </div>
  );
};

export default AccountMenu;
