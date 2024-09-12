import React, { useState } from "react";

const TextComponent = ({ text, maxLength}) => {
  const [displayText, setDisplayText] = useState(text);

  if (text.length > maxLength) {
    return <div>{`${text.substring(0, maxLength)}...`}</div>;
  }

  return <div>{text}</div>;
};

export default TextComponent;
