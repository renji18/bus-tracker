/* eslint-disable react/prop-types */

const SingleRouteCard = ({ data, setEdit }) => {
  return (
    <div className="flex font-serif flex-col gap-2 border p-10 rounded-md shadow-lg border-[#00A550] bg-white shadow-[#1DB954]">
      <div className="flex items-center justify-between gap-10">
        <span className="font-bold text-2xl">From: </span>
        <span className="text-xl tracking-wider">{data?.stops[0]}</span>
      </div>
      <div className="flex items-center justify-between gap-10">
        <span className="font-bold text-2xl">To: </span>
        <span className="text-xl tracking-wider">
          {data?.stops[data?.stops?.length - 1]}
        </span>
      </div>
      <div className="flex items-center justify-between gap-10">
        <span className="font-bold text-2xl">Driver Name: </span>
        <span className="text-xl tracking-wider">{data?.name}</span>
      </div>
      <div className="flex items-center justify-between gap-10">
        <span className="font-bold text-2xl">Bus Number: </span>
        <span className="text-xl tracking-wider">{data?.busNo}</span>
      </div>
      <button
        onClick={() => setEdit(data)}
        className="bg-[#1DB954] mt-5 py-2 text-2xl tracking-wide"
      >
        Edit
      </button>
    </div>
  );
};

export default SingleRouteCard;
