import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Login from "../components/User/Login"
import abc from "../assets/abc.jpg"

const Profile = () => {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(false)

  function loginpage() {
    setShowLogin(!showLogin)
  }

  return (
    <div className="bg-zinc-300">
      <div
        className="h-screen w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${abc})`,
        }}
      >
        <div className="bg-black/40 h-screen">
          <div className="h-20 ">
            <button
              onClick={() => navigate("/")}
              className=" absolute top-5 left-5 backdrop-opacity-20 shadow-lg shadow-[#93c5fd] hover:text-white text-4xl text-[#1e40af] border-sky-300	 px-4 py-1 rounded flex justify-center content-center transition ease-in-out hover:-translate-1 hover:shadow-none hover:scale-110 hover:bg-[#1d4ed8]/65 font-bold bg-gray-300 duration-300 "
            >
              &larr;
            </button>
          </div>

          <div className="p-10 h-[500px] absolute right-40 flex flex-col justify-center gap-10">
            <div className={`${showLogin ? "hidden" : "block"}`}>
              <button
                className=" w-[310px] rounded-md backdrop-opacity-20 bg-white hover:text-white text-[#1e40af] border-2 border-[#1d4ed8] px-5 py-3 text-4xl font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#1d4ed8] duration-300 "
                onClick={() => {
                  navigate("admin")
                  loginpage()
                }}
              >
                Admin Login
              </button>
            </div>

            <div className={`${showLogin ? "hidden" : "block"}`}>
              <button
                className=" w-[310px] rounded-md backdrop-opacity-20 bg-white hover:text-white text-[#1e40af] border-2 border-[#1d4ed8]  px-5 py-3 text-4xl font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#1d4ed8] duration-300 "
                onClick={() => loginpage()}
              >
                User Login
              </button>
            </div>
          </div>

          {showLogin && <Login />}
          <div className=" h-10 w-10 absolute right-[95px] top-[5.3rem] z-20 transition ease-in-out delay-150 hover:-translate-1 hover:scale-110  duration-300	">
            {showLogin && (
              <div className="flex justify-end p-2">
                <button
                  onClick={loginpage}
                  className="text-white text-4xl  hover:text-gray-300 font-medium	  		"
                >
                  x
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
