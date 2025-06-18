import React from "react";
import NumberName from "../components/NumberName";
import AddContact from "../components/addContact";

function Contact() {
  return (
    <>
      <div className="w-full h-[38rem] bg-gradient-to-r from-[#AA00FF] to-[#7200F5] flex justify-center items-center">
        <div className="bg-white rounded-xl h-128 shadow-lg w-[42rem] text-black flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold mt-3">User Contacts</h1>
          <div className="flex flex-col w-full items-center">
            <NumberName />
            <AddContact/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
