import React, { useEffect, useState } from "react"
import Login from "../components/User/Login"
import Details from "../components/User/Details"

const LOCAL_STORAGE_KEY_BUS_PROJECT = "LOCAL_STORAGE_KEY_BUS_PROJECT"

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const localStateLoginStatus = localStorage.getItem(
      LOCAL_STORAGE_KEY_BUS_PROJECT
    )
    setIsLoggedIn(JSON.parse(localStateLoginStatus))
  }, [])

  return (
    <div>
      {isLoggedIn ? <Details /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

export default User
