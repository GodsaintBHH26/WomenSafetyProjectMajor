import React, { useState } from "react";
import { useFirebase } from "../contexts/firebase";

function NumberName({ userName, phone, contactID, onDelete, onUpdate }) {
  const firestore = useFirebase();
  const [editedName, setEditedName] = useState(userName);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async () => {
    await firestore.updateDocument(contactID, {
      cid: editedName,
      phone: editedPhone,
    });
    setIsEditing(false);
    onUpdate?.();
  };

  return (
    <>
      <div className="bg-gray-300 outline-2 outline-gray-500 text-gray-800 m-5 w-85/100 rounded-lg h-23 flex justify-between">
        <div className="p-2">
          <h2 className="font-semibold text-xl">{userName}</h2>
          <p>
            details - <br /> {phone}{" "}
          </p>
        </div>

        <div className="flex gap-5 p-5 justify-center items-center">
          <button
            className="bg-white rounded h-7 w-9 px-1 hover:bg-green-400 font-semibold hover:text-green-900 hover:outline-2 hover:outline-green-700"
            onClick={()=>setIsEditing(true)}
          >
            <i className="ri-edit-2-line"></i>
          </button>

          <button
            className="bg-white rounded h-7 w-9 hover:bg-red-400 font-semibold hover:text-red-900 hover:outline-2 hover:outline-red-700 px-1"
            onClick={async () => {
              await firestore.deleteDocument(contactID);
              onDelete?.();
            }}
          >
            <i className="ri-delete-bin-6-line"></i>
          </button>
        </div>
      </div>

      {isEditing && (
        <>
          <div className="w-full h-full z-20 flex justify-center shadow-xl absolute">
            <div className="bg-gray-400 w-96 h-80 rounded-xl flex flex-col justify-items items-center-safe p-5 text-white font-semibold text-2xl gap-4 ">
              <label className="">Edit Name</label>
              <input
                type="text"
                placeholder="Enter contact name"
                className="bg-white text-black"
                onChange={(e) => setEditedName(e.target.value)}
                value={editedName}
              />
              <label>Edit Phone</label>
              <input
                type="text"
                placeholder="Enter Phone number"
                className="bg-white text-black"
                onChange={(e) => setEditedPhone(e.target.value)}
                value={editedPhone}
              />
              <div className="flex gap-5 mt-5 ">
                <button
                  className="hover:bg-blue-400 p-1 hover:text-black rounded-md hover:outline-3 hover:outline-blue-700"
                  onClick={handleUpdate}
                >
                  Add
                </button>
                <button
                  className="hover:bg-red-400 p-1 hover:text-black rounded-md hover:outline-3 hover:outline-red-700"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default NumberName;
