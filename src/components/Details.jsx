/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import data from "../data";

const Details = ({ stopValue }) => {
  const [stopDetails, setStopDetails] = useState(null);

  useEffect(() => {
    const found = data?.filter((stop) =>
      stop?.stops?.find((item) => item === stopValue)
    )[0];
    setStopDetails(found);
    console.log(found);
  }, [stopValue]);

  return (
    <>
      <div className="text-2xl bg-white grid grid-cols-[auto,1fr] w-[700px] gap-x-7 gap-y-2 tracking-wide shadow-lg p-10 rounded-lg shadow-[#1DB954]">
        <p>Driver Name:</p>
        <p className="font-semibold">{stopDetails?.name}</p>
        <p>Contact Number:</p>
        <p className="font-semibold">{stopDetails?.phoneNo}</p>
        <p>Bus Number:</p>
        <p className="font-semibold">{stopDetails?.busNo}</p>
        <p>Stops:</p>

        <div>
          <span className="flex gap-3 mb-3">
            {stopDetails?.stops?.map((stop) => (
              <span className="font-semibold" key={stop}>
                {stop}
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Details;
