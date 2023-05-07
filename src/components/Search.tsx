import React from "react";
import { useState, useEffect } from "react";
import SearchSvg from "../pictures/icon-search.svg";
import axios from "axios";

interface Props {
  blackMode: Boolean;
  setBlackMode(blackMode: boolean): void;
  userInfo: any;
  setUserInfo(userInfo: any): void;
  setSearch(search: string): void;
  result: boolean;
}

const Search = ({
  blackMode,
  setBlackMode,
  userInfo,
  setUserInfo,
  setSearch,
  result,
}: Props): JSX.Element => {
  const inputValue = (e: any) => {
    e.preventDefault();
    setSearch(e.target.input.value);
  };
  return (
    <form
      onSubmit={inputValue}
      className={`flex flex-row items-center justify-center w-full  pl-[16px] pr-[7px] gap-[8px] shadow-lg mb-[16px] md:max-w-[573px] md:gap-[23.94px] md:pr-[10px] md:pl-[32px] md:mb-[24px] lg:max-w-[730px] ${
        blackMode ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"
      } py-[7px] rounded-[15px]`}
    >
      <img src={SearchSvg} alt="search icon" />
      <input
        id="input"
        defaultValue="achiewe"
        className={`w-full font-normal text-[13px] leading-[25px] border-none outline-none md:text-[18px] ${
          blackMode
            ? "text-[#4B6A9B], placeholder-[#4B6A9B]"
            : "text-[#FFFFFF], placeholder-[#FFFFFF], bg-[#1E2A47]"
        }`}
        placeholder="Search GitHub username…"
        type="search"
      />
      <p
        className={`text-[#F74646] text-[15px] w-[180px] font-bold ${
          result ? "hidden" : "block"
        }`}
      >
        {result === false ? "No Result" : ""}
      </p>
      <button
        type="submit"
        className="bg-[#0079FF] min-w-[84px] h-[46px] rounded-[10px] text-[white] font-bold text-[14px] md:min-w-[106px] md:h-[50px] md:text-[16px] md:hover:bg-[#60ABFF]"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
