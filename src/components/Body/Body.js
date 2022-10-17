import React from "react";
import mobileScreens from "../../public/Plexxos-img/mobile-screens.png";
import "./Body.css";

const Body = () => {
  return (
    <section className="px-6 mt-[39px]">
      <div className="w-full body rounded-t-[60px] h-[576px] px-[41px] pt-[55px]">
        <div className="w-full h-[306px]">
          <div className="font-[Ubuntu] text-white text-4xl leading-[54px] font-bold">
            Connect your healthcare team
          </div>
          <div className="w-[230px]">
            <div className="font-[Ubuntu] text-white text-xl leading-[30px] font-normal pt-[12px] pb-[36px]">
              The all-in-one tool for secure collaboration and effective time
              management.
            </div>
            <a href="https://google.com">
              <div className="font-[Ubuntu] text-base leading-[24px] font-medium bg-white py-[18px] w-[90%] text-center rounded-[20px]">
                Join our Waitlist
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src={mobileScreens}
        alt="mobileScreens"
        className="absolute top-[497px] w-[293.64] h-[400.1px]"
      />
    </section>
  );
};

export default Body;
