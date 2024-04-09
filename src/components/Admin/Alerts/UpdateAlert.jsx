import React, { useState } from "react"

const UpdateAlert = ({ setAlertType }) => {
  const [updateType, setUpdateType] = useState(null)

  const [timingsData, setTimingsData] = useState({})

  const changeUpdateType = (t) => {
    t === "null" ? setUpdateType(null) : setUpdateType(t)
  }

  const formatTime = (inputTime) => {
    const [hours, minutes] = inputTime.split(":")
    let formattedHours = parseInt(hours, 10)
    const amPm = formattedHours >= 12 ? "PM" : "AM"
    formattedHours = formattedHours % 12 || 12
    const formattedMinutes = minutes.padStart(2, "0")
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amPm}`
    setTimingsData((prev) => ({
      newTiming: formattedTime,
      ...prev,
    }))
  }

  const saveTimingsAlert = () => {
    const oldLocalStorage = localStorage.getItem("PARUL_BUS_TIMINGS_ALERT")
    if (!oldLocalStorage) {
      localStorage.setItem(
        "PARUL_BUS_TIMINGS_ALERT",
        JSON.stringify([{ ...timingsData, at: new Date(Date.now()) }])
      )
    } else {
      const parsedjSON = JSON.parse(oldLocalStorage)
      const updatedData = [
        ...parsedjSON,
        { ...timingsData, at: new Date(Date.now()) },
      ]
      localStorage.setItem(
        "PARUL_BUS_TIMINGS_ALERT",
        JSON.stringify(updatedData)
      )
    }

    setAlertType(null)
  }

  return (
    <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 p-20 bg-gray-400/90">
      <div className="bg-black/70  max-w-[50vw] w-full lg:max-w-[50vw] relative p-10 space-y-5 text-white rounded-md">
        <button
          onClick={() => setAlertType(null)}
          className="absolute top-5 left-5 bg-emerald-300 text-3xl px-4 py-1 rounded  	 "
        >
          &larr;
        </button>
        <p className="text-3xl mb-5 text-center">Update Bus Details</p>
        <select
          className="text-xl text-black px-3 py-2"
          onChange={(e) => changeUpdateType(e.target.value)}
        >
          <option value={"null"}>Select Update Type</option>
          <option value={"timings"}>Timings Change</option>
          <option value={"busNumber"}>Bus Number Change</option>
        </select>

        {updateType === "timings" && (
          <div className="flex flex-col md:flex-col gap-2 md:gap-5">
            <p className="text-lg">Buses for timings</p>
            <select
              onChange={(e) =>
                setTimingsData((prev) => ({
                  oldTiming: e.target.value,
                  ...prev,
                }))
              }
              className="flex-1 py-3 text-black px-3 border-2 border-cyan-700 rounded"
            >
              <option value={"Select Timings Slot"}>
                Select Previous Timings Slot
              </option>
              <option value={"2:45 PM"}>2:45 PM</option>
              <option value={"5:30 PM"}>5:30 PM</option>
            </select>
            <p>will leave at</p>
            <input
              className="flex-1 text-black border-2 border-cyan-700 px-3 py-3 rounded"
              type="time"
              onChange={(e) => formatTime(e.target.value)}
            />

            <div className="flex justify-evenly mt-7">
              <button
                onClick={() => setAlertType(null)}
                className="bg-rose-400 text-white font-semibold text-lg lg:py-5 lg:px-16 rounded px-5 py-4"
              >
                Cancel
              </button>
              <button
                onClick={saveTimingsAlert}
                className="bg-emerald-400 text-white font-semibold text-lg lg:py-5 lg:px-16 rounded px-5 py-4"
              >
                Create Alert
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpdateAlert
