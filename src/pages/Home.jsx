import { useEffect, useState } from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";
import AlertsBtn from "../components/AlertsBtn";
import Loader from "../loading/Loader";

const Home = () => {
  const navigate = useNavigate();
  const [stopValue, setStopValue] = useState("");
  const [stopOptions, setStopOptions] = useState([]);

  const handleDropdownChange = (event) => {
    setStopValue(event.target.value);
  };

  const createStops = () => {
    if (data) {
      const stops = data.reduce((accumulator, ops) => {
        return [...accumulator, ...ops.stops];
      }, []);

      setStopOptions(stops);
    }
  };

  useEffect(() => {
    createStops();
  }, []);

  return stopOptions !== null ? (
    <div className="select-wrapper h-screen bg-zinc-400/50 flex items-center   justify-center bg-cover bg-no-repeat  ">
      <div className="absolute top-5 right-5 ">
        <AlertsBtn />
      </div>
      <div className="h-1/2 flex gap-4 items-center flex-col ">
        <p className=" text-black flex justify-center p-6 text-5xl font-bold ">
          Choose your stop
        </p>

        <div className="select  flex gap-2 text-xl">
          <div className="border-2 border-black rounded-l-lg flex justify-center">
            <select
              value={stopValue}
              onChange={handleDropdownChange}
              className="bg-white font-[500]  cursor-pointer px-20 w-full rounded-l-lg  text-[#1DB954] flex  border-none  outline-none"
            >
              <option value="">Select Here</option>

              {stopOptions?.map((stops) => (
                <option key={stops} className="cursor-pointer " value={stops}>
                  {stops}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => navigate("/detailspage", { state: { stopValue } })}
            className="bg-[#1DB954] px-5 py-2 border rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>
      <button
        className="hover:bg-[#1db954] rounded-md bg-white hover:text-white text-[#1db954] border-2 border-[#1db954] transition-all duration-500 ease-in-out px-5 py-3 text-2xl font-bold absolute top-5 left-5"
        onClick={() => navigate("/profile")}
      >
        Your Profile
      </button>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
