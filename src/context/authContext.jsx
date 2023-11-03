import React, { useState, useEffect, useContext, useMemo } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loginUser");
    setLoginUser(JSON.parse(user));
  }, []);
  const providerValue = useMemo(() => ({
    loginUser,
    setLoginUser,
  }));

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
