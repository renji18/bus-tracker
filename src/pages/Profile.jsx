import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../components/User/Login";

const Profile = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  function loginpage() {
    setShowLogin(!showLogin);
  }

  return (
    <div className="bg-cyan-600 h-full">
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607424064879-708250e57647?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="h-20 ">
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center "
          >
            &larr;
          </button>
        </div>

        <div className="p-10 h-[500px] absolute right-40 flex flex-col justify-center gap-10">
          <div className="">
            <button
              className="hover:bg-[#1db954] w-[310px] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-4xl font-bold "
              onClick={() => navigate("admin")}
            >
              Admin Login
            </button>
          </div>
          <div className="">
            <button
              className="hover:bg-[#1db954] w-[310px] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-4xl font-bold"
              onClick={() => {
                loginpage();
              }}
            >
              User Login
            </button>
          </div>
        </div>
      </div>

      {showLogin && <Login />}
    </div>
  );
};

export default Profile;
