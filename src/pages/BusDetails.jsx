import { useLocation, useNavigate } from "react-router-dom/dist";
import Details from "../components/Details";
import GMap from "../components/Map/Map";
import AlertsBtn from "../components/AlertsBtn";

const BusDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const value = location.state.stopValue;

  return (
    <div className="bg-zinc-300 ">
      <div className="flex px-5 pt-5 justify-between">
        <button
          onClick={() => navigate("/")}
          className="bg-[#1DB954] text-3xl px-5 rounded grid place-items-center	"
        >
          &larr;
        </button>
        <div className="flex gap-2 pt-2 tracking-wider text-slate-600 text-4xl">
          <span>Details Of</span>
          <span className="text-black">{value}</span>
          <span>Stop</span>
        </div>
        <AlertsBtn />
      </div>
      <div className="flex justify-evenly items-center h-screen text-black font-[500] -mt-16 text-left">
        {/* <div className="my-2" /> */}
        <GMap />
        <Details stopValue={value} />
      </div>
    </div>
  );
};

export default BusDetails;
