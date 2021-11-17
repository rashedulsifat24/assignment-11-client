import React, { createContext } from "react";
import useFirebase from "./../../Hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allcontex = useFirebase();
  return (
    <AuthContext.Provider value={allcontex}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
