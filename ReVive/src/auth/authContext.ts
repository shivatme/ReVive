import React from "react";

type AuthContextType = {
  user: any; // Replace `any` with your actual user type
  setUser: (user: any) => void; // Adjust the parameter type accordingly
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
