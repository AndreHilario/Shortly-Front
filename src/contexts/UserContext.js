import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const localSUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localSUser !== null ? localSUser : "");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      if (location.pathname !== "/signin" && location.pathname !== "/signup") {
        navigate("/");
      }
    }
  }, [user, navigate, location]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}