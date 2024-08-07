import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

import useUsers from "../../hooks/useUsers";

function Emailpart() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { data } = useUsers();

  const checkEmail = () => {
    var isIncluded = data.some((e) => e.email === email);
    if (isIncluded) {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleButtonPress = (event) => {
    event.preventDefault();
    console.log(email);

    if (isValidEmail(email)) {
      setEmail(email);
      checkEmail();
    } else {
      console.log("Email không hợp lệ!");
    }
  };

  return (
    <form onSubmit={handleButtonPress} className="email-signup">
      <input
        type="email"
        placeholder="Địa chỉ email"
        value={email || ""}
        onChange={handleEmailChange}
        required
      />

      <button type="submit">Bắt đầu</button>
    </form>
  );
}

export default Emailpart;
