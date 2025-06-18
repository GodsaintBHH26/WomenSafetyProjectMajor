import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../database/firebase";
import { getDatabase } from "firebase/database";
import Notify from "../components/notification";
// ----------------------------------------------------------------------------------------------

const FirebaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log('Hey', user)
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        signUpwithEmailAndPassword,
        loginwithEmailAndPassword,
        logOutUser,
        user
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
