import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

import useUsers from "../../hooks/useUsers";
import axios from "axios";

function Emailpart({ onError }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { data } = useUsers();

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleButtonPress = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm({ email });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && isValidEmail(email)) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/check-email?check-email=${email}`
        );
        if (response.data === "exists") {
          navigate("/login");
        } else {
          navigate("/register");
        }
      } catch (error) {
        console.error("Error checking Email: ", error);
      }
    } else {
      onError(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (typeof data !== "object" || data === null) {
      errors.email = "Dữ liệu không hợp lệ";
      return errors;
    }

    if (typeof data.email !== "string") {
      errors.email = "Email không hợp lệ";
      return errors;
    }
    if (!data.email.trim()) {
      errors.email = "Vui lòng nhập Email của bạn.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Vui lòng nhập đúng định dạng Email.";
    }
    return errors;
  };

  return (
    <form onSubmit={handleButtonPress} className="email-signup">
      <input
        type="text"
        placeholder="Địa chỉ email"
        value={email}
        onChange={handleEmailChange}
      />

      <button type="submit">Bắt đầu</button>
    </form>
  );
}

export default Emailpart;
