import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Details = () => {
  const navigate = useNavigate()

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
  })

  return (
    <div>
      <div className="flex gap-2">
        <p>Name:</p>
        <p>{userDetails["name"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Contact Number:</p>
        <p>{userDetails["contact"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Email:</p>
        <p>{userDetails["email"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Enrollment Number:</p>
        <p>{userDetails["enrollment"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Department:</p>
        <p>{userDetails["department"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Institute:</p>
        <p>{userDetails["institute"]}</p>
      </div>
      <div className="flex gap-2">
        <p>Bus Enrolled:</p>
        <p>{userDetails["busEnrolled"] ? "Yes" : "No"}</p>
      </div>
      {userDetails["busEnrolled"] && (
        <div className="flex gap-2">
          <p>Validity Left:</p>
          <p>{userDetails["busData"]["validityLeft"]}</p>
        </div>
      )}
      {userDetails["busEnrolled"] ? (
        <div>
          <button
            className="border"
            onClick={() => navigate("bus-pass", { state: userDetails })}
          >
            View Bus Pass
          </button>
        </div>
      ) : (
        <div>
          <button
            className="border"
            onClick={() =>
              navigate("bus-pass-payment")
            }
          >
            Enroll To Bus Services
          </button>
        </div>
      )}
    </div>
  )
}

export default Details
