import React, { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import authStorage from "./src/auth/authStorage";
import AuthContext from "./src/auth/authContext";

function App(): React.JSX.Element {
  const [user, setUser] = useState();
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={"#000000"} barStyle={"light-content"} />
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}

export default App;
