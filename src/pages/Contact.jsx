import React, { useEffect, useState } from "react";
import NumberName from "../components/NumberName";
import AddContact from "../components/addContact";
import { useFirebase } from "../contexts/firebase";
import { useNavigate } from "react-router-dom";

function Contact() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    if (firebase.user) {
      navigate("/contact");
      const fetchData = async () => {
        const data = await firebase.getDocument();
        setContact(data);
      };
      fetchData();
    } else {
      navigate("/login");
    }
  }, [firebase.user, navigate]);

  return (
    <>
      <div className="w-full h-[38rem] bg-gradient-to-r from-[#AA00FF] to-[#7200F5] flex justify-center items-center z-10 relative">
        <div className="bg-white rounded-xl h-128 shadow-lg w-[42rem] text-black flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold mt-3">User Contacts</h1>
          <div className="flex flex-col w-full items-center justify-between h-full my-5">
            <div className="flex flex-col w-full items-center h-80 overflow-auto mb-5">
              {contact.length > 0 ? (
                contact.map((e) => (
                  <NumberName
                    userName={e.name}
                    phone={e.phone}
                    contactID={e.id}
                    onDelete={() => {
                      firebase.getDocument().then(setContact);
                    }}
                    onUpdate={() => {
                      firebase.getDocument().then(setContact);
                    }}
                  />
                ))
              ) : (
                <>
                  <p>No contacts added yet</p>
                </>
              )}
            </div>
            <AddContact
              onContactAdded={() => {
                firebase.getDocument().then(setContact);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
