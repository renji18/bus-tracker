import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusPass = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    busData: {
      name: "Aadarsh Jha",
      image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
      contact: 76000815656,
      email: "210305105278@paruluniversity.ac.in",
      enrollment: 210305105278,
      department: "BE-CSE",
      institute: "PIT-1",
      busEnrolled: true,

      validityLeft: "5 months",
      cardId: "76950 (01601)",
      busPassNo: "23/S/0324/028",
      shiftTime: "09:30-17:00",
      area: {
        number: "03",
        location: "Atladara, Narayanwadi",
      },
    },
  });

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[100vh] gap-8  py-[150px] bg-zinc-300	">
      <div className=" h-20 ">
        <button
          onClick={() => navigate("/profile")}
          className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center "
        >
          &larr;
        </button>
      </div>
      <div className="bg-white shadow-2xl h-[350px] w-[550px] rounded-lg relative ">
        <div className=" bg-green-900 h-[100px] 	">
          <div className="w-[100%] h-[50%] flex justify-between p-3">
            <span className=" font-extrabold text-3xl text-slate-50">
              NAAC A++
            </span>
            <span className="font-extrabold text-3xl text-slate-50">
              Karasuno High
            </span>
          </div>
          <span className="mx-[28%] p-2 text-slate-200 ">
            Bus Pass No. {userData?.busData?.busPassNo}
          </span>
        </div>
        <div className="relative p-3">
          <img
            src={userData?.busData?.image}
            alt=""
            className="h-[100px] w-[100px] -mt-14"
          />
          <p className="font-bold text-xl absolute left-[200px] top-5">
            {userData?.busData?.name}
          </p>

          <div className="grid grid-cols-[auto,auto,1fr] gap-x-5 max-w-fit px-5 py-8 gap-y-2 w-2/3">
            <p className="max-w-fit font-semibold">Card ID</p>
            <p className="max-w-fit">:</p>
            <p className="max-w-fit">{userData?.busData?.cardId}</p>

            <p className="max-w-fit font-semibold">Dept</p>
            <p className="max-w-fit">:</p>
            <p className="max-w-fit">{userData?.busData?.department}</p>

            <p className="max-w-fit font-semibold">Inst.</p>
            <p className="max-w-fit">:</p>
            <p className="max-w-fit">{userData?.busData?.institute}</p>

            <p className="max-w-fit font-semibold">Shift Time</p>
            <p className="max-w-fit">:</p>
            <p className="max-w-fit">{userData?.busData?.shiftTime}</p>
          </div>
        </div>
        <div className="absolute bottom-11 right-10">
          <div className="relative h-[100px] w-full">
            <img
              src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
              alt=""
              className="h-[100px] w-[100px] absolute top-0 right-0"
            />
          </div>
          <p className="text-sm text-rose-600">
            AREA-{userData?.busData?.area?.number} (
            {userData?.busData?.area?.location})
          </p>
          <p className="text-sm mt-3">Cont. No. : {userData?.contact}</p>
        </div>
      </div>
      <div className="bg-white p-5 shadow-2xl flex flex-col gap-3 text-xs h-[350px] w-[550px] rounded-lg ">
        <span className="flex justify-center	font-bold	">IMPORTANT</span>

        <span className="">
          The pass holder must display this pass (No photo copy/soft copy of the
          pass/fee reciept) while travelling in the University's bus failing
          which the driver may not allow you into the bus. Moreover, travelling
          without valid bus pass may result into the penalty decided by the
          management of the University.
        </span>

        <span className="">
          The bus pass is valid only for the route for which it is issued. A
          prior written permission from PU Transport Deparment is required if it
          is used for the bus route other that it is issued for..
        </span>

        <span className="">
          A dublicate pass will be issued in case the original bus pass is lost.
          (Rs. 300/- for the first time and Rs. 1000/- or more as per prevailing
          norms thereafter.)
        </span>

        <span className="">
          Seats of first three rows are reserved for the staff members.
        </span>

        <span className="">
          The bus pass is valid only for the specific time period as mentioned
          on it and the same may be renewed before the expiry.
        </span>

        <span className="">
          Any indecipline behaviour/section may result into cancellation of the
          bus pass permanently.
        </span>
      </div>
    </div>
  );
};

export default BusPass;
