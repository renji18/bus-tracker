import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const SingleRoute = ({ data, setEdit, setRouteData }) => {
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(data)
  }, [data])

  const handleChangeData = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleAddStop = (pos) => {
    const copyStops = [...values.stops]
    copyStops.splice(pos + 1, 0, "")
    setValues((prev) => ({ ...prev, stops: copyStops }))
  }
  const handleRemoveStop = (pos) => {
    const copyStops = [...values.stops]
    copyStops.splice(pos, 1)
    setValues((prev) => ({ ...prev, stops: copyStops }))
  }
  const handleEditStop = (pos, value) => {
    const copyStops = [...values.stops]
    copyStops[pos] = value
    setValues((prev) => ({ ...prev, stops: copyStops }))
  }

  const handleConfirm = () => {
    setRouteData((prev) =>
      prev?.map((p) => (p?.id === values?.id ? values : p))
    )
    setEdit(null)
  }

  return (
    <div className="fixed h-screen text-white bg-black/90 top-0 overflow-y-scroll w-screen z-10 px-40">
      <div className="flex justify-between text-3xl pt-[50px] pb-20">
        <button
          onClick={() => setEdit(null)}
          className="bg-red-600 px-5 py-3 rounded font-serif"
        >
          Cancel
        </button>
        <p className="text-4xl underline">Edit Single Route</p>
        <button
          onClick={handleConfirm}
          className="bg-[#00AD83] px-5 py-3 rounded font-serif"
        >
          Confirm
        </button>
      </div>

      <div className="flex">
        <div className="w-1/2 text-xl flex flex-col gap-3">
          <div className="grid items-center grid-cols-2">
            <p className="text-2xl">Route Name:</p>
            <p>
              {data?.stops[0]} - {data?.stops[data?.stops?.length - 1]}
            </p>
          </div>

          <div className="grid items-center grid-cols-2">
            <p className="text-2xl">Driver Name:</p>
            <input
              className="text-black"
              onChange={(e) => handleChangeData("name", e.target.value)}
              type="text"
              value={values?.name}
            />
          </div>

          <div className="grid items-center grid-cols-2">
            <p className="text-2xl">Driver Number:</p>
            <input
              onChange={(e) => handleChangeData("phoneNo", e.target.value)}
              type="number"
              className="text-black"
              value={values?.phoneNo}
            />
          </div>

          <div className="grid items-center grid-cols-2">
            <p className="text-2xl">Bus Number:</p>
            <input
              onChange={(e) => handleChangeData("busNo", e.target.value)}
              type="text"
              className="text-black"
              value={values?.busNo}
            />
          </div>
        </div>

        <div className="w-1/2 text-2xl font-bold tracking-wide flex items-center gap-5 flex-col">
          <button>Add/Edit/Remove Stop</button>
          {values?.stops?.map((ds, index) => (
            <div key={index} className="flex items-center gap-5">
              <input
                onChange={(e) => handleEditStop(index, e.target.value)}
                type="text"
                className="text-black font-medium"
                value={ds}
              />
              <div className="flex items-center gap-4 text-4xl">
                <button onClick={() => handleRemoveStop(index)}>-</button>
                <button onClick={() => handleAddStop(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleRoute
