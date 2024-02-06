import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../pages/Profile";

const LOCAL_STORAGE_KEY_BUS_PROJECT = "LOCAL_STORAGE_KEY_BUS_PROJECT";

const Login = ({ setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState({ id: "", pass: "" });

  const navigate = useNavigate();

  const handleDataChange = (key, value) => {
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem(LOCAL_STORAGE_KEY_BUS_PROJECT, JSON.stringify("true"));
  };

  return (
    <div className="  h-[500px] w-[470px] shadow-lg shadow-[#7dd3fc]	bg-white/40	 absolute top-[100px] right-[100px] flex flex-col justify-center items-center gap-8 z-20  ">
      <input
        value={loginData?.id}
        className="px-2 py-2 backdrop-opacity-20 w-[350px] text-black rounded-md focus:outline-none border-2 border-[#1d4ed8] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110  duration-300 "
        type="text"
        onChange={(e) => handleDataChange("id", e.target.value)}
        placeholder="Enter your id"
      />
      <input
        value={loginData?.pass}
        onChange={(e) => handleDataChange("pass", e.target.value)}
        className="px-2 py-2 backdrop-opacity-20 w-[350px] text-black rounded-md focus:outline-none border-2 border-[#1d4ed8] transition ease-in-out delay-150 hover:-translate-1 hover:scale-110  duration-300"
        type="password"
        placeholder="Enter your password"
      />
      <button
        className="rounded-lg font-bold text-2xl text-white bg-[#4f46e5] px-5 py-2 border-black transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-[#1d4ed8] duration-300	"
        onClick={
          ({ handleLogin },
          () => {
            // handleLogin();
            navigate("bus-pass");
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
