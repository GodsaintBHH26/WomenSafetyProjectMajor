import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "../database/firebase";
import { getDatabase } from "firebase/database";

const FirebaseContext = createContext(null);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);


export const FirebaseProvider = (props) => {
  const signUpwithEmailAndPassword = ({ email, password }) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  return <FirebaseContext.Provider value={{ signUpwithEmailAndPassword }}>{props.children}</FirebaseContext.Provider>;
};

export const useFirebase = () => useContext(FirebaseContext);