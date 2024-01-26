import React from "react"
import { useNavigate } from "react-router-dom"

const ExternalBusPayment = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate("/profile/user")} className="border p-5 m-10">Pay Now</button>
    </div>
  )
}

export default ExternalBusPayment
