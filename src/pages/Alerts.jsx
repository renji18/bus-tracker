import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Alerts = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    const alertsData = localStorage.getItem("PARUL_BUS_TIMINGS_ALERT");
    console.log(alertsData);
    if (!alertsData) return;
    setAlerts(JSON.parse(alertsData));
  }, []);

  return (
    <div className="text-black p-10">
      <button
        onClick={() => navigate("/")}
        className="absolute text-white top-5 left-5 bg-emerald-300 text-3xl px-4 py-1 rounded"
      >
        &larr;
      </button>
      <p className="text-4xl font-bold text-center mb-16">Alerts</p>
      {alerts ? (
        <div className="flex flex-col gap-3">
          {alerts?.map((a) => (
            <div
              className="text-lg border-b pb-2 flex justify-between px-20"
              key={a?.at}
            >
              <div>
                <span>Buses Scheduled for timings</span>{" "}
                <span>{a?.oldTiming}</span> <span>will depart at</span>{" "}
                <span>{a?.newTiming}.</span>
              </div>
              <span className="font-light text-stone-400">
                [ {new Date(a?.at)?.toString()?.split(" GMT")[0]} ]
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Alerts Yet, Come Back Later</p>
        </div>
      )}
    </div>
  );
};

export default Alerts;
