import React from "react";
import logo from "../../public/Plexxos-img/Plexxos-color.png";
const LogoBar = () => {
  return (
    <div className="w-full h-20 bg-white align-content sm:fixed sm:top-0 z-10 lg:fixed">
      <img
        src={logo}
        alt="logo"
        className="w-36 align-content mx-auto mt-[9px]"
      />
    </div>
  );
};

export default LogoBar;
