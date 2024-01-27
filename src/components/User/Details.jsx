import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "Aadarsh Jha",
    image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
    contact: 7600081901,
    email: "210305105278@paruluniversity.ac.in",
    enrollment: 210305105278,
    department: "BE-CSE",
    institute: "PIT-1",
    busEnrolled: true,
    busData: {
      validityLeft: "5 months",
      busPassNo: "23/S/0324/028",
      shiftTime: "09:30-17:00",
      area: {
        number: 3,
        location: "Atladara, Narayanwadi",
      },
    },
  });

  return (
    <div
      class="backdrop-blur"
      className=" shadow-2xl bg-black bg-opacity-55     text-white   relative h-[450px]	right-[-45%] w-[50%] flex flex-col justify-center space-x-8  space-y-2  "
    >
      <div className="flex gap-2 px-[30px]">
        <p className="font-bold text-4xl ">Name:</p>
        <p className="font-medium text-4xl">{userDetails["name"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl	  ">Contact Number:</p>
        <p className="font-medium text-4xl	">{userDetails["contact"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl">Email:</p>
        <p className="font-medium text-4xl	">{userDetails["email"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl">Enrollment Number:</p>
        <p className="font-medium	text-4xl">{userDetails["enrollment"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl">Department:</p>
        <p className="font-medium text-4xl	">{userDetails["department"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl">Institute:</p>
        <p className="font-medium	text-4xl">{userDetails["institute"]}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold text-4xl">Bus Enrolled:</p>
        <p className="font-medium text-4xl	">
          {userDetails["busEnrolled"] ? "Yes" : "No"}
        </p>
      </div>
      {userDetails["busEnrolled"] && (
        <div className="flex gap-2 ">
          <p className="font-bold text-4xl">Validity Left:</p>
          <p className="font-medium text-4xl	">
            {userDetails["busData"]["validityLeft"]}
          </p>
        </div>
      )}
      {userDetails["busEnrolled"] ? (
        <div className="flex justify-center my-[15px]">
          <button
            className="bg-neutral-800	 rounded-md w-60 text-3xl  "
            onClick={() => navigate("bus-pass", { state: userDetails })}
          >
            View Bus Pass
          </button>
        </div>
      ) : (
        <div>
          <button
            className="border"
            onClick={() => navigate("bus-pass-payment")}
          >
            Enroll To Bus Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
