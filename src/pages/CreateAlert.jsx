import { useState } from "react";
import UpdateAlert from "../components/Admin/Alerts/UpdateAlert";
import CustomAlert from "../components/Admin/Alerts/CustomAlert";
import { useNavigate } from "react-router-dom";

const CreateAlert = () => {
  const navigate = useNavigate();
  const [alertType, setAlertType] = useState(null);

  return (
    <div className="text-black">
      <button
        onClick={() => navigate("/profile/admin")}
        className="absolute text-white top-5 left-5 bg-emerald-300 text-3xl px-4 py-1 rounded"
      >
        &larr;
      </button>
      <p className="text-4xl font-bold p-10 text-center">Create Alerts</p>

      <div className="flex justify-evenly items-center mx-20 mt-10">
        <button
          onClick={() => setAlertType("update")}
          className="bg-emerald-400 text-white font-semibold text-lg py-5 px-8 rounded"
        >
          Update in bus Details
        </button>
        <button
          onClick={() => setAlertType("custom")}
          className="bg-emerald-400 text-white font-semibold text-lg py-5 px-16 rounded"
        >
          Custom Alert
        </button>
      </div>

      {alertType === "update" && <UpdateAlert setAlertType={setAlertType} />}
      {alertType === "custom" && <CustomAlert setAlertType={setAlertType} />}
    </div>
  );
};

export default CreateAlert;
