import React, { useState } from "react";
import { useFirebase } from "../contexts/firebase";

function AddContact(props) {
  const firebase = useFirebase();
  const [cid, setCid] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);


  return (
    <>
      <button
        className="bg-blue-500 w-85/100 h-12 rounded-lg text-white font-semibold text-xl hover:bg-white hover:text-blue-500 hover:outline-3 hover:outline-blue-500"
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add Contacts
      </button>

      {showForm && (
        <div className="w-full h-full z-20 flex justify-center shadow-xl absolute">
          <div className="bg-gray-400 w-96 h-80 rounded-xl flex flex-col justify-items items-center-safe p-5 text-white font-semibold text-2xl gap-4 ">
            <label className="">Name</label>
            <input
              type="text"
              placeholder="Enter contact name"
              className="bg-white text-black"
              onChange={(e) => setCid(e.target.value)}
              value={cid}
            />
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone number"
              className="bg-white text-black"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <div className="flex gap-5 mt-5 ">
              <button
                className="hover:bg-blue-400 p-1 hover:text-black rounded-md hover:outline-3 hover:outline-blue-700"
                onClick={ async () => {
                  await firebase.createContact(cid, phone);
                  if (props.onContactAdded) props.onContactAdded();
                  setShowForm(false);
                  setCid('');
                  setPhone('');
                }}
              >
                Add
              </button>
              <button
                className="hover:bg-red-400 p-1 hover:text-black rounded-md hover:outline-3 hover:outline-red-700"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddContact;
