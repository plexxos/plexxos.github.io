import React from "react";
import mobileScreens from "../../public/Plexxos-img/mobile-screens.png";
import "./Body.css";

const Body = () => {
  return (
    <section className="px-6 mt-[39px] h-auto sm:mt-[139px] lg:px-10 lg:w-[100vw] lg:overflow-x-clip body">
      <div className="w-full gradient-container rounded-t-[60px] h-[576px] px-[20px] pt-[55px] md:px-[40px]">
        <div className="h-[306px]">
          <div className="text-white text-4xl leading-[50px] font-bold sm:text-[56px] sm:leading-[120%] md:w-[562px]">
            Connect your healthcare team
          </div>
          <div className="w-[90%]">
            <div className="font-[Ubuntu] text-white text-xl leading-[30px] font-normal pt-[12px] pb-[36px] sm:text-[32px] sm:leading-[120%] lg:w-[435px]">
              The all-in-one tool for secure collaboration and effective time
              management.
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9_9VYafr7unYLC0-kMc_DN3CogNIau0IJzX3MutXyZoAXDQ/viewform?usp=sf_link"
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-base leading-[24px] font-medium bg-white py-[18px] w-[80%] text-center rounded-[20px] sm:text-[22px] sm:leading-[120%] sm:w-[264px]">
                Join our Waitlist
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        src={mobileScreens}
        alt="mobileScreens"
        className="absolute top-[529px] w-[293.64] h-[400.1px] sm:w-[692px] sm:h-[843px] sm:left-[10%] lg:top-[90px] lg:left-[47%] lg:w-[692px] lg:h-[843px] xl:left-[55%] sm-screen"
      />
    </section>
  );
};

export default Body;
