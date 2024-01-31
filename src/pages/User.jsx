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
    <div
      className=" bg-no-repeat bg-cover  h-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520442922418-8211a6fe605c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col   py-[130px]   ">
        {isLoggedIn ? <Details /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      </div>
    </div>
  )
}

export default User
