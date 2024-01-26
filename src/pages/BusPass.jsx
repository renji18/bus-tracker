import React, { useState } from "react"
import { useLocation } from "react-router-dom"

const BusPass = () => {
  const location = useLocation()

  const [userData, setUserData] = useState(location?.state)

  console.log(userData);

  return <div>BusPass</div>
}

export default BusPass
