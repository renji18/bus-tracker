import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BusPass = () => {
  const location = useLocation();

  const [userData, setUserData] = useState(location?.state);

  console.log(userData);

  return (
    <div className="flex space-x-6 justify-center   py-[150px]	">
      <div className="bg-white shadow-2xl h-[350px] w-[550px] rounded-lg  ">
        <div className=" bg-green-900		 h-[100px] 	">
          <div className="w-[100%] h-[50%] flex ">
            <span
              className=" px-[2%] font-extrabold text-3xl text-slate-50
		"
            >
              NAAC A++
            </span>
            <span className="px-[11%] font-extrabold text-3xl text-slate-50">
              Parul University
            </span>
          </div>

          <span className=" m-[28%] text-slate-200 "> Bus N0.:5623</span>
        </div>
        <div className="absolute top-[29%] left-[16%]">
          <img src="" alt="" className="h-[130px] w-[130px] bg-black " />
        </div>
        <div className="absolute top-[50%] left-[18%]">
          <img src="" alt="" className="h-[70px] w-[70px] bg-green-900 " />
        </div>
        <div className="px-[30%] pt-[5px] font-semibold">
          <span className="">JHA AADARSH AJITKUMAR</span>
        </div>
        <div className=" px-[30%] py-[10px] font-semibold  ">
          {/* <br />
          <span className="">Card ID: 5654(63665)</span>
          <br />
          <span>Dept: BE-CSe</span>
          <br />
          <span>Inst.: PIT</span>
          <br />
          <span>Shift Time: 09:30-17:00</span>
          <br />
          <span>Cont. no.: 456235985</span> */}
          <div className="space-y-1">
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black">Card ID:</span>{" "}
              <span>5654(63665)</span>
            </p>
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black">Dept:</span>{" "}
              <span>BE-CSe</span>
            </p>
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black font-medium">
                Inst.:
              </span>{" "}
              <span>PIT</span>
            </p>
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black">Shift Time:</span>{" "}
              <span> 09:30-17:00</span>
            </p>
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black">Cont. no.</span>{" "}
              <span>456235985</span>
            </p>
            <p className="font-semibold sm:items-center flex flex-col sm:flex-row text-sm text-opacity-60 text-black px-2">
              <span className="text-sm mr-3 text-black">Student Number:</span>{" "}
              <span>45623</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[35%] left-[43%]">
          <img src="" alt="" className="h-[100px] w-[100px] bg-black " />
        </div>
      </div>
      <div className="bg-white shadow-xl h-[350px] w-[500px] rounded-lg space-x-2 space-y-2 ">
        <span className="flex justify-center text-sm	font-bold	">IMPORTANT</span>

        <span className="flex justify-center text-base		 ">
          The pass holder must display this pass whilw travling in the
          university bys.
        </span>

        <span className="flex justify-center text-center text-base		">
          the bus pass is valid only for the route for which it is issued.A
          prior written permission from pu transport deparment.
        </span>

        <span className="flex justify-center text-center text-base		">
          A dublicate pass will be issued in case the original bus pass is lost.
        </span>

        <span className="flex justify-center text-center text-base		">
          Seats of first three rows are reserved for the staff members.
        </span>

        <span className="flex justify-center text-center text-base		">
          the bus pass is valid only for the specific time period as mentioned
          on it.
        </span>

        <span className="flex justify-center text-center text-base		">
          Any indecipline behaviour/section may redult into cancellation of the
          bus pass permanently.
        </span>
      </div>
    </div>
  );
};

export default BusPass;
