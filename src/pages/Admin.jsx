import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-[#1DB954] text-3xl px-4 py-1 rounded flex justify-center content-center"
      >
        &larr;
      </button>
      <div className="title flex  justify-center text-black font-bold text-4xl  py-[50px]">
        Admin Page
      </div>
      <div className="flex justify-center gap-10">
        <button
          onClick={() => {
            navigate("/admin/edit-routes");
          }}
          className="bg-[#50C878] text-white font-semibold text-lg py-5 px-16 rounded"
        >
          Edit Bus Routes
        </button>
        <button
          onClick={() => {
            navigate("/admin/create-alert");
          }}
          className="bg-[#50C878] text-white font-semibold text-lg py-5 px-16 rounded"
        >
          Create Alert
        </button>
      </div>
    </>
  );
};

export default Admin;
