import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../pages/Profile";

const LOCAL_STORAGE_KEY_BUS_PROJECT = "LOCAL_STORAGE_KEY_BUS_PROJECT";

const Login = ({ setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState({ id: "", pass: "" });

  const navigate = useNavigate();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // function handlePopupClick() {
  //   setIsPopupOpen(!isPopupOpen);
  // }

  const handleDataChange = (key, value) => {
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem(LOCAL_STORAGE_KEY_BUS_PROJECT, JSON.stringify("true"));
  };

  return (
    <div className=" backdrop-blur-sm h-[400px] w-[470px] absolute top-[100px] right-[100px] flex flex-col justify-center items-center gap-8 ">
      <input
        value={loginData?.id}
        className="px-2 py-2 bg-gray-100 w-[350px] text-black rounded-md focus:outline-none border-2 border-black "
        type="text"
        onChange={(e) => handleDataChange("id", e.target.value)}
        placeholder="Enter your id"
      />
      <input
        value={loginData?.pass}
        onChange={(e) => handleDataChange("pass", e.target.value)}
        className="px-2 py-2 bg-gray-100 w-[350px] text-black rounded-md focus:outline-none border-2 border-black"
        type="password"
        placeholder="Enter your password"
      />
      <button
        className="rounded-md  bg-slate-500 w-20 h-8 border-black"
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
      {/* <div className="bg-slate-500">
        {isPopupOpen && (
          <div>
            <button onClick={handlePopupClick}>X</button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Login;
