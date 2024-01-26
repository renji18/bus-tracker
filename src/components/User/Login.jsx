import React, { useState } from "react"
const LOCAL_STORAGE_KEY_BUS_PROJECT = "LOCAL_STORAGE_KEY_BUS_PROJECT"

const Login = ({ setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState({ id: "", pass: "" })

  const handleDataChange = (key, value) => {
    setLoginData((prev) => ({ ...prev, [key]: value }))
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem(LOCAL_STORAGE_KEY_BUS_PROJECT, JSON.stringify("true"))
  }

  return (
    <div className="">
      <input
        value={loginData?.id}
        className="border"
        type="text"
        onChange={(e) => handleDataChange("id", e.target.value)}
        placeholder="Enter your id"
      />
      <input
        value={loginData?.pass}
        onChange={(e) => handleDataChange("pass", e.target.value)}
        className="border"
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
