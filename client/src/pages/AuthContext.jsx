import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    if (is_login && is_login.access) {
      setIsLoggedIn(true);
      setRoles(is_login.roles);
    } else {
      setIsLoggedIn(false);
      setRoles([]);
    }
  }, []);

  const signIn = (data) => {
    localStorage.setItem("is_login", JSON.stringify(data));
    setIsLoggedIn(true);
    setRoles(data.roles);
  };

  const signOut = () => {
    localStorage.removeItem("is_login");
    setIsLoggedIn(false);
    setRoles([]);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, roles, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
