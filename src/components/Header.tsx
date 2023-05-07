import React from "react";
import { useState, useEffect } from "react";
import MoonSvg from "../pictures/icon-moon.svg";
import SunSvg from "../pictures/icon-sun.svg";

interface Props {
  blackMode: Boolean;
  setBlackMode(blackMode: boolean): void;
}

const Header = ({ blackMode, setBlackMode }: Props): JSX.Element => {
  const changeMode = () => {
    setBlackMode(!blackMode);
  };
  return (
    <div className="w-full  flex justify-between items-center mt-[31px] mb-[35px] md:mt-[140px] md:max-w-[573px] lg:mt-[144px] lg:max-w-[730px]">
      <h1
        className={`font-bold text-[26px] leading-[38px] ${
          blackMode ? "text-[#222731]" : "text-[#FFFFFF]"
        }`}
      >
        devfinder
      </h1>
      <div
        className="flex flex-row items-center gap-[16px] cursor-pointer"
        onClick={() => {
          changeMode();
        }}
      >
        <h2
          className={`font-bold text-[13px] leading-[19.25px] ${
            blackMode ? "text-[#4B6A9B]" : "text-[#FFFFFF]"
          } tracking-[2.5px]`}
        >
          {blackMode ? "DARK" : "LIGHT"}
        </h2>
        <img src={blackMode ? MoonSvg : SunSvg} alt="light dark svg" />
      </div>
    </div>
  );
};

export default Header;
