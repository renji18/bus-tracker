import React from "react"
import { useNavigate } from "react-router-dom"

const AlertsBtn = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate("/alerts")}
      className="bg-white border-2 border-[#1DB954] hover:bg-[#1DB954] transition-all duration-300 ease-in-out hover:text-white text-[#1DB954] top-5 cursor-pointer p-2 text-2xl font-semibold rounded-xl"
    >
      Alerts
    </div>
  )
}

export default AlertsBtn
