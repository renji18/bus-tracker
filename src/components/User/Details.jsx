import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "Aadarsh Jha",
    image: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
    contact: 76000815656,
    email: "210305105278@paruluniversity.ac.in",
    enrollment: 210305105278,
    department: "BE-CSE",
    institute: "PIT-1",
    busEnrolled: true,
    busData: {
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

  const ItemRenderer = ({ name, value }) => (
    <div className="flex gap-2 items-center">
      <p className="font-[600] text-3xl">{name}:</p>
      <p className="font-[400] ml-2 text-2xl">{value}</p>
    </div>
  );

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80">
      <div className="h-20">
        <button
          onClick={() => navigate("/profile")}
          className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center "
        >
          &larr;
        </button>
      </div>
      <div
        class="backdrop-blur"
        className="bg-black/15 text-white relative p-20 flex flex-col justify-center gap-5"
      >
        <ItemRenderer name={"Name"} value={userDetails["name"]} />
        <ItemRenderer name={"Contact Number"} value={userDetails["contact"]} />
        <ItemRenderer name={"Email"} value={userDetails["email"]} />
        <ItemRenderer
          name={"Enrollment Number"}
          value={userDetails["enrollment"]}
        />
        <ItemRenderer name={"Department"} value={userDetails["department"]} />
        <ItemRenderer name={"Institute"} value={userDetails["institute"]} />
        <ItemRenderer
          name={"Validity Left"}
          value={userDetails["busData"]["validityLeft"]}
        />

        {userDetails["busEnrolled"] && (
          <ItemRenderer
            name={"Bus Enrolled"}
            value={userDetails["busEnrolled"] ? "Yes" : "No"}
          />
        )}
        {userDetails["busEnrolled"] ? (
          <div className="flex justify-center my-[15px]">
            <button
              className="bg-neutral-700 hover:bg-black transition-all duration-150 ease-linear	font-bold rounded-md tracking-wider p-5 text-5xl  "
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
    </div>
  );
};

export default Details;
