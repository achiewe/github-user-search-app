import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { UserInfo } from "os";
import Outcome from "./components/Outcome";
import { User } from "./components/Types";

function App() {
  const [blackMode, setBlackMode] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<User | []>([]);
  const [search, setSearch] = useState<string>("achiewe");
  const [result, setResult] = useState<boolean>(true);
  return (
    <div
      className={`flex w-full flex-col min-h-screen items-center px-6 transition-all duration-500 md:px-0 md:h-full ${
        blackMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"
      }`}
    >
      <Header blackMode={blackMode} setBlackMode={setBlackMode} />
      <Search
        blackMode={blackMode}
        setBlackMode={setBlackMode}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setSearch={setSearch}
        result={result}
      />
      <Outcome
        blackMode={blackMode}
        setBlackMode={setBlackMode}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        search={search}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
