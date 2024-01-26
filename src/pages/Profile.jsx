import React from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center"
      >
        &larr;
      </button>
      <div className="p-20">
        <div className="">
          <button
            className="hover:bg-[#1db954] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-2xl font-bold"
            onClick={() => navigate("admin")}
          >
            Admin Login
          </button>
        </div>
        <div className="">
          <button
            className="hover:bg-[#1db954] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-2xl font-bold"
            onClick={() => navigate("user")}
          >
            User Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
