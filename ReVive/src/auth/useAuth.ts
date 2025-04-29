import { useContext } from "react";
import AuthContext from "./authContext";
import authStorage from "./authStorage";

type User = any; // Replace `any` with your actual User type

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  const { user, setUser } = context;

  const logIn = (user: User) => {
    setUser(user);
    authStorage.storeUser(user);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeUser();
  };

  return { user, logOut, logIn, setUser };
};

export default useAuth;
