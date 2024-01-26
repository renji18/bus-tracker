import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SingleRoute from "../components/Admin/SingleRoute"
import data from "../data"
import SingleRouteCard from "../components/Admin/SingleRouteCard"

const EditRoutes = () => {
  const navigate = useNavigate()

  const [routeData, setRouteData] = useState(null)
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    setRouteData(data)
  }, [])

  return (
    <div className="bg-slate-100">
      <button
        onClick={() => navigate("/profile/admin")}
        className="absolute top-5 left-5 bg-emerald-300 text-3xl px-4 py-1 rounded"
      >
        &larr;
      </button>
      {/* <div className='bg-red-400'>EditRoutes</div> */}
      <div className="title flex  justify-center text-black font-bold text-4xl  py-[50px]">
        Edit Bus Detail
      </div>

      <div className="flex text-black flex-wrap justify-evenly py-5 px-28 text-lg gap-10">
        {routeData?.map((rd) => (
          <SingleRouteCard setEdit={setEdit} key={rd?.id} data={rd} />
        ))}
      </div>
      {edit && (
        <SingleRoute
          data={edit}
          setEdit={setEdit}
          setRouteData={setRouteData}
        />
      )}
    </div>
  )
}

export default EditRoutes
