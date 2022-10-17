import React from "react";
import logo from "../../public/Plexxos-img/Plexxos-color.png";
const LogoBar = () => {
  return (
    <div className="w-full h-20 align-content">
      <img
        src={logo}
        alt="logo"
        className="w-36 align-content mx-auto mt-[9px]"
      />
    </div>
  );
};

export default LogoBar;
