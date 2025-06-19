import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../database/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Notify from "../components/notification";
// ----------------------------------------------------------------------------------------------

const FirebaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(undefined);

  // Register the User ----------------------------------------------
  const signUpwithEmailAndPassword = async ({ email, password }) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        console.log("success", e);
        Notify({ message: "User Created Successfully!", option: "success" });
      })
      .catch((err) => {
        console.log("error", err);
        Notify({ message: "error", option: "error" });
      });
  };

  // Login the user --------------------------------------------------
  const loginwithEmailAndPassword = async ({ email, password }) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        console.log("success", e);
        Notify({ message: "Login Successful!", option: "success" });
      })
      .catch((err) => {
        console.log("error", err);
        Notify({ message: "error", option: "error" });
      });
  };

  // Logout the user --------------------------------------------------
  const logOutUser = async () => {
    return signOut(firebaseAuth)
      .then((e) => {
        console.log("success", e);
        Notify({ message: "Logout Successful!", option: "success" });
      })
      .catch((err) => {
        console.log("error", err);
        Notify({ message: "error", option: "error" });
      });
  };

  // Checks whether the user is logged In or not-----------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log("Hey", user.email);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Adds Contacts for the user ----------------------------------------
  const createContact = async (name, phone) => {
    const contactRef = collection(
      fireStore,
      `emergency-contacts/${user.uid}/contacts`
    );
    try {
      const result = await addDoc(contactRef, { name, phone });
      Notify({ message: "Contact Added", option: "details" });
      console.log(result);
    } catch (err) {
      Notify({ message: "Did not add the contact!", option: "error" });
      console.log(err);
    }
  };

  // Checks or Displays the contacts from the database ------------------
  const getDocument = async () => {
    const ref = collection(
      fireStore,
      "emergency-contacts",
      user.uid,
      "contacts"
    );
    try {
      const datDoc = await getDocs(ref);
      const contactDoc = datDoc.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(contactDoc);
      return contactDoc
    } catch (err) {
      console.log('Failed to fetch data!', err);
      return []
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpwithEmailAndPassword,
        loginwithEmailAndPassword,
        logOutUser,
        createContact,
        getDocument,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
