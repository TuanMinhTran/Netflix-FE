import React from "react";
import { Routes, Route } from "react-router-dom";

import { HEADTITLE } from "../constants/constant";

import Login from "../components/main/login/Login";
import Register from "../components/main/register/Register";
import Browse from "../components/main/browse/Browse";
import OriginalAudio from "../components/main/browse/original-audio/OriginalAudio";
import Introduction from "../components/introduction/Introduction";
import Manage from "../components/setting/profiles/manage";
import Restrictions from "../components/setting/profiles/restricion/restrictions";
import Watch from "../components/main/watch/Watch";
import ContactUs from "../components/contactus/ContactUs";
import Admin from "../components/admin/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />

      {HEADTITLE.slice(0, 3).map((item, index) => {
        return <Route path={item.path} key={index} element={<Browse />} />;
      })}

      {HEADTITLE.slice(3).map((item, index) => {
        return (
          <Route path={item.path} key={index} element={<OriginalAudio />} />
        );
      })}

      <Route path="/watch/:movieId" element={<Watch />} />

      <Route path="/profiles/manage" element={<Manage />} />

      <Route path="/settings/restrictions" element={<Restrictions />} />

      <Route path="/register/:step?" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/support" element={<div>Support</div>} />

      <Route path="/contactus" element={<ContactUs />} />

      <Route path="/admin/*" element={<Admin />}></Route>
    </Routes>
  );
};

export default AppRoutes;
