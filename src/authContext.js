import React, { createContext, useState } from "react";

const AuthChange = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  return (
    <AuthChange.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthChange.Provider>
  );
};

export { AuthProvider, AuthChange };
