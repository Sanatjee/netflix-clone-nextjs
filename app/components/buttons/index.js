import React from "react";
import buttonCss from "./button.module.css";

const Button = ({ color, text, icon }) => {
  return (
    <a href='#'>
      <button className={`${buttonCss.btn} ${buttonCss[color]}`}>
        <span className={buttonCss.leftIcon}>{icon}</span>
        {text}
      </button>
    </a>
  );
};

export default Button;
