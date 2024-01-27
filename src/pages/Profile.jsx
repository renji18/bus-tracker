import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-600		h-full">
      <div
        className="  h-full w-[50%] bg-cover 	
        bg-no-repeat 	 "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607424064879-708250e57647?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ",
        }}
      >
        <div className=" h-20 absolute right-[50%] ">
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center "
          >
            &larr;
          </button>
        </div>

        <div className="p-10 h-[500px] w-[50px] mx-[135%] pt-[-80px]  flex flex-col  justify-center gap-10">
          <div className="">
            <button
              className="hover:bg-[#1db954] w-[214px] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-2xl font-bold "
              onClick={() => navigate("admin")}
            >
              Admin Login
            </button>
          </div>
          <div className="">
            <button
              className="hover:bg-[#1db954] w-[214px] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-2xl font-bold"
              onClick={() => navigate("user")}
            >
              User Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;