import React from "react";

function NumberName({ userName, phone }) {
  return (
    <>
      <div className="bg-gray-300 outline-2 outline-gray-500 text-gray-800 m-5 w-85/100 rounded-lg h-23 flex justify-between">
        <div className="p-2">
          <h2 className="font-semibold text-xl">{userName}</h2>
          <p>details - <br /> {phone} </p>
        </div>

        <div className="flex gap-5 p-5 justify-center items-center">
          <button className="bg-white rounded h-7 w-9 px-1 hover:bg-green-400 font-semibold hover:text-green-900 hover:outline-2 hover:outline-green-700"><i className="ri-edit-2-line"></i></button>
          <button className="bg-white rounded h-7 w-9 hover:bg-red-400 font-semibold hover:text-red-900 hover:outline-2 hover:outline-red-700 px-1"><i className="ri-delete-bin-6-line"></i></button>
        </div>
      </div>
    </>
  );
}
export default NumberName;
